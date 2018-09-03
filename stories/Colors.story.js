import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

let Box = ({ color = 'black', background = 'white', children = null } = {}) => (
  <div
    className=""
    style={{
      width: '200px',
      height: '200px',
      color,
      background,
      border: `1px solid ${color}`,
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
);

export default function ColorsStory() {
  const props = {
    name: 'color'
  };

  storiesOf('Colors', module)
    .addDecorator(backgrounds)

    .add(
      'default',
      withMarkdownNotes(`
# Colors

usage description here

## Something

      `)(() => (
        <div
          className=""
          style={{
            padding: '1rem',
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: 'repeat(auto-fill, 200px)'
          }}
        >
          <Box color="white" background="#002b45">
            <p>Primary</p>
            <p>#002b45</p>
          </Box>
          <Box color="white" background="#1b5786">
            <p>Secondary</p>
            <p>#1b5786</p>
          </Box>
        </div>
      ))
    );
}
