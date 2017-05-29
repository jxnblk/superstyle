module.exports = rules => {
  const refs = {}

  rules.forEach((rule, i) => {
    const key = rule.keys.slice(-1)[0]
    const index = i

    if (!key) {
      refs.index = index
      return
    }

    let last = refs
    rule.keys.forEach(k => {
      last[k] = last[k] || {}
      last = last[k]
    })

    last.keys = rule.keys
    last.index = index
  })

  return refs
}
