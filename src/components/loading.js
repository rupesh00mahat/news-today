import React, { Component } from 'react'
import loading from '../assets/loading-gif.gif'

export default class Loading extends Component {
  render() {
    return (
     <img style={{width: '300px', height: '300px'}} src={loading}/>
    )
  }
}
