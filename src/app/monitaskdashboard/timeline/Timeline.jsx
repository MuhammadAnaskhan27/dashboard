"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { PieChart } from "react-minimal-pie-chart";

const UserActivityDashboard = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());
  const [activeTab, setActiveTab] = useState("application");

  // Sample data
  const sampleData = {
    appTime: [
      { app: "Google Chrome", time: "06h 20m", percent: 51.22 },
      { app: "Slack", time: "02h 34m", percent: 20.76 },
      { app: "Windows Explorer", time: "01h 15m", percent: 10.12 },
    ],
    internetTime: [
      { category: "Web Browsing", time: "04h 30m", percent: 60 },
      { category: "Social Media", time: "01h 50m", percent: 25 },
      { category: "Emails", time: "00h 40m", percent: 15 },
    ],
    screenshots: [
      { time: "3:00 AM", src: "/assets/screenshot1.jpg", progress: 80 },
      { time: "3:10 AM", src: "/assets/screenshot2.jpg", progress: 60 },
      { time: "3:20 AM", src: "/assets/screenshot3.jpg", progress: 40 },
    ],
  };

  // Helper to get current week's dates
  function getCurrentWeek() {
    const today = new Date();
    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay())
    );
    return Array.from({ length: 7 }).map((_, idx) => {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + idx);
      return date;
    });
  }

  const changeWeek = (direction) => {
    const newStartDate = new Date(currentWeek[0]);
    newStartDate.setDate(newStartDate.getDate() + direction * 7);
    setCurrentWeek(
      Array.from({ length: 7 }).map((_, idx) => {
        const date = new Date(newStartDate);
        date.setDate(date.getDate() + idx);
        return date;
      })
    );
  };

  const changeSelectedDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="p-4">
      {/* Timeline Navigation */}
      <div className="bg-white p-4 rounded-md shadow flex items-center justify-between mb-4">
        <button
          className="text-gray-600 px-4 py-2 border rounded-md"
          onClick={() => changeWeek(-1)}
        >
          &larr;
        </button>
        <div className="flex items-center space-x-4 overflow-x-auto">
          {currentWeek.map((day, idx) => (
            <div
              key={idx}
              className={`text-center cursor-pointer ${
                day.toDateString() === selectedDay.toDateString()
                  ? "text-blue-500 font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => changeSelectedDay(day)}
            >
              <p>{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][idx]}</p>
              <p>{day.getDate()}</p>
            </div>
          ))}
        </div>
        <button
          className="text-gray-600 px-4 py-2 border rounded-md"
          onClick={() => changeWeek(1)}
        >
          &rarr;
        </button>
      </div>
      {/* Selected Date */}
      <div className="mt-4 text-center mb-4 text-gray-700 font-bold">
        Selected Date: {selectedDay.toDateString()}
      </div>
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-500 p-4 rounded-md text-white">
        <div>
          <h2 className="text-xl font-bold">[DEMO] Howard DeVille</h2>
          <p className="text-sm">Singapore, Singapore</p>
          <p className="text-sm text-green-300">● Online</p>
        </div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
          Add Manual Time
        </button>
      </div>
      {/* Stats and Tabs */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Total Time and Inactive Time */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 flex justify-center gap-36 p-4 rounded-md text-center">
            <div>
              <h3 className="text-lg font-bold">05h 12m</h3>
              <p className="text-sm text-gray-500">Total Time Today</p>
              <h3 className="text-lg font-bold">01h 47m</h3>
              <p className="text-sm text-gray-500">Inactive Time</p>
              <h3 className="text-lg font-bold">00.00% </h3>
              <p className="text-sm text-gray-500">Active Today</p>
              <p className="text-sm text-gray-500">160 screenshots</p>
            </div>

            <div>
              <h3 className="text-lg font-bold">05h 12m</h3>
              <p className="text-sm text-gray-500">Total Time Today</p>
              <h3 className="text-lg font-bold">01h 47m</h3>
              <p className="text-sm text-gray-500">Inactive Time</p>
              <h3 className="text-lg font-bold">00.00% </h3>
              <p className="text-sm text-gray-500">Active Today</p>
              <p className="text-sm text-gray-500">160 screenshots</p>
            </div>
          </div>
        </div>

        {/* Tabs for Application and Internet Time */}
        <div className="bg-white p-4 rounded-md shadow">
          <div className="flex border-b">
            <button
              className={`flex-1 p-2 ${
                activeTab === "application"
                  ? "border-blue-500 text-blue-500 border-b-2"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("application")}
            >
              Application Time
            </button>
            <button
              className={`flex-1 p-2 ${
                activeTab === "internet"
                  ? "border-blue-500 text-blue-500 border-b-2"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("internet")}
            >
              Internet Time
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "application" ? (
              <ul className="space-y-2">
                {sampleData.appTime.map((app, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{app.app}</span>
                    <span>
                      {app.time} ({app.percent}%)
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2">
                {sampleData.internetTime.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.category}</span>
                    <span>
                      {item.time} ({item.percent}%)
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <h3 className="text-lg font-bold mb-4">Select hour</h3>
      <div className="mt-4 bg-white p-4 rounded-md shadow">
        <div className="grid grid-cols-3 gap-4">
          {sampleData.screenshots.map((screenshot, idx) => (
            <div key={idx} className="flex border-r-2 flex-col items-center">
              <img
                src={screenshot.src}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-md"
              />
              <p className="text-sm text-gray-500 mt-2">{screenshot.time}</p>
              <div className="flex flex-col items-center mt-2">
                <PieChart
                  data={[
                    {
                      title: "Progress",
                      value: screenshot.progress,
                      color: "#4CAF50",
                    },
                    {
                      title: "Remaining",
                      value: 100 - screenshot.progress,
                      color: "#ddd",
                    },
                  ]}
                  className="w-16 h-16"
                />
                <p className="text-sm font-bold text-gray-700 mt-2">
                  {screenshot.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4">Select hour</h3>
      <div className="mt-4 bg-white p-4 rounded-md shadow">
        <div className="grid grid-cols-3 gap-4">
          {sampleData.screenshots.map((screenshot, idx) => (
            <div key={idx} className="flex border-r-2 flex-col items-center">
              <img
                src={screenshot.src}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-md"
              />
              <p className="text-sm text-gray-500 mt-2">{screenshot.time}</p>
              <div className="flex flex-col items-center mt-2">
                <PieChart
                  data={[
                    {
                      title: "Progress",
                      value: screenshot.progress,
                      color: "#4CAF50",
                    },
                    {
                      title: "Remaining",
                      value: 100 - screenshot.progress,
                      color: "#ddd",
                    },
                  ]}
                  className="w-16 h-16"
                />
                <p className="text-sm font-bold text-gray-700 mt-2">
                  {screenshot.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4">Select Hour</h3>
      <div className="mt-4 bg-white p-4 rounded-md shadow">
        <div className="grid grid-cols-3 gap-4">
          {sampleData.screenshots.map((screenshot, idx) => (
            <div key={idx} className="flex border-r-2 flex-col items-center">
              <img
                src={screenshot.src}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-md"
              />
              <p className="text-sm text-gray-500 mt-2">{screenshot.time}</p>
              <div className="flex flex-col items-center mt-2">
                <PieChart
                  data={[
                    {
                      title: "Progress",
                      value: screenshot.progress,
                      color: "#4CAF50",
                    },
                    {
                      title: "Remaining",
                      value: 100 - screenshot.progress,
                      color: "#ddd",
                    },
                  ]}
                  className="w-16 h-16"
                />
                <p className="text-sm font-bold text-gray-700 mt-2">
                  {screenshot.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserActivityDashboard;
