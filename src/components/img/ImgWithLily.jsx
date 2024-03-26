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
import aLittledark from '../../images/withlily/alittledark.jpg'
import aLittledarkThumb from '../../images/withlily/alittledark-thumb.jpg'
import barinnola from '../../images/withlily/barinnola.jpg'
import barinnolaThumb from '../../images/withlily/barinnola-thumb.jpg'
import bloodysexy from '../../images/withlily/bloodysexy.jpg'
import bloodysexyThumb from '../../images/withlily/bloodysexy-thumb.jpg'
import firstdate from '../../images/withlily/firstdate.jpg'
import firstdateThumb from '../../images/withlily/firstdate-thumb.jpg'
import flipped from '../../images/withlily/flipped.jpg'
import flippedThumb from '../../images/withlily/flipped-thumb.jpg'
import graveyardpurple from '../../images/withlily/graveyardpurple.jpg'
import graveyardpurpleThumb from '../../images/withlily/graveyardpurple-thumb.jpg'
import halloweenfit from '../../images/withlily/halloweenfit.jpg'
import halloweenfitThumb from '../../images/withlily/halloweenfit-thumb.jpg'
import mirabelle from '../../images/withlily/mirabelle.jpg'
import mirabelleThumb from '../../images/withlily/mirabelle-thumb.jpg'
import plaiddresschoke from '../../images/withlily/plaiddresschoke.jpg'
import plaiddresschokeThumb from '../../images/withlily/plaiddresschoke-thumb.jpg'
import redfitkiss from '../../images/withlily/redfitkiss.jpg'
import redfitkissThumb from '../../images/withlily/redfitkiss-thumb.jpg'
import smiles from '../../images/withlily/smiles.jpg'
import smilesThumb from '../../images/withlily/smiles-thumb.jpg'
import susboy from '../../images/withlily/susboy.jpg'
import susboyThumb from '../../images/withlily/susboy-thumb.jpg'
import thanksgiving from '../../images/withlily/thanksgiving.jpg'
import thanksgivingThumb from '../../images/withlily/thanksgiving-thumb.jpg'
import thanksgivingkiss from '../../images/withlily/thanksgivingkiss.jpg'
import thanksgivingkissThumb from '../../images/withlily/thanksgivingkiss-thumb.jpg'
import tongues from '../../images/withlily/tongues.jpg'
import tonguesThumb from '../../images/withlily/tongues-thumb.jpg'
import tropicalbarinnola from '../../images/withlily/tropicalbarinnola.jpg'
import tropicalbarinnolaThumb from '../../images/withlily/tropicalbarinnola-thumb.jpg'

import '../../assets/css/ImgWithLily.css'

export default function ImgWithLily() {
  return (
    <React.Fragment>
      <div className="gallery style2">
        <a href={aLittledark} className="image">
          <img src={aLittledarkThumb} alt="Lily Edited this <3" />
          <div className="caption">
            Lily Edited this&nbsp;<i className="icon fa-heart-o"></i>
          </div>
        </a>
        <br />
        <br />
        <a href={barinnola} className="image">
          <img src={barinnolaThumb} alt="Fun bar in NoLa" />
          <div className="caption">Fun bar in NoLa</div>
        </a>
        <br />
        <br />
        <a href={bloodysexy} className="image">
          <img
            src={bloodysexyThumb}
            alt="Getting ready for Halloween in NoLa"
          />
          <div className="caption">Getting ready for Halloween in NoLa</div>
        </a>
        <br />
        <br />
        <a href={firstdate} className="image">
          <img src={firstdateThumb} alt="First Date with Lily" />
          <div className="caption">First Date with Lily</div>
        </a>
        <br />
        <br />
        <a href={flipped} className="image">
          <img src={flippedThumb} alt="Lily also edited this" />
          <div className="caption">Lily also edited this</div>
        </a>
        <br />
        <br />
        <a href={graveyardpurple} className="image">
          <img
            src={graveyardpurpleThumb}
            alt="One of my Favorite outfits of hers"
          />
          <div className="caption">One of my Favorite outfits of hers</div>
        </a>
        <br />
        <br />
        <a href={halloweenfit} className="image">
          <img src={halloweenfitThumb} alt="Lily and My Halloween Outfit" />
          <div className="caption">Lily and My Halloween Outfit</div>
        </a>
        <br />
        <br />
        <a href={mirabelle} className="image">
          <img
            src={mirabelleThumb}
            alt="Lily and I at the Mirabelle in Solvange, CA"
          />
          <div className="caption">
            Lily and I at the Mirabelle in Solvange, CA
          </div>
        </a>
        <br />
        <br />
        <a href={plaiddresschoke} className="image">
          <img src={plaiddresschokeThumb} alt="Just an average day" />
          <div className="caption">Just an average day</div>
        </a>
        <br />
        <br />
        <a href={redfitkiss} className="image">
          <img src={redfitkissThumb} alt="I would do anything for her" />
          <div className="caption">I would do anything for her</div>
        </a>
        <br />
        <br />
        <a href={smiles} className="image">
          <img src={smilesThumb} alt="Always all smiles with her" />
          <div className="caption">Always all smiles with her</div>
        </a>
        <br />
        <br />
        <a href={susboy} className="image">
          <img
            src={susboyThumb}
            alt="She lent me this shirt because I can't dress myself"
          />
          <div className="caption">
            She lent me this shirt because I can't dress myself
          </div>
        </a>
        <br />
        <br />
        <a href={thanksgiving} className="image">
          <img src={thanksgivingThumb} alt="Thanksgiving a couple years back" />
          <div className="caption">Thanksgiving a couple years back</div>
        </a>
        <br />
        <br />
        <a href={thanksgivingkiss} className="image">
          <img
            src={thanksgivingkissThumb}
            alt="Happiest Thanksgiving ever, I would say"
          />
          <div className="caption">Happiest Thanksgiving ever, I would say</div>
        </a>
        <br />
        <br />
        <a href={tongues} className="image">
          <img src={tonguesThumb} alt="Nothing much to say" />
          <div className="caption">Nothing much to say</div>
        </a>
        <br />
        <br />
        <a href={tropicalbarinnola} className="image">
          <img
            src={tropicalbarinnolaThumb}
            alt="Some bar in NoLa we went to for Halloween last year with a super amazing bartender"
          />
          <div className="caption">
            Some bar in NoLa we went to for Halloween last year with a super
            amazing bartender
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}
