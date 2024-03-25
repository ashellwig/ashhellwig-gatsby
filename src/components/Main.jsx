// Copyright (C) 2024 Ash Hellwig
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import PropTypes from 'prop-types'
import React from 'react'
import { withBreakpoints } from 'react-breakpoints'

// Main Images
import holdingIchigo from '../images/holdingichigo.jpg'

// Images for Media Article
import ImgJustMe from './img/ImgJustMe.jsx'

import ResumeDevIT from './ResumeDevIT.jsx'
import devITResumeFile from '../assets/pdf/Ashton_S_Hellwig_Resume_Cloud.pdf'
import ClientList from './ClientList.jsx'
import ClientListMobile from './ClientListMobile.jsx'
import ContactForm from './ContactForm.jsx'
import ArticleFooter from './ArticleFooter.jsx'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNotMobile: false
    }

    this.updatePredicate = this.updatePredicate.bind(this)
  }

  componentDidMount() {
    this.updatePredicate()

    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }

  updatePredicate() {
    // this.setState({ isNotMobile: window.innerWidth <= 1449 })
    this.setState({ isNotMobile: window.innerWidth >= 800 })
  }

  render() {
    // const { breakpoints, currentBreakpoint } = this.props
    const isNotMobile = this.state.isNotMobile

    let close = (
      /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
        onKeyPress={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={holdingIchigo} alt="" />
          </span>
          <p>
            Colorado-based BigData Data Engineer and experienced Python
            developer. Most of the industries I focus on are financial
            technology, oil &amp; gas, and medical technology.
          </p>
          <p>
            Experienced TeraData, Hive, and Python developer. In this industry,
            my main focus is on the&nbsp; &quot;
            <i>backend and systems-side</i>&quot;&nbsp; of development. Please
            see myresume under&nbsp;
            <i>experience</i> for more information.
          </p>
          <p>
            Outside of working in technology, I train dogs for protection and
            off-leash obedience at Mountain Canine College in Evergreen, CO.
          </p>
          <ArticleFooter />
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">experience</h2>

          <div>
            <h3>Consulting and Development Clients</h3>
            <div>
              {isNotMobile ? (
                <div>
                  <ClientList />
                </div>
              ) : (
                <div>
                  <ClientListMobile />
                </div>
              )}
            </div>
          </div>
          <h3>Resume</h3>
          <div>
            <ResumeDevIT />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <div>
              <a
                style={{ textDecoration: 'none' }}
                href={devITResumeFile}
                download="Ashton-S-Hellwig-Resume.pdf"
              >
                <button>Download Resume</button>
              </a>
            </div>
          </div>
          <ArticleFooter />
          {close}
        </article>

        <article
          id="media"
          className={`${this.props.article === 'media' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">media</h2>
          <ImgJustMe />
          <ArticleFooter />
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ContactForm />
          <ArticleFooter />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
}

export default withBreakpoints(Main)
