import React from 'react';
import Button from './Button';
import { Icon } from 'components';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

export default function ButtonStory() {
  const props = {
    name: 'button',
  };

  storiesOf('Buttons', module)
    .addDecorator(backgrounds)

    .add(
      'default',
      withMarkdownNotes(`
# Button default

usage description here

## React

~~~jsx
<Button onClick={this.onClick}>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )
    .add(
      'default with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  icon={<Icon name="chevron" />}
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} icon={<Icon name="chevron" />} onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )
    .add(
      'default with icon and light border',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  modifiers="light-border"  
  icon={<Icon name="chevron" />}
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} modifiers="light-border" icon={<Icon name="chevron" />} onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )

    .add(
      'call to action',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  modifiers='call-to-action'
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} modifiers="call-to-action" onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )
    .add(
      'call to action with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  modifiers='call-to-action'
  icon={<Icon name="chevron" />}
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} icon={<Icon name="chevron" />} modifiers="call-to-action" onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )
    .add(
      'disabled with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  disabled
  icon={<Icon name="chevron" />}
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} icon={<Icon name="chevron" />} disabled onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )

    .add(
      'disabled call to action with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  disabled
  modifiers='call-to-action'
  icon={<Icon name="chevron" />}
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button
          {...props}
          icon={<Icon name="chevron" />}
          disabled
          modifiers="call-to-action"
          onClick={action('clicked')}
        >
          Click me
        </Button>
      ))
    )

    .add(
      'full-width call to action with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  modifiers='full-width call-to-action'
  icon={<Icon name="chevron" />}
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button
          {...props}
          icon={<Icon name="chevron" />}
          modifiers="call-to-action full-width"
          onClick={action('clicked')}
        >
          Click me
        </Button>
      ))
    );
}
