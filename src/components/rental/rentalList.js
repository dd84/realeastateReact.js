import React, { Component } from 'react'
import RentalCard from './RentalCard'
import { connect } from 'react-redux';
 class RentalList extends Component {
 
 
    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return (
                <RentalCard
                           key={index} 
                           rental={rental}
                           />
            )
        });
    }
    addRental() {
        const rentals = this.state.rentals;
        rentals.push(1);
        this.setState({
            rentals
        })
    }
  render() {
    return (
          <div>
              <section id='rentalListing'>
                  <div className='row'>
                     {this.renderRentals()}
                  </div>
              </section>
          </div>
      )
  }
}

function mapStateToProps(state){
    return{

    rentals: state.rentals
}
}
export default connect(mapStateToProps)(RentalList);