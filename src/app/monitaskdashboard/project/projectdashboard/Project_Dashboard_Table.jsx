"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Circle, Clock, ArrowDown, ArrowUp, ArrowRightCircle } from "lucide-react"; // Importing more icons for priority

// Mock Data
const initialProjectData = [
  {
    id: 1,
    name: "Activision Blizzard",
    key: "ActBli",
    status: "To Do",
    priority: "Lowest",
    lastWorked: "Never",
    totalTime: "0h 00m",
    created: "08/12/2021",
    members: 6,
  },
  {
    id: 2,
    name: "Cisco",
    key: "C",
    status: "To Do",
    priority: "Medium",
    lastWorked: "Never",
    totalTime: "0h 00m",
    created: "08/12/2021",
    members: 6,
  },
  {
    id: 3,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
  {
    id: 4,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
  {
    id: 5,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
  {
    id: 6,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
  {
    id: 7,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
  {
    id: 8,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
  {
    id: 9,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
  {
    id: 10,
    name: "fyp project",
    key: "FypPro",
    status: "In Progress",
    priority: "Highest",
    lastWorked: "Yesterday",
    totalTime: "2h 30m",
    created: "12/08/2024",
    members: 1,
  },
 
];

const ITEMS_PER_PAGE = 5;

const Project_Dashboard_Table = () => {
  const [projectData, setProjectData] = useState(initialProjectData);
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProject, setEditingProject] = useState(null);

  // Filtered data
  const filteredProjects = projectData.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterPriority !== "all" ? project.priority === filterPriority : true)
  );

  // Paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  // Delete Task
  const handleDelete = (id) => {
    const updatedProjects = projectData.filter((project) => project.id !== id);
    setProjectData(updatedProjects);
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

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#293863] hover:bg-[#293863]">
              <TableHead className="text-white">Project Name</TableHead>
              <TableHead className="text-white">Key</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Priority</TableHead>
              <TableHead className="text-white">Last Worked</TableHead>
              <TableHead className="text-white">Total Time</TableHead>
              <TableHead className="text-white">Created</TableHead>
              <TableHead className="text-white">Members</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  {editingProject?.id === project.id ? (
                    <Input
                      value={editingProject.name}
                      onChange={(e) =>
                        setEditingProject({
                          ...editingProject,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    project.name
                  )}
                </TableCell>
                <TableCell>{project.key}</TableCell>
                <TableCell>{renderStatusWithIcon(project.status)}</TableCell>
                <TableCell>{renderPriorityWithIcon(project.priority)}</TableCell>
                <TableCell>{project.lastWorked}</TableCell>
                <TableCell>{project.totalTime}</TableCell>
                <TableCell>{project.created}</TableCell>
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
                      onClick={() => handleDelete(project.id)}
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

export default Project_Dashboard_Table;
