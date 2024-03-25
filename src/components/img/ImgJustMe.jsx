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
import biggie from '../../images/justme/biggie.jpg'
import blondeAndPink from '../../images/justme/blonde-and-pink.jpg'
import f21Candid from '../../images/justme/f21-candid.jpg'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export default function ImgJustMe() {
  return (
    <React.Fragment>
      <div>
        <Carousel responsive={responsive}>
          <div>
            <img
              style={{
                width: '70%',
                height: '70%'
              }}
              src={biggie}
              alt="Biggie Memorial in NYC"
            />
          </div>
          <div>
            <img
              style={{
                width: '70%',
                height: '70%'
              }}
              src={blondeAndPink}
              alt="Blonde and Pink Hair-due"
            />
          </div>
          <div>
            <img
              style={{
                width: '70%',
                height: '70%'
              }}
              src={f21Candid}
              alt="Cherry Creek after buying Lily F21 Apparel"
            />
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  )
}
