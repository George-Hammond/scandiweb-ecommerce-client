import React from 'react';
import '../../Styles/App.css';
import NavBar from '../NavigationBar/NavBar';
import { BrowserRouter /*, Route, Routes */  } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>        
        <NavBar />
      </BrowserRouter>
    )
  }
}

export default App;