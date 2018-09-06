import 'components/base/_main.scss';
import 'components/base/_typography.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from 'components/pages';
import 'whatwg-fetch';
import Promise from 'promise';
import 'src/icon-system/icons.svg'; // make it available as resource at url: /icons.svg
//import 'src/icon-system/load-icons'; // IE support. Inline add SVG in the DOM from url. Is already added in html using script there
import testES8 from './test-es8';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

testES8();

ReactDOM.render(<HomePage />, document.getElementById('root'));
