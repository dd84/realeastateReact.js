import React, { Component } from 'react'
import RentalCard from './RentalCard'
 class RentalList extends Component {
    constructor() {
        super();
        this.state= {
            rentals:[1,2,3,4,5]
        }
    }
    renderRentals() {
        return this.state.rentals.map((rental) => {
            return (
                <RentalCard/>
            )
        });
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
export default RentalList