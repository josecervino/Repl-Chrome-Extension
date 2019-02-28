import React from 'react';
import App from './popup/App.jsx';
import { render } from 'react-dom';

import '../css/popup.css';

// TODO: control popup dependent on options.js
// TODO: Pop-up, upon 1st ever activation, asks for a default language -> choosing default language deactivates popup

render(<App />, window.document.getElementById('app'));
