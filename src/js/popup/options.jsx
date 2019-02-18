import React from "react";
import { hot } from "react-hot-loader";

class Options extends React.Component {
  openTab() {
    alert('Pressed!');
    const tabOptions = {
      url: "https://repl.it/languages/nodejs"
    };

    chrome.tabs.create(tabOptions);
  }

  render () {
    return (
      <React.Fragment>
        <a href="https://repl.it/languages/nodejs">Node.js repl</a>
        <button 
            oncClick={this.openTab}
            id="node-button"
            className="repl-button"
          >Node.js Repl.it</button>
      </React.Fragment>
    );
  }
}

export default hot(module)(Options)
