import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoPage } from './components/pages/NoPage/NoPage';
import { HomePage } from './components/pages/HomePage/Homepage';
import DishListPage from './components/pages/DishListPage/DishListPage';
import {DishAddPage} from './components/pages/DishAddPage/DishAddPage';
import {DishEditPage} from './components/pages/DishEditPage/DishEditPage';
import { LoadingPage } from './components/pages/LoadingPage/LoadingPage';
import { DishInfoPage } from './components/pages/DishInfoPage/DishInfoPage';

function App() {
  
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<HomePage />} />
            <Route path="/dishes" element={<DishListPage />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/add-dishes" element={<DishAddPage />} />
            <Route path="/edit-dishes/:id" element={<DishEditPage />} />
            <Route path="/info-dishes/:id" element={<DishInfoPage />} />
            <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>



      </div>
    </ThemeProvider>
  );
}

export default App;