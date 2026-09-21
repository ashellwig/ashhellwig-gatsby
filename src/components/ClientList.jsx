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

import clientIgadi from '../images/clientLogos/client-igadi.png'
import clientWolfpac from '../images/clientLogos/client-wolfpac.png'
import clientTheClear from '../images/clientLogos/client-theclear.png'
import clientLilPinksPastries from '../images/clientLogos/client-lilpinkspastries.png'
import clientHotDishHoney from '../images/clientLogos/client-hotdishhoney.png'

import '../assets/css/client-list.css'

// Each logo gets a relative "size" so visually heavier marks (wide, dark)
// don't dominate the row. Widths are resolved in CSS against the container,
// never in fixed pixels, so the row reflows at any viewport.
const clients = [
  {
    name: 'Hot Dish Honey',
    href: 'https://www.hotdishhoney.com',
    src: clientHotDishHoney,
    size: 'md'
  },
  {
    name: "Lil Pink's Pastries",
    href: 'https://lilpinkspastries.com',
    src: clientLilPinksPastries,
    size: 'sm'
  },
  {
    name: 'The Clear',
    href: 'https://clearcannabisinc.com/',
    src: clientTheClear,
    size: 'md'
  },
  {
    name: 'Wolfpac',
    href: 'https://www.wolfpaccannabis.com/',
    src: clientWolfpac,
    size: 'sm'
  },
  {
    name: 'IgadI',
    href: 'https://www.igadiltd.com/',
    src: clientIgadi,
    size: 'md'
  }
]

const ClientList = () => (
  <ul className="client-list">
    {clients.map(({ name, href, src, size }) => (
      <li key={name} className={`client-list__item client-list__item--${size}`}>
        <a
          className="client-link"
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
        >
          <img alt={`Logo - ${name}`} src={src} loading="lazy" />
        </a>
      </li>
    ))}
  </ul>
)

export default ClientList
