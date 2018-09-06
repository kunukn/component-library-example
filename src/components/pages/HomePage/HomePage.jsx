import React from 'react';
import { Button, Icon } from 'components/atoms';
import { InfoBox } from 'components/molecules';

export default class HomePage extends React.Component {
  onClick = event => {
    console.log(event);
  };

  render() {
    return (
      <InfoBox title="yarn storybook">
        <div>
          <Icon name="triangle" />
        </div>
        <Button modifiers="call-to-action" icon="facebook" onClick={this.onClick}>
          Click me
        </Button>
        <Button modifiers="call-to-action full-width" icon="chevron" onClick={this.onClick}>
          Click me
        </Button>
        <Button modifiers="full-width" onClick={this.onClick}>
          Click me
        </Button>
        <Button disabled modifiers="full-width" onClick={this.onClick}>
          disabled
        </Button>
      </InfoBox>
    );
  }
}
