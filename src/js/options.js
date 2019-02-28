import React from 'react';
import OptionsApp from './options/OptionsApp.jsx';
import { render } from 'react-dom';

import '../css/options.css';

// TODO: control popup dependent on options.js
// TODO: Pop-up, upon 1st ever activation, asks for a default language -> choosing default language deactivates popup

render(<OptionsApp />, window.document.getElementById('options-app'));
