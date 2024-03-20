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

import imageTrinityBitework from '../images/trinitybitework.jpg'
import imageHalloween from '../images/Halloween.png'
import holdingIchigo from '../images/holdingichigo.jpg'
import marchOnCapitalHill from '../images/video/March-Capital-Hill.mp4'
import marchOnUnionStation from '../images/video/March-Union-Station.mp4'
import marchWaiting from '../images/video/march-waiting.mp4'

import ResumeDevIT from './ResumeDevIT.jsx'
import ClientList from './ClientList.jsx'
import ClientListMobile from './ClientListMobile.jsx'
import ContactForm from './ContactForm.jsx'
import SocialIcons from './SocialIcons.jsx'
import CopyrightText from './CopyrightText.jsx'

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
          {close}
          <hr />
          <div
            style={{
              display: 'grid',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <SocialIcons />
            <CopyrightText />
          </div>
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

          <div
            style={{
              justifyContent: 'center'
            }}
          >
            <h3>Resume</h3>
            <ResumeDevIT />
          </div>
          <hr />
          <div
            style={{
              display: 'grid',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <SocialIcons />
            <CopyrightText />
          </div>
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
          <span className="image main">
            {/* Image: Training Trinity */}
            <img src={imageTrinityBitework} alt="" />
            <br></br>
            {/* Image: Halloween costume 2023 */}
            <img src={imageHalloween} alt="" />
            <br></br>
            {/* Video: March Waiting */}
            <video
              muted
              width="200px"
              controls
              style={{ justifyContent: 'center' }}
            >
              <source src={marchWaiting} type="video/mp4" />
            </video>
            <br></br>
            {/* Video: March on Capital Hill */}
            <video muted controls>
              <source src={marchOnCapitalHill} type="video/mp4" />
            </video>
            <br></br>
            {/* Video: March on Union Station */}
            <video
              muted
              width="200x"
              controls
              style={{ justifyContent: 'center' }}
            >
              <source src={marchOnUnionStation} type="video/mp4" />
            </video>
          </span>
          <hr />
          <div
            style={{
              display: 'grid',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <SocialIcons />
            <CopyrightText />
          </div>
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
          <hr />
          <div
            style={{
              display: 'grid',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <SocialIcons />
            <CopyrightText />
          </div>
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
