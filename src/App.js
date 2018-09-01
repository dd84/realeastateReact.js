import React, { Component } from 'react';

import './App.css';
import Header from './shared/Header'
import RentalCard from './components/rental/RentalCard'
class App extends Component {
  render() {
    return (
      <div classNameName="App">
          <Header/>
          <h1 class='page-title'>Your Home All Around the World</h1>
          <RentalCard/>
          <RentalCard/>
          <RentalCard/>


      </div>
    );
  }
}

export default App;
