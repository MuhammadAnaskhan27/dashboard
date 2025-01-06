"use client";
import React, { useState } from "react";

const TimeEntryDetails = () => {
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: "12/15/2024",
    end: "12/22/2024",
  });

  const [filters, setFilters] = useState({
    groupBy: "Member",
    member: "All",
    project: "All",
    team: "All",
    displayOptions: "Show Tasks",
    sortBy: "Activity: High to Low",
  });

  const sampleData = [
    {
      member: "[DEMO] Howard DeVille",
      timezone: "Pakistan Standard Time",
      entries: [
        {
          date: "12/16/2024",
          project: "Activision Blizzard",
          task: "Firewall",
          activity: "00.00%",
          hoursWorked: "01h 00m",
        },
        {
          date: "12/16/2024",
          project: "General Motors",
          task: "Install the history server.",
          activity: "100.00%",
          hoursWorked: "01h 17m",
        },
        {
          date: "12/17/2024",
          project: "Oracle",
          task: "Associate tasks and URLs with object types.",
          activity: "92.16%",
          hoursWorked: "03h 03m",
        },
      ],
    },
    {
      member: "[DEMO] Angelica Pickles",
      timezone: "Pakistan Standard Time",
      entries: [
        {
          date: "12/16/2024",
          project: "Activision Blizzard",
          task: "Security changes as required.",
          activity: "77.78%",
          hoursWorked: "01h 17m",
        },
        {
          date: "12/16/2024",
          project: "General Motors",
          task: "Perform discovery, if required.",
          activity: "00.00%",
          hoursWorked: "02h 52m",
        },
      ],
    },
    {
      member: "[DEMO] Tommy Pickles",
      timezone: "Pakistan Standard Time",
      entries: [
        {
          date: "12/16/2024",
          project: "Activision Blizzard",
          task: "Security changes as required.",
          activity: "33.33%",
          hoursWorked: "01h 17m",
        },
        {
          date: "12/16/2024",
          project: "General Motors",
          task: "Verify the event flow.",
          activity: "00.00%",
          hoursWorked: "02h 40m",
        },
      ],
    },
    {
      member: "[DEMO] Susie Carmichael",
      timezone: "Pakistan Standard Time",
      entries: [
        {
          date: "12/17/2024",
          project: "Intel",
          task: "Optimize the circuit design.",
          activity: "89.50%",
          hoursWorked: "03h 15m",
        },
        {
          date: "12/18/2024",
          project: "Microsoft",
          task: "Develop API integrations.",
          activity: "78.00%",
          hoursWorked: "02h 45m",
        },
      ],
    },
    {
      member: "[DEMO] Chuckie Finster",
      timezone: "Pakistan Standard Time",
      entries: [
        {
          date: "12/19/2024",
          project: "Apple",
          task: "Resolve UI/UX bugs.",
          activity: "67.80%",
          hoursWorked: "04h 30m",
        },
        {
          date: "12/20/2024",
          project: "Tesla",
          task: "Analyze battery performance.",
          activity: "95.00%",
          hoursWorked: "05h 00m",
        },
      ],
    },
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const handleDateChange = (key, value) => {
    setSelectedDateRange((prevDateRange) => ({
      ...prevDateRange,
      [key]: value,
    }));
  };

  const filteredData = sampleData.filter((memberData) => {
    const memberMatch =
      filters.member === "All" || memberData.member.includes(filters.member);
    const entriesMatch = memberData.entries.filter((entry) => {
      const projectMatch =
        filters.project === "All" || entry.project === filters.project;
      return projectMatch;
    });
    return memberMatch && entriesMatch.length > 0;
  });
  

  return (
    <div className="p-4">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="space-y-4">
          {/* First Row */}
          <div className="flex space-x-4">
            <select
              className="border rounded-md px-4 py-2"
              value={filters.groupBy}
              onChange={(e) => handleFilterChange("groupBy", e.target.value)}
            >
              <option>Group by: Member</option>
              <option>Group by: Project</option>
            </select>
            <select
              className="border rounded-md px-4 py-2"
              value={filters.member}
              onChange={(e) => handleFilterChange("member", e.target.value)}
            >
              <option>Member: All</option>
              <option>Howard DeVille</option>
              <option>Angelica Pickles</option>
              <option>Tommy Pickles</option>
              <option>Susie Carmichael</option>
              <option>Chuckie Finster</option>
            </select>
            <select
              className="border rounded-md px-4 py-2"
              value={filters.project}
              onChange={(e) => handleFilterChange("project", e.target.value)}
            >
              <option>Projects: All</option>
              <option>Activision Blizzard</option>
              <option>General Motors</option>
              <option>Oracle</option>
              <option>Intel</option>
              <option>Microsoft</option>
              <option>Apple</option>
              <option>Tesla</option>
            </select>
            <select
              className="border rounded-md px-4 py-2"
              value={filters.team}
              onChange={(e) => handleFilterChange("team", e.target.value)}
            >
              <option>Teams: All</option>
            </select>
          </div>

          {/* Second Row */}
          <div className="flex space-x-4">
            <select
              className="border rounded-md px-4 py-2"
              value={filters.displayOptions}
              onChange={(e) =>
                handleFilterChange("displayOptions", e.target.value)
              }
            >
              <option>Display options: Show Tasks</option>
              <option>Hide Tasks</option>
            </select>
            <select
              className="border rounded-md px-4 py-2"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            >
              <option>Sort by: Activity: High to Low</option>
              <option>Sort by: Activity: Low to High</option>
            </select>
            <input
              type="text"
              className="border rounded-md px-4 py-2"
              value={`${selectedDateRange.start} - ${selectedDateRange.end}`}
              readOnly
            />
            <button className="border rounded-md px-4 py-2">
              More Actions
            </button>
          </div>
        </div>
      </div>

      {/* Time Entry Details Section */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-xl font-bold mb-4">Time Entry Details</h2>
        {filteredData.map((memberData, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-lg font-bold text-blue-500">
              {memberData.member}
            </h3>
            <p className="text-gray-500 text-sm">
              Timezone: {memberData.timezone}
            </p>
            <div className="mt-4 border rounded-md">
              <div className="bg-gray-100 p-4 font-bold grid grid-cols-5 gap-4">
                <span>Date</span>
                <span>Project</span>
                <span>Task</span>
                <span>Activity</span>
                <span>Hours Worked</span>
              </div>
              {memberData.entries.map((entry, idx) => (
                <div
                  key={idx}
                  className={`p-4 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } grid grid-cols-5 gap-4`}
                >
                  <span>{entry.date}</span>
                  <span>{entry.project}</span>
                  <span>{entry.task}</span>
                  <span>{entry.activity}</span>
                  <span>{entry.hoursWorked}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeEntryDetails;
