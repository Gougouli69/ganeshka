import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Navbar } from './components/organisms/Navbar/Navbar';
import { StyledText } from './components/atoms/Text/styles';
import { DishesList } from './components/organisms/DishesList/DishesList';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        <Navbar></Navbar>
        <StyledText> Yplé </StyledText>
        <DishesList></DishesList>
      </div>
    </ThemeProvider>
  );
}

export default App;