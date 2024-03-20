import React from 'react'
import PropTypes from 'prop-types'
import SocialIcons from './SocialIcons'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <span>
      <SocialIcons />
    </span>
    <p></p>
    <p className="copyright">
      &copy; 2024 Ash Hellwig.
      Made with <span><a className='icon fa-heart'></a></span>
      <a href="https://html5up.net">HTML5 UP</a>. Made with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
