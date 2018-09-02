import React, { Component } from 'react'
import {RentalList} from './rentalList'
import { connect } from 'react-redux';
import * as actions from '../../../actions'
 class RentalListings extends Component {
 
 
 
    addRental() {
        const rentals = this.state.rentals;
        rentals.push(1);
        this.setState({
            rentals
        })
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }
  render() {
    return (
          
              <section id='rentalListing'>
              <h1 className='page-title'> Your home all around the world</h1>
              <RentalList rentals={this.props.rentals}/>
                  
              </section>
         
      )
  }
}

function mapStateToProps(state){
    return{

    rentals: state.rentals.data
}
}
export default connect(mapStateToProps)(RentalListings);