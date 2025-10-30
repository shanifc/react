import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount(){ //life cycle methode, which is automatically called whwn the component mount
        console.log("Component mounted!");
        }
  render() {
    
    return <p>component has been mounted!</p>
  }
}
