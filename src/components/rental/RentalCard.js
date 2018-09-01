import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class RentalCard extends Component {
  render() {
    return (
        <div>

            <div class='col-md-6 col-xs-6'>
                <Link to='/id'>
                    <div class='card bwm-card'>
                        <img class='card-img-top' src={this.props.rental.image} alt=''></img>
                        <div class='card-block'>
                            <h6 class='card-subtitle'>{this.props.rental.shared ? 'shared' : 'whole'} {this.props.rental.category} &#183; {this.props.rental.city}</h6>
                            <h4 class='card-title'>{this.props.title}</h4>
                            <p class='card-text'>£{this.props.rental.dailyRate} per Night &#183; Free Cancelation {this.props.rental.shared ? <p>shared</p> : <p>notshared</p>}</p>
                            <a href='' class='card-link'>More Info</a>
                        </div>
                    </div>
                </Link>
            </div>


        </div>
    )
  }
}
