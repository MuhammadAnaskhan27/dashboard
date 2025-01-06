"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, ChevronLeft, ChevronRight, Save } from "lucide-react";
import { Circle, Clock, ArrowDown, ArrowUp, ArrowRightCircle } from "lucide-react"; // Priority icons
import { Select,SelectTrigger,SelectContent,SelectItem } from "@/components/ui/select";
// Mock Data
const initialTaskData = [
  {
    id: 1,
    source: "Monitask",
    taskName: "[DEMO] Default",
    projectName: "fyp project",
    lastWorkedOn: "12/08/2024",
    status: "To Do",
    priority: "Medium",
  },
  {
    id: 2,
    source: "Monitask",
    taskName: "[DEMO] Update SystemConfiguration table",
    projectName: "PayPal",
    lastWorkedOn: "Never",
    status: "To Do",
    priority: "Medium",
  },
  {
    id: 3,
    source: "Monitask",
    taskName: "[DEMO] Install request processor",
    projectName: "PayPal",
    lastWorkedOn: "Never",
    status: "In Progress",
    priority: "High",
  },
  // More mock data...
];

const ITEMS_PER_PAGE = 5;

const TaskDashboard = () => {
  const [taskData, setTaskData] = useState(initialTaskData);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingTask, setEditingTask] = useState(null);

  // Filtered data
  const filteredTasks = taskData.filter(
    (task) =>
      task.taskName.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus !== "all" ? task.status === filterStatus : true)
  );

  // Paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredTasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);

  // Delete Task
  const handleDelete = (id) => {
    const updatedTasks = taskData.filter((task) => task.id !== id);
    setTaskData(updatedTasks);
  };

  // Render Status with Icons
  const renderStatusWithIcon = (status) => {
    if (status === "To Do") {
      return (
        <div className="flex items-center">
          <Circle className="text-blue-500 h-5 w-5 mr-2" /> To Do
        </div>
      );
    } else if (status === "In Progress") {
      return (
        <div className="flex items-center">
          <Clock className="text-yellow-500 h-5 w-5 mr-2" /> In Progress
        </div>
      );
    }
    return status; // For other statuses
  };

  // Render Priority with Icons
  const renderPriorityWithIcon = (priority) => {
    switch (priority) {
      case "Lowest":
        return (
          <div className="flex items-center">
            <ArrowDown className="text-gray-500 h-5 w-5 mr-2" /> Lowest
          </div>
        );
      case "Low":
        return (
          <div className="flex items-center">
            <ArrowDown className="text-blue-500 h-5 w-5 mr-2" /> Low
          </div>
        );
      case "Medium":
        return (
          <div className="flex items-center">
            <ArrowRightCircle className="text-orange-500 h-5 w-5 mr-2" /> Medium
          </div>
        );
      case "High":
        return (
          <div className="flex items-center">
            <ArrowUp className="text-red-500 h-5 w-5 mr-2" /> High
          </div>
        );
      case "Highest":
        return (
          <div className="flex items-center">
            <ArrowUp className="text-darkRed-500 h-5 w-5 mr-2" /> Highest
          </div>
        );
      default:
        return priority;
    }
  };

  return (
    <div className="p-4">
      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search Tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Select
          onValueChange={(value) => setFilterStatus(value)}
          value={filterStatus}
        >
          <SelectTrigger className="w-[180px]">
            <span>
              {filterStatus === "all" ? "Filter by Status" : filterStatus}
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="To Do">To Do</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Done">Done</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#293863] hover:bg-[#293863]">
              <TableHead className="text-white">Source</TableHead>
              <TableHead className="text-white">Task Name</TableHead>
              <TableHead className="text-white">Project Name</TableHead>
              <TableHead className="text-white">Last Worked On</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Priority</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.source}</TableCell>
                <TableCell>{task.taskName}</TableCell>
                <TableCell>{task.projectName}</TableCell>
                <TableCell>{task.lastWorkedOn}</TableCell>
                <TableCell>{renderStatusWithIcon(task.status)}</TableCell>
                <TableCell>{renderPriorityWithIcon(task.priority)}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(task.id)}
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TaskDashboard;
