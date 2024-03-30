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
import kojackFaceBite from '../../images/dogtraining/Kojack_Face-Bite.jpg'
import kojackFaceBiteThumb from '../../images/dogtraining/Kojack_Face-Bite-thumb.jpg'
import kojackWrongArm from '../../images/dogtraining/kojack_Wrong-Arm.jpg'
import kojackWrongArmThumb from '../../images/dogtraining/kojack_Wrong-Arm-thumb.jpg'
import trinitySleeve from '../../images/dogtraining/trinity_sleeve.jpg'
import trinitySleeveThumb from '../../images/dogtraining/trinity_sleeve-thumb.jpg'

import '../../assets/css/ImgDogTraining.css'

export default function ImgDogTraining() {
  return (
    <React.Fragment>
      <div className="gallery style2">
        <a href={kojackFaceBite} className="image">
          <img src={kojackFaceBiteThumb} alt="Kojack coming for the face" />
          <div className="caption">Kojack coming for the face</div>
        </a>
        <br />
        <br />
        <a href={kojackWrongArm} className="image">
          <img
            src={kojackWrongArmThumb}
            alt="Kojack coming for the wrong arm"
          />
          <div className="caption">Kojack coming for the wrong arm</div>
        </a>
        <br />
        <br />
        <a href={trinitySleeve} className="image">
          <img src={trinitySleeveThumb} alt="Trinity sleeve work" />
          <div className="caption">Trinity sleeve work</div>
        </a>
      </div>
    </React.Fragment>
  )
}
