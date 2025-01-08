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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Pencil, Trash2, ChevronLeft, ChevronRight, Save } from "lucide-react";
import {
  Circle,
  Clock,
  ArrowDown,
  ArrowUp,
  ArrowRightCircle,
} from "lucide-react"; // Importing more icons for priority

// Items per page for pagination
const ITEMS_PER_PAGE = 5;

const Project_Dashboard_Table = () => {
  const [projectData, setProjectData] = useState([]); // Initialize as an empty array
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from API
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/project/getAllProjects"
        );
        const data = await response.json();
        console.log("prj", data);
        setProjectData(data || []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching project data:", error);
        setProjectData([]); // Ensure fallback to an empty array on error
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProjectData();
  }, []);

  // Filtered data
  const filteredProjects = projectData.filter(
    (project) =>
      project?.name?.toLowerCase()?.includes(search.toLowerCase()) &&
      (filterPriority !== "all" ? project.priority === filterPriority : true)
  );

  // Paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  console.log("data", paginatedData);
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  // Delete Task
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/project/deleteProject/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Project deleted successfully!");
        // Update the project data by filtering out the deleted project
        setProjectData((prevProjects) =>
          prevProjects.filter((project) => project._id !== id)
        );
      } else {
        const errorData = await response.json();
        console.error(
          "Failed to delete project:",
          errorData.message || "Unknown error"
        );
        alert("Failed to delete project. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting the project. Please try again.");
    }
  };

  // Edit Task
  const handleEdit = (project) => {
    setEditingProject(project);
  };

  // Save Edited Task
  const handleSave = () => {
    setProjectData((prevData) =>
      prevData.map((proj) =>
        proj.id === editingProject.id ? { ...editingProject } : proj
      )
    );
    setEditingProject(null); // Exit edit mode
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
          placeholder="Search Projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Link href="/monitaskdashboard/project">
          <Button variant="default">+ Add New Project</Button>
        </Link>
        <Select
          onValueChange={(value) => setFilterPriority(value)}
          value={filterPriority}
        >
          <SelectTrigger className="w-[180px]">
            <span>
              {filterPriority === "all" ? "Filter by Priority" : filterPriority}
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Lowest">Lowest</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Highest">Highest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        // Table
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#293863] hover:bg-[#293863]">
                <TableHead className="text-white">Project Name</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Priority</TableHead>
                <TableHead className="text-white">End Date</TableHead>
                <TableHead className="text-white">Start Date</TableHead>
                <TableHead className="text-white">Due Date</TableHead>
                <TableHead className="text-white">Members</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectData.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.ProjectName}</TableCell>
                  <TableCell>{renderStatusWithIcon(project.status)}</TableCell>
                  <TableCell>
                    {renderPriorityWithIcon(project.priority)}
                  </TableCell>
                  <TableCell>{project.endDate}</TableCell>
                  <TableCell>{project.startDate}</TableCell>
                  <TableCell>{project.dueDate}</TableCell>
                  <TableCell>{project.members}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {editingProject?.id === project.id ? (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleSave}
                          title="Save"
                        >
                          <Save className="h-4 w-4 text-green-500" />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(project)}
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(project._id)} // Call handleDelete with project id
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
      )}

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

export default Project_Dashboard_Table;
