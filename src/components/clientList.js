// Copyright (C) 2021 Ash Hellwig
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
// import clientAmericanExpress from '../images/clientLogos/client-americanexpress.png'
// import clientTakkion from '../images/clientLogos/client-takkion.png'
import '../assets/css/client-list.css'

const ClientList = () => (
  <div className="grid">
    {/* ---- Hot Dish Honey ---- */}
    <div className="clientLinkHotDishHoney">
      <a
        className="client-link"
        href="https://www.hotdishhoney.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Logo - Hot Dish Honey"
          src={clientHotDishHoney}
          width="200px"
          style={{ justifyContent: 'center' }}
        />
      </a>
    </div>
    {/* ---- Lil Pink's Pastries ---- */}
    <div className="clientLinkLilPinkPastries">
      <a
        className="client-link"
        href="https://lilpinkspastries.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Logo - Lil Pink's Pastries"
          src={clientLilPinksPastries}
          width="150px"
        />
      </a>
    </div>
    {/* ---- The Clear ---- */}
    <div className="clientLinkClearCannabis">
      <a
        className="client-link"
        href="https://clearcannabisinc.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Logo - The Clear" src={clientTheClear} width="200px" />
      </a>
    </div>
    {/* ---- Wolfpac Cannabis ---- */}
    <div className="clientLinkWolfPacCannabis">
      <a
        className="client-link"
        href="https://www.wolfpaccannabis.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Logo - Wolfpac" src={clientWolfpac} width="125px" />
      </a>
    </div>
    {/* ---- IgadI ---- */}
    <div className="clientLinkIgadI">
      <a
        className="client-link"
        href="https://www.igadiltd.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Logo - IgadI" src={clientIgadi} width="200px" />
      </a>
    </div>
  </div>
)

export default ClientList
