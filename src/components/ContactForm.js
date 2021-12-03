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

import '../assets/css/contact-form.css'

const ContactForm = () => (
  <div id="contact-form">
    <form name="contact-form" method="POST" data-netlify="true">
      {/* BEGIN: Netlify Preamble */}
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-name"
        value="ash.ashwigltd.com-contact-form"
      />
      {/* END: Netlify Preamble */}

      {/* BEGIN: Form Field: First Name */}
      <p>
        <label
          className="form-input-label"
          htmlFor="contact-form-field-first-name"
        >
          First Name
        </label>
        <input
          type="text"
          name="contact-form-field-first-name"
          id="contact-form-field-first-name"
        />
      </p>
      {/* END: Form Field: First Name */}

      {/* BEGIN: Form Field: Last Name */}
      <p>
        <label
          className="form-input-label"
          htmlFor="contact-form-field-last-name"
        >
          Last Name
        </label>
        <input
          type="text"
          name="contact-form-field-last-name"
          id="contact-form-field-last-name"
        />
      </p>
      {/* END: Form Field: Last Name */}

      {/* BEGIN: Form Field: Contact Email */}
      <p>
        <label
          className="form-input-label"
          htmlFor="contact-form-field-contact-email"
        >
          Email
        </label>
        <input
          type="email"
          name="contact-form-field-contact-email"
          id="contact-form-field-contact-email"
        />
      </p>
      {/* END: Form Field: Contact Email */}

      {/* BEGIN: Form Field: Message */}
      <p>
        <label
          className="form-input-label"
          htmlFor="contact-form-field-contact-message"
        >
          Message
        </label>
        <textarea
          name="contact-form-field-contact-message"
          id="contact-form-field-contact-message"
        ></textarea>
      </p>
      {/* END: Form Field: Message */}

      {/* BEGIN: Button: Submit */}
      <p>
        <button type="submit">Submit</button>
      </p>
      {/* END: Button: Submit */}
    </form>
  </div>
)

export default ContactForm
