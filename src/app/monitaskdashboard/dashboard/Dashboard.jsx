"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock Data
const initialUsers = [
  {
    id: 1,
    name: "samar ali",
    status: "offline",
    team: "None",
    os: "Windows",
    location: "",
    lastWorked: "Never Logged In",
    screenshot: "No Screenshots Yet",
    timeToday: "00h 00m",
    activityToday: "0.00%",
    timeYesterday: "00h 00m",
    activityYesterday: "0.00%",
    timeLastWeek: "00h 00m",
    activityLastWeek: "0.00%",
  },
  {
    id: 2,
    name: "[DEMO] Howard DeVille",
    status: "online",
    team: "Developers Team",
    os: "Windows",
    location: "Singapore, Singapore",
    lastWorked: "Oracle",
    screenshot: "/images/oracle.png",
    timeToday: "03h 03m",
    activityToday: "92.16%",
    timeYesterday: "02h 17m",
    activityYesterday: "100.00%",
    timeLastWeek: "23h 27m",
    activityLastWeek: "88.73%",
  },
  {
    id: 3,
    name: "[DEMO] Betty DeVille",
    status: "online",
    team: "Marketing Team",
    os: "Mac",
    location: "United States, Seattle",
    lastWorked: "PayPal",
    screenshot: "/images/paypal.png",
    timeToday: "01h 50m",
    activityToday: "00.00%",
    timeYesterday: "03h 07m",
    activityYesterday: "00.00%",
    timeLastWeek: "26h 35m",
    activityLastWeek: "89.52%",
  },
  {
    id: 4,
    name: "[DEMO] Betty DeVille",
    status: "online",
    team: "Marketing Team",
    os: "Mac",
    location: "United States, Seattle",
    lastWorked: "PayPal",
    screenshot: "/images/paypal.png",
    timeToday: "01h 50m",
    activityToday: "00.00%",
    timeYesterday: "03h 07m",
    activityYesterday: "00.00%",
    timeLastWeek: "26h 35m",
    activityLastWeek: "89.52%",
  },
  {
    id: 5,
    name: "[DEMO] Betty DeVille",
    status: "online",
    team: "Marketing Team",
    os: "Mac",
    location: "United States, Seattle",
    lastWorked: "PayPal",
    screenshot: "/images/paypal.png",
    timeToday: "01h 50m",
    activityToday: "00.00%",
    timeYesterday: "03h 07m",
    activityYesterday: "00.00%",
    timeLastWeek: "26h 35m",
    activityLastWeek: "89.52%",
  },
  
];

const Dashboard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [osFilter, setOsFilter] = useState("All");

  // Filtered Users
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTeam = teamFilter === "All" || user.team === teamFilter;
    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;
    const matchesOs = osFilter === "All" || user.os === osFilter;
    return matchesSearch && matchesTeam && matchesStatus && matchesOs;
  });

  return (
    <div className="p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Live Dashboard</h1>
        <p className="text-gray-600">
          Add your first employee to start tracking their work activity.
        </p>
        <Button variant="default" className="mt-2">
          Invite Users
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-x-4 mb-4">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-48"
        />
        <Select onValueChange={setTeamFilter} value={teamFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Team: All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Team: All</SelectItem>
            <SelectItem value="Developers Team">Developers Team</SelectItem>
            <SelectItem value="Marketing Team">Marketing Team</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setStatusFilter} value={statusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status: All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Status: All</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setOsFilter} value={osFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Operating System: All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Operating System: All</SelectItem>
            <SelectItem value="Windows">Windows</SelectItem>
            <SelectItem value="Mac">Mac</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#293863]">
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Last Worked On</TableHead>
              <TableHead>Time Worked / Activity Today</TableHead>
              <TableHead>Yesterday</TableHead>
              <TableHead>Last 7 Days</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        user.status === "online"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    ></span>
                    <div>
                      <p className="font-bold">{user.name}</p>
                      <p className="text-sm text-gray-500">
                        {user.location || user.lastWorked}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {user.screenshot === "No Screenshots Yet" ? (
                    <p className="text-sm text-gray-500">{user.screenshot}</p>
                  ) : (
                    <img
                      src={user.screenshot}
                      alt={user.lastWorked}
                      className="w-16 h-16 object-cover"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <p>{user.timeToday}</p>
                  <p className="text-sm text-gray-500">{user.activityToday}</p>
                </TableCell>
                <TableCell>
                  <p>{user.timeYesterday}</p>
                  <p className="text-sm text-gray-500">
                    {user.activityYesterday}
                  </p>
                </TableCell>
                <TableCell>
                  <p>{user.timeLastWeek}</p>
                  <p className="text-sm text-gray-500">
                    {user.activityLastWeek}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
