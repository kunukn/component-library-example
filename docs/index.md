---
title: Guide
sidebar: auto
---

## Installation

### Using a CDN

Include the following to your document

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@kunukn/dfds/dist/dfds.css">
</head>
<body>
  <script src="https://unpkg.com/@kunukn/dfds/dist/dfds.js"></script>
</body>
```

Either copy the content on `https://unpkg.com/@kunukn/dfds/dist/icons.min.svg` into the top of your body element in your html file or apply this script at the bottom of your `<body>` element.

```html
<script>
  window.Dfds.loadIcons( 
    {
      path: 'https://unpkg.com/@kunukn/dfds/dist/icons.min.svg', 
      callback: undefined /* optional: add a callback */
    })
</script>
```

The React components are available from the window object.

```js
const { Icon, Button } = window.Dfds;
```

### Using NPM

Install @kunukn/dfds from NPM:

```bash
npm i @kunukn/dfds -S
```

Them import components from the package and use them

```js
import { Icon, Button } from '@kunukn/dfds';

<Button
  modifiers="call-to-action"
  icon="chevron"
  onClick={event => log(event.target)}
>
  click
</Button>;
```

Add the css and svg icons to the page.

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@kunukn/dfds/dist/dfds.css">
  <!-- or use the file from node_modules/@kunukn/dfds folder -->
</head>
```

```js
import { loadIcons } from '@kunukn/dfds';

loadIcons(
  {
    path: yourPath + 'node_modules/@kunukn/dfds/dist/icons.min.svg',
    callback: undefined /* optional: add a callback */
  }
);
/* or use the path from CDN */
```

## Demos

- [codesandbox](https://codesandbox.io/s/z608vy6o4x)
- [codepen](https://codepen.io/kunukn/pen/46145b9ae7d2c2aaa34c72fe12e2305f)
