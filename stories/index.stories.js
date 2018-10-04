/*
  https://youtu.be/AIAqaFFw7AY?t=12m6s
*/

import 'components/styles';
import 'src/icon-system/icons.svg';
import loadIcons from 'src/icon-system/loadIcons';

import FontsStory from './Fonts.story';
import ColorsStory from './Colors.story';
import IconStory from 'components/atoms/Icon/Icon.story';
import ButtonStory from 'components/molecules/Button/Button.story';

// used for github pages
// loadIcons({ path: 'https://unpkg.com/@kunukn/component-library-example/dist/icons.svg' });
loadIcons(); // localhost

FontsStory();
ColorsStory();
IconStory();
ButtonStory();
