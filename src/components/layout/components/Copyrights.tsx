import React, { Component } from 'react'
import ComponentStyles from './Copyrights.module.scss'
import classnames from 'classnames'
import BEM from '../../../lib/bem'

export default class Copyrights extends Component {
  render() {
    return (
        <div className={classnames(ComponentStyles.copyrights, (new BEM).block("Page").element("footer").element("copyright").get())}>
          Patryk Adamczyk &copy; {(new Date()).getFullYear()}
        </div>
    )
  }
}
