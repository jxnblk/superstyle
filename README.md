
# superstyle

CSSOM-based CSS-in-JS library

```sh
npm i superstyle
```

Superstyle is an experimental CSS-in-JS utility
library that uses CSSOM to patch updates to styles after injection.
Using plain JavaScript objects to author styles, superstyle
helps promote style encapsulation while making use of native
browser CSS APIs.

[View Demo](http://jxnblk.com/superstyle)

```js
// Usage
import superstyle from 'superstyle'

// create a superstyle rule object
const rule = superstyle({ color: 'blue' })

const h1 = document.getElementById('h1')

// Add className to an element
h1.className = rule.className

// Update the style in the CSSOM
rule.set({ color: 'tomato' })
```

Superstyle also supports nested objects for pseudoselectors and media queries

```js
const rule = superstyle({
  color: 'tomato',
  ':hover': {
    color: 'plum'
  },
  '@media screen and (min-width: 40em)': {
    color: 'lime'
  }
})
```

## API

### `superstyle`

(function) returns a superstyle [rule](#rule) object

```js
superstyle({ color: 'magenta' })
```

#### `superstyle.sheet`

(CSSStyleSheet) stylesheet object with additional helper methods

#### `sheet.css`

(getter) returns a string of CSS rules

```js
const css = sheet.css
```

#### `sheet.insert()`

(function) accepts an array of CSS rule strings and returns an array of corresponding CSSRule objects

```js
const cssRules = sheet.insert([ '.hello{color: magenta}' ])
```

### `rule`

(object) core object with className, set method and references to CSSRules

```js
const rule = superstyle({ color: 'magenta' })
```

#### `rule.className`

(string) unique className for the ruleset

```js
el.className = rule.className
```

#### `rule.set()`

(function) method to update the style object

```js
rule.set({ color: 'magenta' })
```

#### `rule.rules`

(array) array of CSSRules that correspond to the given rule

#### `rule.css`

(getter) returns an array of CSS strings for the rule


### React higher-order component

Superstyle also includes a React higher order component (HOC) for creating components with static styles that can be updated with a `css` prop.
Import the HOC from `superstyle/react`.

```jsx
import superstyle from 'superstyle/react'

// Any component that accepts the `className` prop
const Button = props =>
  <button {...props} />
)

// Static style object
const style = {
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  margin: 0,
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 24,
  paddingRight: 24,
  color: 'white',
  backgroundColor: '#07c',
  border: 0,
  borderRadius: 3,
  appearance: 'none'
}

export default superstyle(style)(Button)
```

```jsx
<div>
  <Button css={{ backgroundColor: 'magenta' }}>
    Hello
  </Button>
</div>
```

The higher order component also accepts strings for HTML tags to create primitive components.

```js
const Button = superstyle({
  ...style
})('button')
```


## Is this production-ready?

No. This is a proof-of-concept and has not been tested well enough for use in production. For a more stable CSS-in-JS library, try
[glamor](https://github.com/threepointone/glamor),
[cxs](https://github.com/jxnblk/cxs),
or [styled-components](https://github.com/styled-components/styled-components)

---

MIT License
