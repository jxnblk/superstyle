const { isObj, hyphenate, px } = require('./util')

const toArray = (obj, keys = []) => {
  const rules = []
  const declarations = []

  for (let key in obj) {
    const value = obj[key]
    if (isObj(value)) continue

    declarations.push({
      key: hyphenate(key),
      value: px(key)(value)
    })
  }

  rules.push({ keys, declarations })

  for (let key in obj) {
    const value = obj[key]
    if (!isObj(value))  continue

    toArray(value, [ ...keys, key ]).forEach(rule => {
      rules.push(rule)
    })
  }

  return rules
}

module.exports = toArray
