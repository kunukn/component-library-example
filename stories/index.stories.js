/*
  https://youtu.be/AIAqaFFw7AY?t=12m6s
*/

import 'components/quarks/styles';
import 'src/icon-system/icons.svg';
import loadIcons from 'src/icon-system/loadIcons';

import FontsStory from './Fonts.story';
import ColorsStory from './Colors.story';
import { IconStory, ButtonStory } from 'components/stories';

// used for github pages
loadIcons({ path: 'https://unpkg.com/@kunukn/component-library-example/dist/icons.svg' });
//loadIcons(); // localhost

FontsStory();
ColorsStory();
IconStory();
ButtonStory();
