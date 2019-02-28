import React, { Component } from 'react'
import ComponentStyles from './Content.module.scss'
import classnames from 'classnames'
import BEM from '../../lib/bem'

export default class Content extends Component<any,any> {
  render() {
    return (
      <main className={classnames(ComponentStyles.main, (new BEM).block("Page").element("main").get())}>
        {this.props.children}
      </main>
    )
  }
}
