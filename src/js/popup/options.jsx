/* global chrome */
import React from "react";
import { hot } from "react-hot-loader";

class Options extends React.Component {
  openTab() {
    const tabOptions = {
      url: "https://repl.it/languages/nodejs"
    };

    chrome.tabs.create(tabOptions);
  }

  render () {
    return (
      <React.Fragment>
        <button 
            onClick={this.openTab}
            id="node-button"
            className="repl-button"
          >Node.js Repl.it</button>
      </React.Fragment>
    );
  }
}

export default hot(module)(Options)
