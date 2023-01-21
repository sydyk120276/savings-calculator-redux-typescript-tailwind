import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {store} from './redux'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
