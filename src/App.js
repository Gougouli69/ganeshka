import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Navbar } from './components/organisms/Navbar';
import { StyledText } from './components/atoms/Text/styles';
import { MealCard } from './components/molecules/MealCard/MealCard';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        <Navbar></Navbar>
        <StyledText> Yplé </StyledText>
        <MealCard nameDish='Disheee'></MealCard>
      </div>
    </ThemeProvider>
  );
}

export default App;