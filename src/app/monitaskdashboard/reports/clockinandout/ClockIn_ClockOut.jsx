"use client";
import React, { useState } from "react";

const ClockInClockOut = () => {
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: "2024-12-16",
    end: "2024-12-22",
  });

  const [filters, setFilters] = useState({
    member: "All",
    team: "All",
    timezone: "Member",
    displayOptions: "Show worked time, Show clock in/out",
  });

  const sampleData = [
    {
      member: "[DEMO] Howard DeVille",
      team: "Team A",
      timezone: "Member",
      entries: [
        {
          date: "2024-12-16",
          clockIn: "6:43 AM",
          clockOut: "7:16 PM",
          workedTime: "04h 20m",
          details: [
            "Start tracking: 6:43 AM",
            "End tracking: 8:00 AM",
            "Start tracking: 4:13 PM",
            "End tracking: 5:42 PM",
            "Idle time: 5:42 PM",
          ],
        },
        {
          date: "2024-12-17",
          clockIn: "--",
          clockOut: "--",
          workedTime: "--",
          details: [],
        },
      ],
    },
    {
      member: "[DEMO] Angelica Pickles",
      team: "Team B",
      timezone: "UTC",
      entries: [
        {
          date: "2024-12-16",
          clockIn: "6:43 AM",
          clockOut: "11:47 AM",
          workedTime: "03h 09m",
          details: [
            "Start tracking: 6:43 AM",
            "End tracking: 9:00 AM",
            "Start tracking: 9:30 AM",
            "End tracking: 11:47 AM",
          ],
        },
      ],
    },
    {
      member: "[DEMO] Tommy Pickles",
      team: "Team C",
      timezone: "UTC",
      entries: [
        {
          date: "2024-12-16",
          clockIn: "6:50 AM",
          clockOut: "9:30 AM",
          workedTime: "02h 40m",
          details: [
            "Start tracking: 6:50 AM",
            "End tracking: 8:30 AM",
            "Start tracking: 8:50 AM",
            "End tracking: 9:30 AM",
          ],
        },
      ],
    },
  ];

  // Filter the data based on user inputs
  const filteredData = sampleData.filter((memberData) => {
    const withinDateRange = memberData.entries.some((entry) => {
      const entryDate = new Date(entry.date);
      const startDate = new Date(selectedDateRange.start);
      const endDate = new Date(selectedDateRange.end);
      return entryDate >= startDate && entryDate <= endDate;
    });

    const matchesMember =
      filters.member === "All" || memberData.member.includes(filters.member);

    const matchesTeam =
      filters.team === "All" || memberData.team.includes(filters.team);

    const matchesTimezone =
      filters.timezone === "All" || memberData.timezone.includes(filters.timezone);

    return withinDateRange && matchesMember && matchesTeam && matchesTimezone;
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const handleDateChange = (key, value) => {
    setSelectedDateRange((prevDateRange) => ({ ...prevDateRange, [key]: value }));
  };

  return (
    <div className="p-4">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <h2 className="text-xl font-bold mb-4">Clock-in / Clock-out</h2>

        {/* First Row of Filters */}
        <div className="flex space-x-4">
          <select
            className="border rounded-md px-4 py-2"
            value={filters.member}
            onChange={(e) => handleFilterChange("member", e.target.value)}
          >
            <option value="All">Member: All</option>
            <option value="Howard DeVille">Howard DeVille</option>
            <option value="Angelica Pickles">Angelica Pickles</option>
            <option value="Tommy Pickles">Tommy Pickles</option>
          </select>
          <select
            className="border rounded-md px-4 py-2"
            value={filters.team}
            onChange={(e) => handleFilterChange("team", e.target.value)}
          >
            <option value="All">Teams: All</option>
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
          </select>
          <select
            className="border rounded-md px-4 py-2"
            value={filters.timezone}
            onChange={(e) => handleFilterChange("timezone", e.target.value)}
          >
            <option value="All">Timezone: Member</option>
            <option value="Member">Member</option>
            <option value="UTC">UTC</option>
          </select>
        </div>

        {/* Second Row of Filters */}
        <div className="flex space-x-4 mt-4">
          <select
            className="border rounded-md px-4 py-2"
            value={filters.displayOptions}
            onChange={(e) =>
              handleFilterChange("displayOptions", e.target.value)
            }
          >
            <option>Show worked time, Show clock in/out</option>
            <option>Hide worked time</option>
          </select>
          <div className="flex space-x-2 items-center">
            <input
              type="date"
              className="border rounded-md px-4 py-2"
              value={selectedDateRange.start}
              onChange={(e) => handleDateChange("start", e.target.value)}
            />
            <span>to</span>
            <input
              type="date"
              className="border rounded-md px-4 py-2"
              value={selectedDateRange.end}
              onChange={(e) => handleDateChange("end", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Time Entry Details */}
      <div className="bg-white p-4 rounded-md shadow">
        {filteredData.map((memberData, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-lg font-bold text-blue-500">
              {memberData.member}
            </h3>
            <div className="overflow-auto border rounded-md">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Clock-in</th>
                    <th className="px-4 py-2 border">Clock-out</th>
                    <th className="px-4 py-2 border">Worked Time</th>
                    <th className="px-4 py-2 border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {memberData.entries.map((entry, idx) => (
                    <tr
                      key={idx}
                      className={`${
                        idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2 border">{entry.date}</td>
                      <td className="px-4 py-2 border">{entry.clockIn}</td>
                      <td className="px-4 py-2 border">{entry.clockOut}</td>
                      <td className="px-4 py-2 border">{entry.workedTime}</td>
                      <td className="px-4 py-2 border">
                        {entry.details.length > 0 ? (
                          <button className="text-blue-500">
                            Show time details for user
                          </button>
                        ) : (
                          "--"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClockInClockOut;
