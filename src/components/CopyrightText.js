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

import React from 'react'

export default class Copyright extends React.Component {
  render() {
    return (
      <div className="copyright">
        <p className="copyrightText">
          Copyright &copy; 2021-2024 Ash Hellwig. All rights reserved.
          <br></br>
          Made with&nbsp;
          <a
            aria-label="Heart"
            href="https://github.com/ashellwig/ashhellwig-gatsby"
            target="_blank"
            rel="noreferrer"
            className="icon fa-heart-o"
          ></a>
          &nbsp;using&nbsp;
          <a href="https://html5up.net">HTML5UP</a> and&nbsp;
          <a href="https://www.gatsbyjs.org/">Gatsby.js</a>.
        </p>
      </div>
    )
  }
}
