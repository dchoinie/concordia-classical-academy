import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TourRequestForm = () => {
  return (
    <form
      method="POST"
      action="https://formspree.io/f/xbjvvkez"
      className="w-full flex flex-col p-6 rounded shadow border border-gray-100"
    >
      <p className="mb-2">Parent / Guardian Info</p>
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
      <p className="mb-2">Student(s) Info</p>
      <input
        type="number"
        name="number_of_children"
        id="number_of_children"
        placeholder="Number of Children"
        className="p-4 w-full border border-gray-200 rounded shadow mb-6"
        required
      />
      <input
        type="text"
        name="student_names"
        id="student_names"
        placeholder="Name(s)"
        className="p-4 w-full border border-gray-200 rounded shadow mb-6"
        required
      />
      <input
        type="text"
        name="grades"
        id="grades"
        placeholder="Grade(s)"
        className="p-4 w-full border border-gray-200 rounded shadow mb-6"
        required
      />
      <button type="submit" className="btnPrimary btnMedium btn self-start">
        Submit
        <span>
          <FontAwesomeIcon icon={faAngleRight} className="ml-2 self-center" />
        </span>
      </button>
    </form>
  );
};

export default TourRequestForm;
