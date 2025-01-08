"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Circle,
  Clock,
  ArrowDown,
  ArrowUp,
  ArrowRightCircle,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";

const ITEMS_PER_PAGE = 5;

const TaskDashboard = () => {
  const [taskData, setTaskData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:8000/Task/getAllTasks"
        );
        setTaskData(response.data); // Assuming the API returns an array of tasks
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Failed to load tasks. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Filtered data
  const filteredTasks = taskData.filter(
    (task) =>
      (task.taskName?.toLowerCase() || "").includes(search.toLowerCase()) && // Fix here
      (filterStatus !== "all" ? task.status === filterStatus : true)
  );

  // Paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredTasks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);

  // Delete Task
  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the API
      await axios.delete(`http://localhost:8000/Task/deleteTask/${id}`);
      // Update the local state by filtering out the deleted task
      const updatedTasks = taskData.filter((task) => task._id !== id);
      setTaskData(updatedTasks);
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Failed to delete task. Please try again.");
    }
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
    return status;
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

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

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
        <Link href="/monitaskdashboard/tasks">
          <Button variant="default">+ Add New Task</Button>
        </Link>
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
              <TableHead className="text-white"> Task Due Date</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Priority</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((task) => (
              <TableRow key={task._id}>
                <TableCell>{task.source}</TableCell>
                <TableCell>{task.description}</TableCell>
                {/* Check if task.project is not null or undefined */}
                <TableCell>
                  {task.project ? task.project.ProjectName : "No Project Name"}
                </TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>{renderStatusWithIcon(task.status)}</TableCell>
                <TableCell>{renderPriorityWithIcon(task.priority)}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(task._id)}
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
