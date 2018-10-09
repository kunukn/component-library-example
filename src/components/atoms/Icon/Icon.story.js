import React from 'react';
import Icon from './Icon';

import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

class AllIcons extends React.Component {
  render() {
    return (
      <div
        className="root-icons"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      />
    );
  }
  componentDidMount() {
    setTimeout(() => {
      // wait until available in the DOM
      let svgIcons = document.querySelector('.svg-in-the-dom > svg');
      apply(svgIcons);
    }, 100);

    function apply(svgIcons) {
      let rootIcons = document.querySelector('.root-icons');
      if (!rootIcons) return;

      let ids = [].slice.call(svgIcons.querySelectorAll('[id]'));
      let fragment = document.createDocumentFragment();
      let div;
      for (let element of ids) {
        div = document.createElement('div');
        div.className = 'icon-container';
        div.style.margin = '.5rem';
        let id = element.getAttribute('id');
        let title = element.querySelector('title') || '';
        if (title) {
          title = title.textContent;
        }
        let viewBox = element.getAttribute('viewBox');
        let viewBoxDim = viewBox.split(/\s+|,/);
        let x = viewBoxDim[2] * 2;
        let y = viewBoxDim[3] * 2;
        div.innerHTML = `
<svg role="img" class="icon" width="${x}" height="${y}" style="fill: purple;color: deeppink;">
  <title>${title}</title>
  <use xlink:href="#${id}"></use>
</svg>
        `;
        fragment.appendChild(div);
      }

      rootIcons.appendChild(fragment);
    }
  }
}

export default function IconStory() {
  const props = {
    name: 'icon',
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
      'all',
      withMarkdownNotes(`
      `)(() => <AllIcons />)
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
<Icon fill='#3B5998' width={50} height={50} name='facebook' />
~~~
      `)(() => <Icon {...props} fill="#3B5998" width={50} height={50} name="facebook" />)
    )
    .add(
      'linkedin',
      withMarkdownNotes(`
~~~jsx
<Icon width={100} height={100} name='linkedin' fill="#0077B5" />
~~~
      `)(() => <Icon {...props} width={100} height={100} name="linkedin" fill="#0077B5" />)
    );
}
