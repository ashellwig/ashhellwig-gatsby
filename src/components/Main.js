import PropTypes from 'prop-types'
import React from 'react'
import { withBreakpoints } from 'react-breakpoints'

import imageTrinityBitework from '../images/trinitybitework.jpg'
import holdingIchigo from '../images/holdingichigo.jpg'
import marchOnCapitalHill from '../images/video/March-Capital-Hill.mp4'
import marchOnUnionStation from '../images/video/March-Union-Station.mp4'
import marchWaiting from '../images/video/march-waiting.mp4'

import ClientList from './clientList'
import ResumeCannabis from './ResumeCannabis'
import ResumeDevIT from './ResumeDevIT'
import ClientListMobile from './ClientListMobile'

class Main extends React.Component {
  render() {
    const { breakpoints, currentBreakpoint } = this.props

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
            Colorado-based pure mathematics student and experienced compliance
            professional in Colorado`s regulated marijuana industry. Outside of
            the world of technology and Cannabis, I train dogs for protection
            and off-leash obedience at Mountain Canine College in Evergreen, CO.
          </p>
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
              {breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
                <ClientList />
              ) : (
                <ClientListMobile />
              )}
            </div>
          </div>

          <div>
            <h3>Software Development and IT Systems Administration</h3>
            <ResumeDevIT />
          </div>

          <div>
            <h3>Cannabis and Industrial Hemp</h3>
            <ResumeCannabis />
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
            {/* Video: March Waiting */}
            <video muted controls style={{ justifyContent: 'center' }}>
              <source src={marchWaiting} type="video/mp4" />
            </video>
            <br></br>
            {/* Video: March on Capital Hill */}
            <video muted controls>
              <source src={marchOnCapitalHill} type="video/mp4" />
            </video>
            <br></br>
            {/* Video: March on Union Station */}
            <video muted controls style={{ justifyContent: 'center' }}>
              <source src={marchOnUnionStation} type="video/mp4" />
            </video>
          </span>
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
          <p>
            This page is still under construction. Please contact&nbsp;
            <a href="mailto:ash@ashwigltd.com">ash@ashwigltd.com</a>&nbsp; with
            any business related inquiries.
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/hellwigashton"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/AshtonATL"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ashhellwig"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ashellwig/ashhellwig-gatsby.git"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
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
