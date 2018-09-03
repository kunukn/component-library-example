import React from 'react';
import Icon from './Icon';

import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

export default function IconStory() {
  const props = {
    name: 'icon'
  };

  const manyIconsProps = {
    width: '3rem',
    height: '3rem'
  };

  storiesOf('Icons', module)
    .addDecorator(backgrounds)

    .add(
      'default',
      withMarkdownNotes(`
# Icon arrow

usage description here

## React

~~~jsx
<Icon name='chevron' />
~~~

or

~~~jsx
<Icon>chevron</Icon>
~~~
      `)(() => <Icon {...props} name="chevron" />)
    )

    .add(
      'icon path',
      withMarkdownNotes(`
# Icon arrow

usage description here

## React

~~~jsx
<Icon path='/icons.svg#chevron' />
~~~
      `)(() => <Icon {...props} path="/icons.svg#chevron" />)
    )

    .add(
      'facebook',
      withMarkdownNotes(`
# Icon facebook

usage description here

## React

~~~jsx
<Icon fill='blue' width={50} height={50} name='facebook' />
~~~
      `)(() => (
        <Icon {...props} fill="blue" width={50} height={50} name="facebook" />
      ))
    )

    .add(
      'linkedin',
      withMarkdownNotes(`
~~~jsx
<Icon width={100} height={100} name='linkedin' />
~~~
      `)(() => <Icon {...props} width={100} height={100} name="linkedin" />)
    )

    .add(
      'many icons',
      withMarkdownNotes(`

#icons

      `)(() => (
        <div
          style={{
            padding: '1rem',
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(3rem, 1fr))'
          }}
        >
          <Icon {...manyIconsProps} name="chevron" />
          <Icon {...manyIconsProps} name="facebook" />
          <Icon {...manyIconsProps} name="linkedin" />
          <Icon {...manyIconsProps} name="twitter" />
          <Icon {...manyIconsProps} name="email" />
        </div>
      ))
    );
}
