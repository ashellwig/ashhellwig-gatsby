import PropTypes from 'prop-types'
import React from 'react'
import { withBreakpoints } from 'react-breakpoints'

import imageTrinityBitework from '../images/trinitybitework.jpg'
import holdingIchigo from '../images/holdingichigo.jpg'
import marchOnCapitalHill from '../images/video/March-Capital-Hill.mp4'
import marchOnUnionStation from '../images/video/March-Union-Station.mp4'
import marchWaiting from '../images/video/march-waiting.mp4'

import ClientList from './clientList'
import ResumeDevIT from './ResumeDevIT'
import ClientListMobile from './ClientListMobile'
import ContactForm from './ContactForm'

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
        className='close'
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
        id='main'
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id='intro'
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Intro</h2>
          <span className='image main'>
            <img src={holdingIchigo} alt='' />
          </span>
          <p>
            Colorado-based BigData Data Engineer and experienced Python
            developer. Most of the industries I focus on are financial
            technology, oil &amp; gas, and medical technology.
          </p>
          <p>
            Experienced TeraData, Hive, and Python developer. In
            this industry, my main focus is on the&nbsp; &quot;
            <i>backend and systems-side</i>&quot;&nbsp; of development. Please
            see myresume under&nbsp;
            <i>experience</i> for more information.
          </p>
          <p>
            Outside of working in technology, I train dogs for
            protection and off-leash obedience at Mountain Canine College in
            Evergreen, CO.
          </p>
          {close}
        </article>

        <article
          id='experience'
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>experience</h2>

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

          <div style={{justifyContent: 'center'}}>
            <h3>Resume</h3>
            <ResumeDevIT />
          </div>

          {close}
        </article>

        <article
          id='media'
          className={`${this.props.article === 'media' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>media</h2>
          <span className='image main'>
            {/* Image: Training Trinity */}
            <img src={imageTrinityBitework} alt='' />
            <br></br>
            {/* Video: March Waiting */}
            <video
              muted
              width='200px'
              controls
              style={{ justifyContent: 'center' }}
            >
              <source src={marchWaiting} type='video/mp4' />
            </video>
            <br></br>
            {/* Video: March on Capital Hill */}
            <video muted controls>
              <source src={marchOnCapitalHill} type='video/mp4' />
            </video>
            <br></br>
            {/* Video: March on Union Station */}
            <video
              muted
              width='200x'
              controls
              style={{ justifyContent: 'center' }}
            >
              <source src={marchOnUnionStation} type='video/mp4' />
            </video>
          </span>
          {close}
        </article>

        <article
          id='contact'
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Contact</h2>
          <ContactForm />
          <ul className='icons'>
            <li>
              <a
                aria-label='X/Twitter'
                href='https://twitter.com/hellwigashton'
                target='_blank'
                rel='noreferrer'
                className='icon fa-twitter'
              ></a>
            </li>
            <li>
              <a
                aria-label='Facebook'
                href='https://facebook.com/AshtonATL'
                target='_blank'
                rel='noreferrer'
                className='icon fa-facebook'
              ></a>
            </li>
            <li>
              <a
                aria-label='Instagram'
                href='https://instagram.com/toyotatrapstar'
                target='_blank'
                rel='noreferrer'
                className='icon fa-instagram'
              ></a>
            </li>
            <li>
              <a
                aria-label='GitHub'
                href='https://github.com/ashellwig/ashhellwig-gatsby.git'
                target='_blank'
                rel='noreferrer'
                className='icon fa-github'
              ></a>
            </li>
            <li>
              <a
                aria-label='Twitch'
                href='https://twitch.tv/ashhellwig'
                target='_blank'
                rel='noreferrer'
                className='icon fa-twitch'
              ></a>
            </li>
            <li>
              <a
                aria-label='LinkTree'
                href='https://linktr.ee/ashwig'
                target='_blank'
                rel='noreferrer'
                className='icon fa-link'
              ></a>
            </li>
            <li>
              <a
                aria-label='YouTube'
                href='https://youtube.com/@ashhellwig'
                target='_blank'
                rel='noreferrer'
                className='icon fa-youtube'
              ></a>
            </li>
            <li>
              <a
                aria-label='LinkedIn'
                href='https://www.linkedin.com/in/ahellwig/'
                target='_blank'
                rel='noreferrer'
                className='icon fa-linkedin'
              ></a>
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
