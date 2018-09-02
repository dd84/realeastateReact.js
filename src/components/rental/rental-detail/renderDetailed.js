import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

 class RenderDetailed extends Component {
   componentWillMount() {
     const rentalId = this.props.match.params.id;
     this.props.dispatch(actions.fetchRentalById(rentalId));
   }
  render() {
    if(this.props.rental.id) {
    return (
      <div>
      <h1> I am a rental component {this.props.rental.title}</h1>
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}
}
function mapStateToProps(state){
  return{

  rentals: state.rentals.data
}
}

export default connect(mapStateToProps)(RenderDetailed)