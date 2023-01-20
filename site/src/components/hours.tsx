import React from "react";

const HoursComponent = () => {
  return (
    <div className="my-24">
      <table className="w-full lg:w-2/3 mx-auto table-fixed border border-primary shadow">
        <thead>
          <tr className="py-6 text-white bg-primary">
            <th className="p-6">Program</th>
            <th className="p-6">Start Time</th>
            <th className="p-6">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-6">Morning Care</td>
            <td className="p-6">7:30 AM</td>
            <td className="p-6">8:00 AM</td>
          </tr>
          <tr className="text-center bg-gray-100">
            <td className="p-6">School Day</td>
            <td className="p-6">8:10 AM</td>
            <td className="p-6">2:30 PM</td>
          </tr>
          <tr className="text-center">
            <td className="p-6">After Care</td>
            <td className="p-6">2:30 PM</td>
            <td className="p-6">5:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HoursComponent;
