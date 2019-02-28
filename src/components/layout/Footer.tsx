import React, { Component } from 'react'
import ComponentStyles from './Footer.module.scss'
import classnames from 'classnames'
import BEM from '../../lib/bem'
import Copyrights from './components/Copyrights'

export default class Footer extends Component {
  render() {
    return (
      <footer className={classnames(ComponentStyles.footer, (new BEM).block("Page").element("footer").get())}>
        <div className={classnames(ComponentStyles.footerrow, "row")}>
            <div className={classnames(ComponentStyles.footercol, ComponentStyles["footer-contact"], "col col-5")}>
                <h5>Patryk Adamczyk</h5>
                <p>
                    Jestem programistą i webdeveloperem. Mam dużo ambitnych pomysłów które może kiedyś zmienią podejście do programowania i wygody programowania. Nie przedłużając zapraszam na moją ciągle rozwijającą się stronę internetową gdzie mam zamiar się dzielić moimi pasjami do programowania, nowych technologii oraz fotografii.
                </p>
            </div>
            <div className={classnames(ComponentStyles.footercol, ComponentStyles["footer-contact"], "col col-5")}>
                <h5>
                    Kontakt
                </h5>
                <ul>
                    <li>
                        <a href="mailto:patrykadamczyk@patrykadamczyk.net">
                            <i className="fas fa-envelope"></i> patrykadamczyk@patrykadamczyk.net
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/PatrykJAdamczyk">
                            <i className="fab fa-twitter"></i> @PatrykJAdamczyk
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/patrykastrokiler/">
                            <i className="fab fa-instagram"></i> @patrykastrokiler
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/patrykjadamczyk">
                            <i className="fab fa-github"></i> @patrykjadamczyk
                        </a>
                    </li>
                    <li>
                        <a href="https://gitlab.com/patrykadamczyk">
                            <i className="fab fa-gitlab"></i> @patrykadamczyk
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Copyrights/>
      </footer>
    )
  }
}
