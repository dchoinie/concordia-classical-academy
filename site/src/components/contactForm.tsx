import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ContactForm = (): JSX.Element => {
  return (
    <form
      method="POST"
      action="https://formspree.io/f/xoqzvlok"
      className="w-full flex flex-col p-6 rounded shadow border border-gray-100"
    >
      <div className="flex justify-between gap-6 mb-6">
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First"
          className="p-4 w-full border border-gray-200 rounded shadow"
          required
        />
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last"
          className="p-4 w-full border border-gray-200 rounded shadow"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="p-4 w-full border border-gray-200 rounded shadow mb-6"
        required
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone"
        className="p-4 w-full border border-gray-200 rounded shadow mb-6"
        required
      />
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="Message"
        className="p-4 w-full border border-gray-200 rounded shadow mb-6"
        required
      ></textarea>
      <fieldset className="flex mb-6">
        <input type="checkbox" name="_optin" id="_optin" className="mr-4" />
        <label htmlFor="_optin" className="text-gray-700">Signup For Our Newsletter</label>
      </fieldset>
      <button type="submit" className="btnPrimary btnMedium btn self-start">
        Submit
        <span>
          <FontAwesomeIcon icon={faAngleRight} className="ml-2 self-center" />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
