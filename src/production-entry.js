import 'components/styles';

import loadIcons from 'src/icon-system/loadIcons';

import DataLoader from 'components/atoms/DataLoader/DataLoader';
import Icon from 'components/atoms/Icon/Icon';
import Button from 'components/molecules/Button/Button';

console.log(!!loadIcons, !!Button, !!Icon, !!DataLoader);

export { loadIcons, DataLoader, Button, Icon };
