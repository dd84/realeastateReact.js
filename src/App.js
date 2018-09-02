import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import './App.css';
import Header from './shared/Header'
import RentalList from './components/rental/rental-listing/rentalList'
import RenderDetailed from './components/rental/rental-detail/renderDetailed'

const store = require('./reducers').init();

class App extends Component {
 


  render() {

 
    return (
      <Provider  store={store}>
      <BrowserRouter>
      <div classNameName="App">
        <Header />
        <h1 class='page-title'>Your Home All Around the World</h1>
        <div className='container'>
     
        <Route exact path='/' render={() => {return <Redirect to='/rentals'/>}}/>
        <Route exact path='/rentals' component={RentalList}/>
        <Route exact path='/rentals:id' component={RenderDetailed}/>
          

        </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
