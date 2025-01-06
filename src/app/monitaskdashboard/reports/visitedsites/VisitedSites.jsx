"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VisitedSites = () => {
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: new Date("2024-12-16"),
    end: new Date("2024-12-22"),
  });

  const [filters, setFilters] = useState({
    member: "[DEMO] Angelica Pickles",
    displayOptions: "Nothing selected",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sampleData = [
    {
      domain: "trello.com",
      activity: "01h 09m",
      member: "[DEMO] Angelica Pickles",
      date: "2024-12-16",
    },
    {
      domain: "www.google.com",
      activity: "00h 43m",
      member: "[DEMO] Angelica Pickles",
      date: "2024-12-16",
    },
    {
      domain: "drive.google.com",
      activity: "00h 17m",
      member: "[DEMO] Angelica Pickles",
      date: "2024-12-18",
    },
    {
      domain: "www.facebook.com",
      activity: "00h 06m",
      member: "[DEMO] Angelica Pickles",
      date: "2024-12-19",
    },
    {
      domain: "www.google.com",
      activity: "00h 04m",
      member: "[DEMO] Angelica Pickles",
      date: "2024-12-20",
    },
    {
      domain: "laravel.com",
      activity: "00h 01m",
      member: "[DEMO] Angelica Pickles",
      date: "2024-12-21",
    },
    {
      domain: "github.com",
      activity: "01h 15m",
      member: "[DEMO] Howard DeVille",
      date: "2024-12-18",
    },
    {
      domain: "stackoverflow.com",
      activity: "00h 50m",
      member: "[DEMO] Howard DeVille",
      date: "2024-12-20",
    },
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const isDateInRange = (date) => {
    const startDate = selectedDateRange.start;
    const endDate = selectedDateRange.end;
    const currentDate = new Date(date);
    return currentDate >= startDate && currentDate <= endDate;
  };

  const filteredData = sampleData.filter((row) => {
    const matchesMember =
      filters.member === "All" || row.member === filters.member;
    const matchesDate = isDateInRange(row.date);
    const matchesDisplayOptions =
      filters.displayOptions === "Nothing selected" ||
      (filters.displayOptions === "Show active domains" &&
        row.activity !== "00h 00m") ||
      (filters.displayOptions === "Show inactive domains" &&
        row.activity === "00h 00m");

    return matchesMember && matchesDate && matchesDisplayOptions;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="p-4">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <h2 className="text-xl font-bold mb-4">Visited Sites</h2>
        <div className="space-y-4">
          <div className="flex space-x-4 items-center">
            {/* Date Picker */}
            <div className="flex items-center space-x-2">
              <DatePicker
                selected={selectedDateRange.start}
                onChange={(date) =>
                  setSelectedDateRange((prev) => ({ ...prev, start: date }))
                }
                dateFormat="MM/dd/yyyy"
                className="border rounded-md px-4 py-2"
              />
              <span>-</span>
              <DatePicker
                selected={selectedDateRange.end}
                onChange={(date) =>
                  setSelectedDateRange((prev) => ({ ...prev, end: date }))
                }
                dateFormat="MM/dd/yyyy"
                className="border rounded-md px-4 py-2"
              />
            </div>
            <select
              className="border rounded-md px-4 py-2"
              value={filters.member}
              onChange={(e) => handleFilterChange("member", e.target.value)}
            >
              <option value="All">All Members</option>
              <option>[DEMO] Angelica Pickles</option>
              <option>[DEMO] Howard DeVille</option>
            </select>
            <select
              className="border rounded-md px-4 py-2"
              value={filters.displayOptions}
              onChange={(e) =>
                handleFilterChange("displayOptions", e.target.value)
              }
            >
              <option>Nothing selected</option>
              <option>Show active domains</option>
              <option>Show inactive domains</option>
            </select>
            {/* <button className="border rounded-md px-4 py-2">
              More Actions
            </button> */}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded-md shadow">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Domain</th>
              <th className="border px-4 py-2 text-left">Activity</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2">{row.domain}</td>
                  <td className="border px-4 py-2">{row.activity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center p-4">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredData.length)} of {filteredData.length}{" "}
            entries
          </span>
          <div className="space-x-2">
            <button
              className="border rounded-md px-4 py-2"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <button
              className="border rounded-md px-4 py-2"
              disabled={endIndex >= filteredData.length}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitedSites;
