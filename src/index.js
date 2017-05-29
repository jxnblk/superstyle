const merge = require('deepmerge')
const sheet = require('./sheet')
const toArray = require('./toArray')
const toCSS = require('./toCSS')
const createRefs = require('./createRefs')
const { isObj } = require('./util')

const superstyle = (style = {}) => {
  const rule = {}
  rule.id = sheet.cssRules.length.toString(36)
  rule.className = '_' + rule.id

  const styles = toArray(style)
  const selector = '.' + rule.className
  const css = toCSS(selector, styles)

  rule._refs = createRefs(styles)

  rule.rules = sheet.insert(css)

  const addNewRules = (nextStyle, keys) => {
    const nextStyles = toArray(nextStyle)
      .map(s => Object.assign(s, { keys: [ ...s.keys, ...keys ] }))
    const css = toCSS(selector, nextStyles)
    const nextRefs = createRefs([ ...styles, ...nextStyles ])
    const nextRules = sheet.insert(css)
    rule._refs = merge(rule._refs, nextRefs)
    rule.rules = [ ...rule.rules, ...nextRules ]
  }

  rule.set = (next, ref = rule._refs) => {
    for (let key in next) {
      const val = next[key]

      if (isObj(val)) {
        const nextRef = rule._refs[key]
        if (!nextRef) {
          const keys = [ ...(ref.keys || []), key ]
          addNewRules(val, keys)
          continue
        }

        rule.set(val, nextRef)
        continue
      }

      const { style } = rule.rules[ref.index]

      // ugh
      // potential browser bug?
      if (/^\-\-/.test(key)) {
        // custom properties - this method doesn't seem to work
        // with linear-gradient values
        style.setProperty(key, val)
      } else {
        style[key] = val
      }
    }
  }

  Object.defineProperty(rule, 'css', {
    get: function () {
      return this.rules.map(rule => rule.cssText)
    }
  })

  return rule
}

superstyle.sheet = sheet

module.exports = superstyle
