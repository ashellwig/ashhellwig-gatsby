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
import ReactPlayer from 'react-player/youtube'

import '../../assets/css/VidDogTraining.css'

export default function VidDogTraining() {
  return (
    <React.Fragment>
      <div className="gallery style2">
        <div>
          <ReactPlayer
            width="100%"
            url="https://youtu.be/zVDMYpvE3q4"
            width="450px"
          />
        </div>
        <br></br>
        <div>
          <ReactPlayer
            width="100%"
            url="https://youtu.be/U3jvhBOj1e4?si=1qkOE5wZhuFyJ0p0"
            width="450px"
          />
        </div>
        <br></br>
        <div>
          <ReactPlayer
            width="100%"
            url="https://youtu.be/_YdEe9wGUvI?si=6nE2bSGet6fp1dLv"
            width="450px"
          />
        </div>
        <br></br>
        <div>
          <ReactPlayer
            width="100%"
            url="https://youtu.be/QSuueUed9Qs?si=YQMTVMSDYh2uI5Qp"
            width="450px"
          />
        </div>
        <br></br>
        <div>
          <ReactPlayer
            width="100%"
            url="https://youtu.be/wUp1EzF1dp0?si=7YJgwlL-z3UpPxYd"
            width="450px"
          />
        </div>
      </div>
    </React.Fragment>
  )
}
