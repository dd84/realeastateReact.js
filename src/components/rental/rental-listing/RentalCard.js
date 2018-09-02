import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class RentalCard extends Component {
  render() {
    return (
        <div className='col-md-3 col-xs-3'>
        <Link to={`/rentals/${this.props.rental.id}`}>
          <div className='card bwm-card'>
            <img className='card-img-top' src={this.props.rental.image} alt=''></img>
            <div className='card-block'>
              <h6 className={`card-subtitle ${this.props.rental.category}`}>{this.props.rental.shared ? 'shared' : 'whole'} {this.props.rental.category} &#183; {this.props.rental.city}</h6>
              <h4 className='card-title'>{this.props.rental.title}</h4>
              <p className='card-text'>£{this.props.rental.dailyRate} per Night &#183; Free Cancelation {this.props.rental.shared ? 'shared' : 'notshared'}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
export default RentalCard