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

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

import '../../assets/css/VidDogTraining.css'

const videos = [
  'https://youtu.be/zVDMYpvE3q4',
  'https://youtu.be/U3jvhBOj1e4?si=1qkOE5wZhuFyJ0p0',
  'https://youtu.be/_YdEe9wGUvI?si=6nE2bSGet6fp1dLv',
  'https://youtu.be/QSuueUed9Qs?si=YQMTVMSDYh2uI5Qp',
  'https://youtu.be/wUp1EzF1dp0?si=7YJgwlL-z3UpPxYd'
]

export default function VidDogTraining() {
  // react-player injects the iframe on the client only, which does not match
  // the server-rendered markup. Mount the players after hydration instead.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="gallery style2 video-gallery">
      {videos.map((url) => (
        <div key={url} className="video-embed">
          {mounted && (
            <ReactPlayer url={url} width="100%" height="100%" controls />
          )}
        </div>
      ))}
    </div>
  )
}
