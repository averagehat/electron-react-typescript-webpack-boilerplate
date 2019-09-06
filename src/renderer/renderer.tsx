/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';

const { dialog } = window.require("electron").remote;
var f = dialog.showOpenDialog({ properties: ['openFile' ]}) //, 'openDirectory', 'multiSelections'] });

ReactDOM.render(
  <div className='app'>
    <h4>Welcome to React, Electron and Typescript</h4>
    <p>Hello {f}</p>
  </div>,
  document.getElementById('app')
);
