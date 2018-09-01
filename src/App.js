import React, { Component } from 'react';

import './App.css';
import Header from './shared/Header'
import RentalList from './components/rental/rentalList'
class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <Header />
        <h1 class='page-title'>Your Home All Around the World</h1>
        <div className='container'>
          <RentalList />

        </div>
      </div>
    );
  }
}

export default App;
