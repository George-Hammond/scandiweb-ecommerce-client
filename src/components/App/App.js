import React from 'react';
import '../../Styles/App.css';
import NavBar from '../NavigationBar/NavBar';


class App extends React.Component{
  render(){
    return(
      <main>
        <h1>This is Apps</h1>
        <NavBar />
      </main>
    )
  }
}

export default App;