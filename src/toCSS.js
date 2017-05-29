
const media = keys => keys.filter(p => p.charAt(0) === '@')[0]

// todo: dont double specificity
const sel = (name, keys) => name + keys
  .filter(p => p.charAt(0) !== '@')
  .map(p => p.replace('&', ''))
  .reduce((a, b) => /^[a-zA-Z]/.test(b) ? (a + ' ' + b) : a + b, '')

const dec = arr => arr.map(d => `${d.key}:${d.value}`).join(';')

const createRule = name => rule => {
  const m = media(rule.keys)
  const s = sel(name, rule.keys)
  const d = dec(rule.declarations)
  const body = `${s}{${d}}`

  if (m) return `${m}{${body}}`

  return body
}

module.exports = (name, rules) => rules.map(createRule(name))
