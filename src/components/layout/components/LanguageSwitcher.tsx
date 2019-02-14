import React, { Component } from 'react'
import config from '../../../config'
import classnames from 'classnames'
import BEM from '../../../lib/bem'
import ComponentStyles from './LanguageSwitcher.module.scss'
import './LanguageSwitcher.scss'
import PropTypes from 'prop-types'

export default class LanguageSwitcher extends Component<any,any> {
  constructor(props: any)
  {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e: any)
  {
    const language = e.target.innerText;
    return this.onChange(language);
  }
  onChange(lang: string)
  {
      console.log(config);
    config.language.baseLang = lang.toLowerCase();
    this.setState({});
  }
  render() {
    if(config.language.languages)
    {
        return (
            <span className={classnames(ComponentStyles.langs, (new BEM).block("component").element("languageswitcher").get())}>
                {config.language.langs.map(lang => (
                    <span>
                        <span 
                            className={config.language.baseLang === lang ?
                                [
                                    ComponentStyles.lang,
                                    ComponentStyles.lang_active,
                                    "active",
                                    (new BEM).block("component").element("languageswitcher").element("lang").get(),
                                    (new BEM).block("component").element("languageswitcher").element("lang").modifier("active").get()
                                ].join(" ") : classnames(
                                    ComponentStyles.lang,
                                    (new BEM).block("component").element("languageswitcher").element("lang").get(),
                                )} onClick={this.onClick} key={lang}>
                            {lang.toUpperCase()}
                        </span>
                        <span className={classnames(
                                    ComponentStyles.lang_caret,
                                    (new BEM).block("component").element("languageswitcher").element("lang").element("caret").get(),
                                )}>/</span>
                    </span>
                ))}
            </span>
        )
    }
    else
    {
        return (
            <span></span>
        )
    }
  }
}
