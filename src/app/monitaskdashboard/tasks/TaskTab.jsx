"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const TaskTab = () => {
  const [formData, setFormData] = useState({
    project: "",
    members: [],
    priority: "",
    status: "",
    dueDate: null,
    dueTime: "",
    originalEstimate: "",
    description: "",
  });

  const [statuses, setStatuses] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);

  // Fetch the statuses, priorities, members, and projects when the component mounts
  useEffect(() => {
    // Fetch statuses
    axios
      .get("http://localhost:8000/Dropdown/getStatuses")
      .then((response) => {
        setStatuses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching statuses:", error);
      });

    // Fetch priorities
    axios
      .get("http://localhost:8000/Dropdown/getPriorities")
      .then((response) => {
        setPriorities(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching priorities:", error);
      });

    // Fetch members
    axios
      .get("http://localhost:8000/User/getMembersList")
      .then((response) => {
        if (response.data.success && Array.isArray(response.data.data)) {
          setMembers(response.data.data);
        } else {
          setMembers([]); // Fallback to an empty array if the data structure is not as expected
        }
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });

    // Fetch projects
    axios
      .get("http://localhost:8000/project/getAllProjects")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProjects(response.data); // Set the project list from the response data
        } else {
          setProjects([]); // Fallback to an empty array if the data structure is not as expected
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the payload to match the required format
    const payload = {
      project: formData.project, // Project ID
      members: formData.members, // Array of member IDs
      priority: formData.priority, // Priority ID
      status: formData.status, // Status ID
      dueDate: formData.dueDate
        ? format(new Date(formData.dueDate), "yyyy-MM-dd") // Format dueDate to "yyyy-MM-dd"
        : null,
      dueTime: formData.dueTime, // Due time in "HH:mm" format
      originalEstimate: formData.originalEstimate, // Ensure originalEstimate is a number
      description: formData.description, // Task description
    };

    console.log("Payload being sent:", payload); // Log the payload to inspect

    try {
      const response = await axios.post(
        "http://localhost:8000/Task/CreateTask",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API response:", response.data);
      alert("Task added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add task. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="m-4">
      <h1>Add New Task</h1>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="project">Select Project</Label>
        <Select onValueChange={(value) => handleSelectChange("project", value)}>
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Project" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Projects</SelectLabel>
              {projects.map((project) => (
                <SelectItem key={project._id} value={project._id}>
                  {project.ProjectName} {/* Display project name */}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="members">User Assignees</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange("members", [...formData.members, value])
          }
        >
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Members" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Members</SelectLabel>
              {members.map((member) => (
                <SelectItem key={member._id} value={member._id}>
                  {`${member.first_name} ${member.last_name}`}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="description">Task Description</Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter task description"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="priority">Priority</Label>
        <Select
          onValueChange={(value) => handleSelectChange("priority", value)}
        >
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Priority</SelectLabel>
              {priorities.map((priority) => (
                <SelectItem key={priority.id} value={priority.id}>
                  {priority.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="status">Status</Label>
        <Select onValueChange={(value) => handleSelectChange("status", value)}>
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              {statuses.map((status) => (
                <SelectItem key={status.id} value={status.id}>
                  {status.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-sm items-center mt-3 gap-0">
        <Label htmlFor="dueDate">Due Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[300px] h-[30px] rounded-none justify-start text-left font-normal",
                !formData.dueDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2" />
              {formData.dueDate
                ? format(new Date(formData.dueDate), "MM/dd/yyyy")
                : "Select Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={formData.dueDate}
              onSelect={(date) => setFormData({ ...formData, dueDate: date })}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="dueTime">Due Time</Label>
        <Input
          id="dueTime"
          name="dueTime"
          value={formData.dueTime}
          onChange={handleChange}
          placeholder="Enter time (e.g., 15:30)"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="originalEstimate">Original Estimate (hours)</Label>
        <Input
          id="originalEstimate"
          name="originalEstimate"
          type="number"
          value={formData.originalEstimate}
          onChange={handleChange}
          placeholder="Enter estimate"
        />
      </div>

      <Button
        className="bg-[#5470CB] mt-4 mb-10 w-[300px] hover:bg-[#5470CB] h-8"
        type="submit"
      >
        Add Task
      </Button>
    </form>
  );
};

export default TaskTab;
