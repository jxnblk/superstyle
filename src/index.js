const sheet = require('./sheet')
const toArray = require('./toArray')
const toCSS = require('./toCSS')
const createRefs = require('./createRefs')
const { isObj } = require('./util')

const superstyle = style => {
  const rule = {}
  rule.id = sheet.cssRules.length.toString(36)
  rule.className = '_' + rule.id

  const styles = toArray(style)
  const selector = '.' + rule.className
  const css = toCSS(selector,styles)

  rule.refs = createRefs(styles)

  rule.rules = sheet.insert(css)

  rule.set = (next, ref = rule.refs) => {
    for (let key in next) {
      const val = next[key]

      if (isObj(val)) {
        const nextRef = rule.refs[key]
        if (!nextRef) continue

        rule.set(val, nextRef)
        continue
      }

      const { style } = rule.rules[ref.index]
      style[key] = val
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
