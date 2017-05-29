
# superstyle

CSSOM-based CSS-in-JS library

- Browser-only
- Updates CSS rules in the stylesheet without changing the className

```sh
npm i superstyle
```

```js
// Usage
import sx from 'superstyle'

// create a superstyle rule object
const rule = sx({ color: 'blue' })

const h1 = document.getElementById('h1')

// Add className to an element
h1.className = rule.className

// Update the style in the CSSOM
rule.set({ color: 'tomato' })
```

Superstyle also supports nested objects for pseudoselectors and media queries

```js
const rule = sx({
  color: 'tomato',
  ':hover': {
    color: 'plum'
  },
  '@media screen and (min-width: 40em)': {
    color: 'lime'
  }
})
```


---

MIT License
