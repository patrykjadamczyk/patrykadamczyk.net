import React, { Component } from 'react'

export default class Content extends Component<any,any> {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}
