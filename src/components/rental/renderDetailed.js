import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

 class RenderDetailed extends Component {
   componentWillMount() {
     const rentalId = this.props.match.params.id;
     this.props.dispatch(actions.fetchRentalById(rentalId));
   }
  render() {
    const rental = this.props.rental;
    return (
      <div>
       I am a drental component {rental.title}
      </div>
    )
  }
}
function mapStateToProps(state){
  return{

  rentals: state.rentals.data
}
}

export default connect(mapStateToProps)(RenderDetailed)