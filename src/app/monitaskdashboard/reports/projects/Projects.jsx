"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProjectsTable = () => {
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: new Date("2024-12-16"),
    end: new Date("2024-12-30"),
  });

  const [filters, setFilters] = useState({
    project: "All",
    groupBy: "Week",
    member: "All",
    team: "All",
    displayOptions: "Nothing selected",
  });

  const sampleData = [
    { week: "Dec 16 - Dec 23", project: "Activation Blizzard", hours: "04h 41m" },
    { week: "Dec 16 - Dec 23", project: "General Motors", hours: "06h 49m" },
    { week: "Dec 16 - Dec 23", project: "Oracle", hours: "04h 43m" },
    { week: "Dec 16 - Dec 23", project: "PayPal", hours: "01h 50m" },
    { week: "Dec 23 - Dec 30", project: "Activation Blizzard", hours: "-" },
    { week: "Dec 23 - Dec 30", project: "General Motors", hours: "-" },
    { week: "Dec 23 - Dec 30", project: "Oracle", hours: "-" },
    { week: "Dec 23 - Dec 30", project: "PayPal", hours: "-" },
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const filteredData = sampleData.filter((row) => {
    const matchesProject = filters.project === "All" || row.project === filters.project;
    return matchesProject;
  });

  return (
    <div className="p-4">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          {/* First Row of Filters */}
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
            {/* Projects Filter */}
            <select
              className="border rounded-md px-4 py-2"
              value={filters.project}
              onChange={(e) => handleFilterChange("project", e.target.value)}
            >
              <option value="All">All Projects</option>
              <option>Activation Blizzard</option>
              <option>General Motors</option>
              <option>Oracle</option>
              <option>PayPal</option>
            </select>
            {/* Group By Filter */}
            <select
              className="border rounded-md px-4 py-2"
              value={filters.groupBy}
              onChange={(e) => handleFilterChange("groupBy", e.target.value)}
            >
              <option>Week</option>
              <option>Month</option>
            </select>
          </div>
          {/* Second Row of Filters */}
          <div className="flex space-x-4 items-center">
            {/* Member Filter */}
            <select
              className="border rounded-md px-4 py-2"
              value={filters.member}
              onChange={(e) => handleFilterChange("member", e.target.value)}
            >
              <option value="All">All Members</option>
              <option>[DEMO] Angelica Pickles</option>
              <option>[DEMO] Howard DeVille</option>
            </select>
            {/* Teams Filter */}
            <select
              className="border rounded-md px-4 py-2"
              value={filters.team}
              onChange={(e) => handleFilterChange("team", e.target.value)}
            >
              <option value="All">All Teams</option>
              <option>Team Alpha</option>
              <option>Team Beta</option>
            </select>
            {/* Display Options Filter */}
            <select
              className="border rounded-md px-4 py-2"
              value={filters.displayOptions}
              onChange={(e) =>
                handleFilterChange("displayOptions", e.target.value)
              }
            >
              <option>Nothing selected</option>
              <option>Show active projects</option>
              <option>Show inactive projects</option>
            </select>
            {/* More Actions */}
            <button className="border rounded-md px-4 py-2">More Actions</button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded-md shadow">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Week</th>
              <th className="border px-4 py-2 text-left">Activation Blizzard</th>
              <th className="border px-4 py-2 text-left">General Motors</th>
              <th className="border px-4 py-2 text-left">Oracle</th>
              <th className="border px-4 py-2 text-left">PayPal</th>
              <th className="border px-4 py-2 text-left">Total weekly hours</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="border px-4 py-2">{row.week}</td>
                <td className="border px-4 py-2">{row.project === "Activation Blizzard" ? row.hours : "-"}</td>
                <td className="border px-4 py-2">{row.project === "General Motors" ? row.hours : "-"}</td>
                <td className="border px-4 py-2">{row.project === "Oracle" ? row.hours : "-"}</td>
                <td className="border px-4 py-2">{row.project === "PayPal" ? row.hours : "-"}</td>
                <td className="border px-4 py-2">18h 03m</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
