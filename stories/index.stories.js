/*
  https://youtu.be/AIAqaFFw7AY?t=12m6s
*/

import React from 'react';
import 'components/base/_main.scss';
import 'components/base/_typography.scss';
import 'src/icon-system/icons.svg';
import loadIcons from 'src/icon-system/loadIcons';

import FontsStory from './Fonts.story';
import ColorsStory from './Colors.story';
import IconStory from 'components/atoms/Icon/Icon.story';
import ButtonStory from 'components/atoms/Button/Button.story';

loadIcons({path: 'https://unpkg.com/@kunukn/component-library-example/dist/icons.min.svg'});
//loadIcons({delay: 500});

FontsStory();
ColorsStory();
IconStory();
ButtonStory();
