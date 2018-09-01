import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './shared/Header'
import RentalList from './components/rental/rentalList'
import RenderDetailed from './components/rental/renderDetailed'
class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div classNameName="App">
        <Header />
        <h1 class='page-title'>Your Home All Around the World</h1>
        <div className='container'>
     
          
        <Route exact path="" component={RentalList}/>
        <Route exact path="/:id" component={RenderDetailed}/>
          

        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
