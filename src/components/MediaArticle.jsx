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

// Obligatory
import * as React from 'react'

// FontAwesome
// import from './icons/DogIcon.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDog,
  faHeart,
  faImage,
  faUser,
  faVideo
} from '@fortawesome/free-solid-svg-icons'

// Material UI Components
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'

// Media Component Sources
import ImgDogTraining from './img/ImgDogTraining'
import VidDogTraining from './video/VidDogTraining'
import ImgJustMe from './img/ImgJustMe'
import ImgWithLily from './img/ImgWithLily'

export default function MediaArticle() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <a className="icon">
            <FontAwesomeIcon icon={faDog} />
          </a>
          &nbsp;&nbsp;Dog Training
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <a className="icon">
                <FontAwesomeIcon icon={faImage} />
              </a>
              &nbsp;&nbsp;Images
            </AccordionSummary>
            <AccordionDetails>
              <ImgDogTraining />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <a className="icon">
                <FontAwesomeIcon icon={faVideo} />
              </a>
              &nbsp;&nbsp;Video
            </AccordionSummary>
            <AccordionDetails>
              <VidDogTraining />
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <a className="icon">
            <FontAwesomeIcon icon={faUser} />
          </a>
          &nbsp;&nbsp;Photos of Me
        </AccordionSummary>
        <AccordionDetails>
          <ImgJustMe />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <a className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          &nbsp;&nbsp;Photos of Me and my Love
        </AccordionSummary>
        <AccordionDetails>
          <ImgWithLily />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
