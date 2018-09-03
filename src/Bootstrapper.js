import 'components/base/_main.scss';
import 'components/base/_typography.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'components/atoms';
import {InfoBox} from 'components/molecules';
import 'whatwg-fetch';
import Promise from 'promise';
import 'src/icon-system/icons.svg'; // make it available as resource at url: /icons.svg
//import 'src/icon-system/load-icons'; // IE support. Inline add SVG in the DOM from url. Is already added in html using script there
import testES8 from './test-es8';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

testES8();

let onClick = event => {
  log('clicked button ' + event.currentTarget);
}

ReactDOM.render(
  <InfoBox title="yarn storybook">
  <div>
    <Icon name='triangle'/>
  </div>
  <Button modifiers="call-to-action" icon='facebook' onClick={onClick}>
    Click me
  </Button>
  <Button modifiers="call-to-action full-width" icon='chevron' onClick={onClick}>
    Click me
  </Button>
  <Button modifiers='full-width' onClick={onClick}>
    Click me
  </Button>
  <Button disabled modifiers='full-width' onClick={onClick}>
    disabled
  </Button>
</InfoBox>, document.getElementById('root'));
