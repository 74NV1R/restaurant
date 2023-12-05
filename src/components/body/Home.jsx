import React, { Component } from 'react'

export class Home extends Component {
  static propTypes = {}

  render() {
    document.title = 'Home'
    return (
      <div>Home</div>
    )
  }
}

export default Home