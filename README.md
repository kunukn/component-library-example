# Component library example in ReactJS

## methodology and strategy

- Semantic HTML
- Atomic design, bottom up.
- BEM naming for styling.
- Eliminate dead CSS. Only needed styling are compiled. The React components import the needed styling.
- Component based architecture. Each component owns the style-guide definition, styling and unit testing.
- A css bundle is generated which can be shared to other projects than ReactJS. (markup pattern)

## tech used

- Babel 7, ECMAScript 8
- Webpack, Webpack-dev-server
- React, Storybook
- Context Api using the (Redux + Redux thunk) pattern

## quick start

### view component library

[view storybook](https://kunukn.github.io/component-library-example/)

- git clone/download
- yarn install
- yarn storybook
- open localhost:6006 in a browser

## demo of prototype

- [codesandbox](https://codesandbox.io/s/2wnqxljx3r)
- [codepen](https://codepen.io/kunukn/pen/af465fa28f09d781363f290d3205bd1e)

## library usage example with npm

```
import { Button, Icon } from '@kunukn/ComponentLibraryExample';

let IconAndButtonExample = () => <div>

  <Icon name='triangle' fill='red' />

  <Button
     modifiers="call-to-action full-width"
     icon={<Icon name='chevron'/>}
     onClick={event=>{}}
  >
   Click me
  </Button>

</div>;
```

## cdn

https://unpkg.com/@kunukn/component-library-example/

use

- https://unpkg.com/@kunukn/component-library-example/dist/ComponentLibraryExample.js
- https://unpkg.com/@kunukn/component-library-example/dist/ComponentLibraryExample.css
- https://unpkg.com/@kunukn/component-library-example/dist/icons.min.svg
- https://unpkg.com/@kunukn/component-library-example/dist/fonts/font.css (fonts only)

## supported browsers

modern browsers + IE 11

## run tests

- yarn test

## design principles

- simplicity - BEM and composable components
- overview - component library using storybook with code snippets and responsive web design test using view ports
- portability - css bundle with icons and font. It's just markup and css classnames
- availability - CDN: umd bundle, css bundle, svg icons
- testable - unit tests for all components
- playability - online demo website
- off the shelf and conventions - using BEM, component architecture and standard tools (Webpack, React, Storybook)

## documentation

[documentation](/docs/index.md)
