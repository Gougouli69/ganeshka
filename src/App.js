import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Navbar } from './components/organisms/Navbar/Navbar';
import { StyledText } from './components/atoms/Text/styles';
import { DishesList } from './components/organisms/DishesList/DishesList';
import { BottomNavigationCustomized } from './components/organisms/BottomNavigation/BottomNavigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoPage } from './components/pages/NoPage/NoPage';
import { Home } from './components/pages/Home/Home';


function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>



      </div>
    </ThemeProvider>
  );
}

export default App;