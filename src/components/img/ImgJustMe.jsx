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

// Images
import biggie from '../../images/justme/biggie.jpg'
import biggieThumb from '../../images/justme/biggie-thumb.jpg'
import blondeAndPink from '../../images/justme/blonde-and-pink.jpg'
import blondeAndPinkThumb from '../../images/justme/blonde-and-pink-thumb.jpg'
import f21Candid from '../../images/justme/f21-candid.jpg'
import f21CandidThumb from '../../images/justme/f21-candid-thumb.jpg'

export default function ImgJustMe() {
  return (
    <React.Fragment>
      <div className="gallery style2">
        <a href={biggie} className="image">
          <img src={biggieThumb} alt="Biggie Memorial" />
        </a>
        <div className="caption">Biggie Memorial in NYC</div>
        <a href={blondeAndPink} className="image">
          <img src={blondeAndPinkThumb} alt="Blonde and pink hairdue" />
          <div className="caption">Blonde and pink hairdue</div>
        </a>
        <a href={f21Candid} className="image">
          <img src={f21CandidThumb} alt="Cherry Creek Mall with Lily" />
          <div className="caption">Cherry Creek Mall with Lily</div>
        </a>
      </div>
    </React.Fragment>
  )
}
