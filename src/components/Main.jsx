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

// Main Images
import holdingIchigo from '../images/holdingichigo.jpg'

// Images for Media Article
// import ImgJustMe from './img/ImgJustMe.jsx'
import MediaArticle from './MediaArticle.jsx'

import devITResumeFile from '../assets/pdf/Ashton_S_Hellwig_Resume.pdf'
import ClientList from './ClientList.jsx'
import ContactForm from './ContactForm.jsx'
import ArticleFooter from './ArticleFooter.jsx'

// react-pdf depends on browser globals (DOMMatrix, Path2D), so the viewer
// is only loaded on the client and skipped during static HTML generation.
const ResumeDevIT = React.lazy(() => import('./ResumeDevIT.jsx'))

class Main extends React.Component {
  constructor(props) {
    super(props)
    // Rendered identically on server and first client pass, then the PDF
    // viewer mounts after hydration so the markup never mismatches.
    this.state = { mounted: false }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
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
            Colorado-based systems engineer and Python developer working at the
            intersection of infrastructure, data, and regulatory compliance. I
            build, migrate, and operate systems in regulated environments where
            data handling, access control, and auditability are non-negotiable.
          </p>
          <p>
            Currently, I am leading the migration of on-premise Exchange 2016
            and Proofpoint from Jeppesen/Boeing to cloud-based IAM and email
            security services as part of the divestiture of Jeppesen from
            Boeing. That work runs under a defense-contractor compliance
            posture, so I maintain cybersecurity operations and data-handling
            controls throughout the migration.
          </p>
          <h3>Compliance &amp; Security</h3>
          <ul>
            <li>
              <b>CMMC</b> &mdash; working knowledge of the practice domains and
              how they map to day-to-day system administration and change
              control.
            </li>
            <li>
              <b>NIST SP 800-171</b> &amp; <b>DFARS 252.204-7012</b> &mdash;
              implementing and maintaining the required safeguards for
              Controlled Unclassified Information on covered contractor
              information systems.
            </li>
            <li>
              <b>CUI / ITAR</b> &mdash; export-controlled and controlled
              unclassified data handling: identifying what is in scope, keeping
              it inside authorized boundaries, and ensuring only U.S. persons
              with a need-to-know have access.
            </li>
            <li>
              <b>Microsoft GCC High</b> &mdash; operating in and migrating into
              the sovereign U.S. government cloud (Exchange Online, Entra ID)
              where ITAR/CUI workloads are required to live.
            </li>
            <li>
              <b>Proofpoint</b> &mdash; email security, mail-flow routing, and
              data-loss prevention during a cross-tenant migration, keeping
              mailboxes protected and reportable at every stage.
            </li>
            <li>
              <b>Exchange &amp; PowerShell</b> &mdash; built an extensive
              PowerShell module from the ground up to report on and move
              mailboxes between destinations with a full audit trail.
            </li>
            <li>
              <b>Identity &amp; Access</b> &mdash; automated account
              provisioning on Microsoft Entra ID via serverless functions and
              webhooks, so joiner/mover/leaver events are enforced rather than
              remembered.
            </li>
          </ul>
          <p>
            Before this, I built regulatory reporting pipelines in financial
            technology at American Express (TeraData, Hive, and Python,
            producing regulator-mandated reports for FR, MX, IT, and NL) and
            served as an IT Systems Administrator and Compliance Officer in
            Colorado&apos;s regulated cannabis industry, automating
            &quot;seed-to-sale&quot; state reporting against METRC. Compliance
            has been a thread through most of my career, not a recent add-on.
          </p>
          <p>
            My main focus is on the&nbsp; &quot;
            <i>backend and systems-side</i>&quot;&nbsp; of development. Please
            see my resume under&nbsp;
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
            <ClientList />
          </div>
          <h3>Resume</h3>
          <div>
            {this.state.mounted && (
              <React.Suspense fallback={<p>Loading resume&hellip;</p>}>
                <ResumeDevIT />
              </React.Suspense>
            )}
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
          <MediaArticle />
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

export default Main
