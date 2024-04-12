import React, { Component } from 'react'
import load from './load.jpg'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={load} alt="loading" style={{width:"35px"}}></img> 
      </div>
    )
  }
}
