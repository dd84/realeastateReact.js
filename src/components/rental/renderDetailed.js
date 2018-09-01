import React, { Component } from 'react'

 class RenderDetailed extends Component {
  render() {
      console.log(this.props.match.params.id);
    return (
      <div>
       I am a drental component {this.props.match.params.id}
      </div>
    )
  }
}


export default RenderDetailed