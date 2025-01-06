"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const ProductivityTable = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (member) => {
    setExpandedRows((prev) =>
      prev.includes(member)
        ? prev.filter((row) => row !== member)
        : [...prev, member]
    );
  };

  const data = [
    {
      member: "[DEMO] Angelica Pickles",
      productive: "06h 11m / 98.82%",
      unproductive: "00h 00m / 0.00%",
      neutral: "00h 04m / 1.18%",
      details: [
        "Google Chrome: 04h 17m",
        "Visual Studio Code: 01h 16m",
        "Windows Explorer: 00h 56m",
        "Microsoft Teams: 00h 44m",
        "Microsoft Outlook: 00h 43m",
        "Microsoft Word: 00h 29m",
      ],
    },
    {
      member: "[DEMO] Betty DeVille",
      productive: "09h 29m / 96.22%",
      unproductive: "00h 00m / 0.00%",
      neutral: "00h 22m / 3.78%",
      details: ["Sublime Text: 00h 12m", "Lightshot: 00h 09m"],
    },
    {
      member: "[DEMO] Howard DeVille",
      productive: "04h 12m / 76.40%",
      unproductive: "00h 00m / 0.00%",
      neutral: "01h 18m / 23.60%",
      details: [],
    },
  ];

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Productivity</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Input type="date" className="w-full md:w-auto" />
        <Select>
          <SelectTrigger className="w-full md:w-auto">Apps</SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Apps</SelectItem>
            <SelectItem value="app1">App 1</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-auto">
            Member: All
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Members</SelectItem>
            <SelectItem value="member1">Member 1</SelectItem>
          </SelectContent>
        </Select>
        <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">
          More Actions
        </button>
      </div>

      {/* Overall Result */}
      <div className="flex items-center mb-6">
        <span className="mr-4">Overall result for users:</span>
        <div className="flex items-center w-full">
          <Progress value={91} className="w-full bg-green-500 h-2 mr-2" />
          <span>91%</span>
        </div>
        <div className="flex items-center w-full ml-4">
          <Progress value={9} className="w-full bg-red-500 h-2 mr-2" />
          <span>9%</span>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Member</th>
            <th className="border px-4 py-2 text-left">Productive</th>
            <th className="border px-4 py-2 text-left">Unproductive</th>
            <th className="border px-4 py-2 text-left">Neutral</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr
                className={`cursor-pointer hover:bg-gray-50 ${
                  expandedRows.includes(row.member) ? "bg-gray-100" : ""
                }`}
                onClick={() => toggleRow(row.member)}
              >
                <td className="border px-4 py-2">
                  {row.details.length > 0 && (
                    <button className="mr-2 text-blue-500 font-bold">
                      {expandedRows.includes(row.member) ? "-" : "+"}
                    </button>
                  )}
                  {row.member}
                </td>
                <td className="border px-4 py-2">{row.productive}</td>
                <td className="border px-4 py-2">{row.unproductive}</td>
                <td className="border px-4 py-2">{row.neutral}</td>
              </tr>
              {expandedRows.includes(row.member) && (
                <tr>
                  <td colSpan={4} className="border px-4 py-2">
                    <ul className="text-sm text-gray-700">
                      {row.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductivityTable;
