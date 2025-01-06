"use client";
import React, { useState } from "react";

const WeeklyReport = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [reportTime, setReportTime] = useState("10:00 AM");
  const [timezone, setTimezone] = useState("UTC+05:00 Islamabad, Karachi");
  // const [dataPeriod, setDataPeriod] = useState("last24hours");
  const [additionalOptions, setAdditionalOptions] = useState({
    productivityData: true,
    noEmailIfEmpty: true,
    includeAdmin: true,
    attachCSV: false,
    attachPDF: false,
  });
  const [emailList, setEmailList] = useState(["samarali@teknolje.com"]);
  const [newEmail, setNewEmail] = useState("");

  // const handleDayToggle = (day) => {
  //   setSelectedDays((prevDays) =>
  //     prevDays.includes(day)
  //       ? prevDays.filter((d) => d !== day)
  //       : [...prevDays, day]
  //   );
  // };

  const handleOptionToggle = (option) => {
    setAdditionalOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleAddEmail = () => {
    if (newEmail.trim() && !emailList.includes(newEmail.trim())) {
      setEmailList([...emailList, newEmail.trim()]);
      setNewEmail("");
    }
  };

  const handleDeleteEmail = (email) => {
    setEmailList((prevEmails) => prevEmails.filter((e) => e !== email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedDays,
      reportTime,
      timezone,
      dataPeriod,
      additionalOptions,
      emailList,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Weekly Report</h1>

      {/* Report Time and Timezone */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-bold mb-2">Report Delivery Time</label>
          <input
            type="time"
            value={reportTime}
            onChange={(e) => setReportTime(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Timezone</label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
          >
            <option>UTC+05:00 Islamabad, Karachi</option>
            {/* Add other timezones as needed */}
          </select>
        </div>
      </div>

      {/* Additional Options */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">Additionally:</h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.keys(additionalOptions).map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={additionalOptions[option]}
                onChange={() => handleOptionToggle(option)}
              />
              <span>
                {option
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Emails */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Emails</label>
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border rounded-md px-4 py-2 flex-1"
          />
          <button
            type="button"
            onClick={handleAddEmail}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Email
          </button>
        </div>
        <ul>
          {emailList.map((email, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <span>{email}</span>
              <button
                type="button"
                onClick={() => handleDeleteEmail(email)}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default WeeklyReport;
