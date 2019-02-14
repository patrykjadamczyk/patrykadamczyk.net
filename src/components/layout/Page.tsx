import React, { Component } from 'react'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import Content from './Content'
import ComponentStyles from './Page.module.scss'
import classnames from 'classnames'
import BEM from '../../lib/bem'

export default class Page extends Component<any,any> {
  render() {
    return (
      <div className={classnames(ComponentStyles.page, (new BEM).module("Page").get(), (new BEM).block("Page").get())}>
        <div className={classnames(ComponentStyles.container, (new BEM).block("Page").element("container").get())}>
            <div className={classnames(ComponentStyles.aside, (new BEM).block("Page").element("aside").get())}>
                <Aside/>
            </div>
            <div className={classnames(ComponentStyles.content, (new BEM).block("Page").element("content").get())}>
                <Header/>
                <Content>
                    {this.props.children}
                </Content>
                <Footer/>
            </div>
        </div>
      </div>
    )
  }
}
