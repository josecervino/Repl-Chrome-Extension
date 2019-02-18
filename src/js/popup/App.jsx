/* global chrome */
import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  openTab() {
    const createTabOptions = {
      url: 'https://repl.it/languages/nodejs'
    };

    chrome.tabs.create(createTabOptions);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openTab} id="node-button" className="repl-button">
          Node.js Repl.it
        </button>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
