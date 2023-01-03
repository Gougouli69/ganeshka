import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoPage } from './components/pages/NoPage/NoPage';
import { HomePage } from './components/pages/HomePage/Homepage';
import DishListPage from './components/pages/DishListPage/DishListPage';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<HomePage />} />
            <Route path="/dishes" element={<DishListPage />} />
            <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>



      </div>
    </ThemeProvider>
  );
}

export default App;