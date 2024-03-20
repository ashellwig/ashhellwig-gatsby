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

export default class SocialIcons extends React.Component {
  render() {
    return (
      <ul className='icons'>
        {/* LinkTree Icon */}
        <li>
          <a
            aria-label='LinkTree'
            href='https://linktr.ee/ashwig'
            target='_blank'
            rel='noreferrer'
            className='icon fa-link'
          ></a>
        </li>
        {/* Twitch Icon */}
        <li>
          <a
            aria-label='Twitch'
            href='https://twitch.tv/ashhellwig'
            target='_blank'
            rel='noreferrer'
            className='icon fa-twitch'
          ></a>
        </li>
        {/* YouTube Icon */}
        <li>
          <a
            aria-label='YouTube'
            href='https://youtube.com/@ashhellwig'
            target='_blank'
            rel='noreferrer'
            className='icon fa-youtube'
          ></a>
        </li>
        {/* Instagram Icon */}
        <li>
          <a
            aria-label='Instagram'
            href='https://instagram.com/toyotatrapstar'
            target='_blank'
            rel='noreferrer'
            className='icon fa-instagram'
          ></a>
        </li>
        {/* Twitter Icon */}
        <li>
          <a
            aria-label='X/Twitter'
            href='https://twitter.com/hellwigashton'
            target='_blank'
            rel='noreferrer'
            className='icon fa-twitter'
          ></a>
        </li>
        {/* Facebook Icon */}
        <li>
          <a
            aria-label='Facebook'
            href='https://facebook.com/AshtonATL'
            target='_blank'
            rel='noreferrer'
            className='icon fa-facebook'
          ></a>
        </li>
        {/* GitHub Icon */}
        <li>
          <a
            aria-label='GitHub'
            href='https://github.com/ashellwig/ashhellwig-gatsby.git'
            target='_blank'
            rel='noreferrer'
            className='icon fa-github'
          ></a>
        </li>
        {/* LinkedIn Icon */}
        <li>
          <a
            aria-label='LinkedIn'
            href='https://www.linkedin.com/in/ahellwig/'
            target='_blank'
            rel='noreferrer'
            className='icon fa-linkedin'
          ></a>
        </li>
      </ul>
    )
  }
}
