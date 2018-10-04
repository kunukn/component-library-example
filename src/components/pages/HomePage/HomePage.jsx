import './home-page';
import React, { Component } from 'react';
import { Icon, DataLoader, InfoBox, Button } from 'components';

export default class HomePage extends Component {
  onClick = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="home-page">
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
        <InfoBox />
        <DataLoader
          disabled
          url="https://jsonplaceholder.typicode.com/todos/1"
          render={({ error, data, isLoading, url }) => (
            <div className="temp">
              <h3>DataLoader</h3>
              <pre>{JSON.stringify({ error, data, isLoading, url }, null, 2)}</pre>
            </div>
          )}
        />
        <Icon name="self_drive" width="100%" height="20rem" fill="tan" />
      </div>
    );
  }
}
