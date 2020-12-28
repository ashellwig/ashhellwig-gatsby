import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import marchOnCapitalHill from '../images/video/March-Capital-Hill.mp4'
import marchOnUnionStation from '../images/video/March-Union-Station.mp4'
import marchWaiting from '../images/video/march-waiting.mp4'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
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
            <img src={pic03} alt="" />
          </span>
          <p>
            This page is still under construction. Please contact&nbsp;
            <a href="mailto:ash@ashwigltd.com">ash@ashwigltd.com</a>&nbsp; with
            any business related inquiries.
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
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            This page is still under construction. Please contact&nbsp;
            <a href="mailto:ash@ashwigltd.com">ash@ashwigltd.com</a>&nbsp; with
            any business related inquiries.
          </p>
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
            <img src={pic01} alt="" />
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
          <p>{close}</p>
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
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
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
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
