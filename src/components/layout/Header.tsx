import React, { Component } from 'react'
import ComponentStyles from './Header.module.scss'
import classnames from 'classnames'
import BEM from '../../lib/bem'
import LanguageSwitcher from './components/LanguageSwitcher'

export default class Header extends Component {
  render() {
    return (
      <header className={classnames(ComponentStyles.header, (new BEM).block("Page").element("header").get())}>
        <div className={classnames(ComponentStyles.title, (new BEM).block("Page").element("header").element("title").get())}>
            Patryk Adamczyk
            <span className={classnames(ComponentStyles.langs, (new BEM).block("Page").element("header").element("title").element("language-switcher").get())}>
                <LanguageSwitcher/>
            </span>
        </div>
      </header>
    )
  }
}
