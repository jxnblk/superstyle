require('browser-env')()

const test = require('ava')
const sheet = require('./src/sheet')
const toArray = require('./src/toArray')
const toCSS = require('./src/toCSS')
const createRefs = require('./src/createRefs')
const util = require('./src/util')
const sx = require('./src')

test.afterEach(() => {
  sheet.clear()
})

test('sheet is a CSSStyleSheet instance', t => {
  t.true(sheet instanceof CSSStyleSheet)
})

test('sheet has additional methods', t => {
  t.is(typeof sheet.insert, 'function')
  t.is(typeof sheet.css, 'string')
})

test('sheet insert adds an array of CSS rules', t => {
  sheet.insert(['.foo{color:tomato}'])
  t.is(sheet.cssRules.length, 1)
  t.is(sheet.css, '.foo {color: tomato;}')
})

test('sheet css returns css', t => {
  t.is(typeof sheet.css, 'string')
})

test('toArray converts style objects into arrays', t => {
  const arr = toArray({
    color: 'tomato',
    margin: 0,
    ':hover': {
      color: 'green'
    }
  })
  t.true(Array.isArray(arr))
  t.is(arr.length, 2)
  t.deepEqual(arr[1], {
    keys: [ ':hover' ],
    declarations: [
      { key: 'color', value: 'green' }
    ]
  })
})

test('toArray converts numbers to px values', t => {
  const [ style ] = toArray({ margin: 16 })
  const [ dec ] = style.declarations
  t.is(dec.value, '16px')
})

test('toArray hyphenates camelCase keys', t => {
  const [ style ] = toArray({ fontSize: 16 })
  const [ dec ] = style.declarations
  t.is(dec.key, 'font-size')
})

test('toCSS converts style arrays to CSS rules', t => {
  const css = toCSS('.hello', [
    {
      keys: [],
      declarations: [
        { key: 'margin', value: 0 }
      ]
    }
  ])
  t.true(Array.isArray(css))
  t.is(css[0], '.hello{margin:0}')
})

test('createRefs creates a refs object', t => {
  const refs = createRefs([
    { keys: [], declarations: [] },
    { keys: [ ':hover' ], declarations: [] },
  ])
  t.is(typeof refs, 'object')
  t.is(refs.index, 0)
  t.is(refs[':hover'].index, 1)
})

test('util.isObj tests objects', t => {
  t.true(util.isObj({}))
  t.false(util.isObj(null))
  t.false(util.isObj([ 1 ]))
  t.false(util.isObj(1))
  t.false(util.isObj('string'))
})

test('util.hyphenate hyphenates camelCased strings', t => {
  t.is(util.hyphenate('camelCaseString'), 'camel-case-string')
  t.is(util.hyphenate('WebkitDisplay'), '-webkit-display')
  t.is(util.hyphenate('msDisplay'), '-ms-display')
})

test('util.px add px unit to numbers', t => {
  t.is(util.px('fontSize')(16), '16px')
  t.is(util.px('fontSize')(0), 0)
  t.is(util.px('lineHeight')(1.5), 1.5)
  t.is(util.px('display')('block'), 'block')
})

test('superstyle returns an object', t => {
  const rule = sx({ color: 'tomato' })
  t.is(typeof rule, 'object')
})

test('superstyle rule has id, className, _refs, rules, and css properties', t => {
  const rule = sx({ color: 'tomato' })
  t.is(typeof rule.id, 'string')
  t.is(typeof rule.className, 'string')
  t.is(typeof rule._refs, 'object')
  t.true(Array.isArray(rule.rules))
  t.true(Array.isArray(rule.css))
})

test('superstyle adds css to sheet', t => {
  const rule = sx({ color: 'tomato' })
  t.is(sheet.css, '._0 {color: tomato;}')
})

test('rule.set() method changes the stylesheet rule while keeping the selector', t => {
  const rule = sx({ color: 'tomato' })
  rule.set({ color: 'green' })
  t.is(sheet.css, '._0 {color: green;}')
})

test('rule.set() adds new rules and refs', t => {
  const rule = sx({ color: 'tomato' })
  rule.set({
    ':hover': {
      color: 'green'
    }
  })
  t.regex(sheet.css, /:hover/)
  t.regex(sheet.css, /color: green/)
})


