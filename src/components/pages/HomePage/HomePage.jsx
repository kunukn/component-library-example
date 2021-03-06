import './home-page.scss';
import React, { Component } from 'react';
import { Icon, DataLoader, InfoBox, Button } from 'components';

export default class HomePage extends Component {
  state = {
    loadData: false,
  };

  onClick = event => {
    console.log(event);
    this.setState({ loadData: true });
  };

  render() {
    return (
      <div className="home-page">
        <InfoBox title="yarn storybook">
          <div>
            <Icon name="triangle" />
          </div>
          <Button modifiers="light-border" icon={<Icon fill="#3B5998" name="facebook" />} onClick={this.onClick}>
            Click me
          </Button>
          <Button modifiers="call-to-action full-width" icon={<Icon name="chevron" />} onClick={this.onClick}>
            Click me
          </Button>
          <Button modifiers="dark-border full-width" onClick={this.onClick}>
            Click me
          </Button>
          <Button disabled modifiers="full-width" onClick={this.onClick}>
            disabled
          </Button>
        </InfoBox>
        <InfoBox />
        <DataLoader
          loadOnMount={false}
          url="/api/posts/1"
          render={({ error, data, isLoading, url, reload, ...rest }) => (
            <div className="temp">
              <h3>DataLoader</h3>
              <Button modifiers="light-border" onClick={reload}>
                reload
              </Button>
              <pre>{JSON.stringify({ error, data, isLoading, url, ...rest }, null, 2)}</pre>
            </div>
          )}
        />
        <Icon name="self_drive" width="100%" height="20rem" fill="tan" />
      </div>
    );
  }
}
