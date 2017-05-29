const style = document.createElement('style')
style.id = '_superstyle'
style.type = 'text/css'
document.head.appendChild(style)

const sheet = style.sheet

sheet.insert = css => css.map(rule => {
  const l = sheet.cssRules.length
  sheet.insertRule(rule, l)
  return sheet.cssRules[l]
})

sheet.clear = () => {
  while (sheet.cssRules.length) {
    sheet.deleteRule(0)
  }
}

Object.defineProperty(sheet, 'css', {
  get: function () {
    const rules = [...this.cssRules]
    return rules.map(rule => rule.cssText).join('')
  }
})

module.exports = sheet
