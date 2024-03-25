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

// Carousel Component
import Carousel from 'react-multi-carousel'
// Carousel Component Style
import 'react-multi-carousel/lib/styles.css'

// Images
import aLittledark from '../../images/withlily/alittledark.jpg'
import aLittledarkThumb from '../../images/withlily/alittledark-thumb.jpg'
import barinnola from '../../images/withlily/barinnola.jpg'
import barinnolaThumb from '../../images/withlily/barinnola-thumb.jpg'
import bloodysexy from '../../images/withlily/bloodysexy.jpg'
import bloodysexyThumb from '../../images/withlily/bloodysexy-thumb.jpg'

export default function ImgWithLily() {
  return (
    <React.Fragment>
      <div className="gallery style2">
        <a href={aLittledark} className="image">
          <img src={aLittledarkThumb} alt="Lily Edited this <3" />
        </a>
        <div className="caption">
          Lily Edited this&npsp;<a className="icon fa-heart-o"></a>
        </div>
        <a href={barinnola} className="image">
          <img src={barinnolaThumb} alt="Fun bar in NoLa" />
          <div className="caption">Fun bar in NoLa</div>
        </a>
        <a href={bloodysexy} className="image">
          <img
            src={bloodysexyThumb}
            alt="Getting ready for Halloween in NoLa"
          />
          <div className="caption">Getting ready for Halloween in NoLa</div>
        </a>
      </div>
    </React.Fragment>
  )
}
