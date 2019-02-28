/* global chrome */
import React from 'react';
import { hot } from 'react-hot-loader';

class OptionsApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Language & popup options toggles here</p>
      </React.Fragment>
    );
  }
}

export default hot(module)(OptionsApp);
