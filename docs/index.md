---
title: Guide
sidebar: auto
---

## Installation

### Using a CDN

Include the following to your document

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@kunukn/component-library-example/dist/ComponentLibraryExample.css">
</head>
<body>
  <script src="https://unpkg.com/@kunukn/component-library-example/dist/ComponentLibraryExample.js"></script>
</body>
```

Either copy the content on `https://unpkg.com/@kunukn/component-library-example/dist/icons.min.svg` into the top of your body element in your html file or apply this script at the bottom of your `<body>` element.

```html
<script>
  window.Dfds.loadIcons( 
    {
      path: 'https://unpkg.com/@kunukn/component-library-example/dist/icons.min.svg', 
      callback: undefined /* optional: add a callback */
    })
</script>
```

The React components are available from the window object.

```js
const { Icon, Button } = window.ComponentLibraryExample;
```

### Using NPM

Install @kunukn/component-library-example from NPM:

```bash
npm i @kunukn/component-library-example -S
```

Them import components from the package and use them

```js
import { Icon, Button } from '@kunukn/component-library-example';

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
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@kunukn/component-library-example/dist/ComponentLibraryExample.css">
  <!-- or use the file from node_modules/@kunukn/component-library-example folder -->
</head>
```

```js
import { loadIcons } from '@kunukn/component-library-example';

loadIcons(
  {
    path: yourPath + 'node_modules/@kunukn/component-library-example/dist/icons.min.svg',
    callback: undefined /* optional: add a callback */
  }
);
/* or use the path from CDN */
```
