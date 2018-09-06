import React from 'react';
import { Button, Icon, DataLoader } from 'components/atoms';
import { InfoBox } from 'components/molecules';

export default class HomePage extends React.Component {
  onClick = event => {
    console.log(event);
  };

  render() {
    return (
      <React.Fragment>
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
        <DataLoader
          url="https://jsonplaceholder.typicode.com/todos/1"
          render={data => <pre>{JSON.stringify(data, null, 2)}</pre>}
        />
      </React.Fragment>
    );
  }
}
