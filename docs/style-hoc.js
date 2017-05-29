import { createElement as h } from 'react'

const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const clone = obj => Object.assign({}, obj)

const loop = (esc, mut) => obj => {
  for (let key in obj) {
    if (esc(key, obj[key])) continue
    mut(obj, key)
  }
  return obj
}

const BR = /[mp][trblxy]?-?[0-9]?/
const NR = /-/
const k = key => key.replace(/-|\d/g, '')
const bnum = key => parseInt(key.match(/\d/)[0]) * (NR.test(key) ? -1 : 1)
const bool = loop(
  (key, val) => val !== true || !BR.test(key),
  (obj, key) => {
    obj[k(key)] = bnum(key)
    delete obj[key]
  }
)

const shorthands = {
  w:  [ 'width' ],
  m:  [ 'margin' ],
  mt: [ 'marginTop' ],
  mr: [ 'marginRight' ],
  mb: [ 'marginBottom' ],
  ml: [ 'marginLeft' ],
  mx: [ 'marginLeft', 'marginRight' ],
  my: [ 'marginTop', 'marginBottom' ],
  p:  [ 'padding' ],
  pt: [ 'paddingTop' ],
  pr: [ 'paddingRight' ],
  pb: [ 'paddingBottom' ],
  pl: [ 'paddingLeft' ],
  px: [ 'paddingLeft', 'paddingRight' ],
  py: [ 'paddingTop', 'paddingBottom' ],
  fs: [ 'fontSize' ]
}
const short = loop(
  (key, val) => !shorthands[key],
  (obj, key) => {
    const longs = shorthands[key]
    longs.forEach(long => {
      obj[long] = obj[key]
    })
    delete obj[key]
  }
)

const num = n => typeof n === 'number' && !isNaN(n)
const w = n => num(n) ? (n > 1 ? n : (n * 100) + '%') : n
const width = loop(
  (key, val) => key !== 'width',
  (obj, key) => {
    obj[key] = w(obj[key])
  }
)

const SR = /^(margin|padding)/
const space = n => [ 0, 8, 16, 32, 64 ][n] || n
const neg = n => n < 0
const x = n => num(n) ? space(Math.abs(n)) * (neg(n) ? -1 : 1) : n
const scale = loop(
  (key, val) => !SR.test(key),
  (obj, key) => {
    obj[key] = x(obj[key])
  }
)

const PR = /^(@media|margin|padding|fontSize|width)/
const toProps = loop(
  (key, val) => !PR.test(key),
  (obj, key) => {
    obj.css = Object.assign({}, obj.css, {
      [key]: obj[key]
    })
    delete obj[key]
  }
)

const parse = compose(
  toProps,
  scale,
  // width,
  short,
  bool,
  clone
)

const hoc = c => p => h(p.is || c, parse(p))
// const hoc = c => p => h(c, p)

export default hoc
