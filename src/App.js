import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import './App.css';
import Header from './shared/Header'
import RentalListing from './components/rental/rental-listing/RentalListing'
import RenderDetailed from './components/rental/rental-detail/renderDetailed'

const store = require('./reducers').init();

class App extends Component {
 


  render() {

 
    return (
      <Provider  store={store}>
      <BrowserRouter>
      <div className="App">
        <Header />
        <h1 class='page-title'>Your Home All Around the World</h1>
        <div className='container'>
     
        <Route exact path='/' render={() => {return <Redirect to='/rentals'/>}}/>
        <Route exact path='/rentals' component={RentalListing}/>
        <Route exact path='/rentals:id' component={RenderDetailed}/>
          

        </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
