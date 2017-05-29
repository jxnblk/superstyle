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

test.todo('toCSS converts style arrays to CSS rules')
test.todo('createRefs creates a refs object')

test.todo('util.isObj tests objects')
test.todo('util.hyphenate hyphenates camelCased strings')
test.todo('util.px add px unit to numbers')

test('superstyle returns an object', t => {
  const rule = sx({ color: 'tomato' })
  t.is(typeof rule, 'object')
})

test('superstyle rule has id, className, refs, rules, and css properties', t => {
  const rule = sx({ color: 'tomato' })
  t.is(typeof rule.id, 'string')
  t.is(typeof rule.className, 'string')
  t.is(typeof rule.refs, 'object')
  t.true(Array.isArray(rule.rules))
  t.true(Array.isArray(rule.css))
})

test('superstyle adds css to sheet', t => {
  const rule = sx({ color: 'tomato' })
  t.is(sheet.css, '._0 {color: tomato;}')
})

test('superstyle.set() method changes the stylesheet rule while keeping the selectro', t => {
  const rule = sx({ color: 'tomato' })
  rule.set({ color: 'green' })
  t.is(sheet.css, '._0 {color: green;}')
})

