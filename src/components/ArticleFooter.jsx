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

import Copyright from './Copyright.jsx'
import SocialIcons from './SocialIcons.jsx'

export default class ArticleFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <div
          style={{
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <SocialIcons />
          <Copyright />
        </div>
      </React.Fragment>
    )
  }
}
