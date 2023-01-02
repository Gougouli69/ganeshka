import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Navbar } from './components/organisms/Navbar';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </ThemeProvider>
  );
}

export default App;