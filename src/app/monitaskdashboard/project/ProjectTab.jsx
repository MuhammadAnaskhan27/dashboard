"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";

const ProjectTab = () => {
  const [formData, setFormData] = useState({
    ProjectName: "",
    members: ["677c13696118888a6e34844c"],
    clients: "",
    budget: "",
    currency: "",
    priority: "677b0234c2030fe722543ba5",
    status: "677b0197c2030fe722543b96",
    startDate: "",
    endDate: "",
    dueDate: "",
    description: "",
  });

  const [dropdowns, setDropdowns] = useState({
    priorities: [],
    statuses: [],
    members: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const fetchDropdowns = async () => {
    try {
      const [priorityResponse, statusResponse, membersResponse] =
        await Promise.all([
          axios.post("http://localhost:8000/Dropdown/getPriorities"),
          axios.post("http://localhost:8000/Dropdown/getStatuses"),
          axios.post("http://localhost:8000/User/getMembersList"),
        ]);

      setDropdowns({
        priorities: priorityResponse.data || "677b0234c2030fe722543ba5",
        statuses: statusResponse.data || "677b0197c2030fe722543b96",
        members: membersResponse.data || "677c13696118888a6e34844c",
      });
    } catch (error) {
      console.error("Error fetching dropdowns:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      // Send the POST request with headers
      await axios.post(
        "http://localhost:8000/project/createProject",
        formData,
        { headers }
      );
      alert("Project added successfully!");

      // Reset the form data after successful submission
      setFormData({
        ProjectName: "",
        members: [],
        clients: "",
        budget: "",
        currency: "",
        priority: "",
        status: "",
        description: "",
        startDate: "",
        endDate: "",
        dueDate: "",
      });
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project.");
    }
  };

  React.useEffect(() => {
    fetchDropdowns();
  }, []);

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <h1 className="mb-6 text-lg font-bold">Add Project</h1>

      {/* Project Name */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="ProjectName">
          Project Name
        </Label>
        <Input
          name="ProjectName"
          id="ProjectName"
          className="w-[300px] h-[30px] rounded-none"
          value={formData.ProjectName}
          onChange={handleChange}
        />
      </div>

      {/* Members */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="members">
          Members
        </Label>
        <Select
          onValueChange={(value) =>
            setFormData((prevData) => ({
              ...prevData,
              members: [...prevData.members, value],
            }))
          }
        >
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Members" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Available Members</SelectLabel>
              {dropdowns.members.map((member) => (
                <SelectItem key={member._id} value={member._id}>
                  {member.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Clients */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="clients">
          Clients
        </Label>
        <Input
          name="clients"
          id="clients"
          className="w-[300px] h-[30px] rounded-none"
          value={formData.clients}
          onChange={handleChange}
        />
      </div>

      {/* Budget */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="budget">
          Budget
        </Label>
        <Input
          name="budget"
          id="budget"
          type="number"
          className="w-[300px] h-[30px] rounded-none"
          value={formData.budget}
          onChange={handleChange}
        />
      </div>

      {/* Currency */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="currency">
          Currency
        </Label>
        <Select
          onValueChange={(value) => handleSelectChange("currency", value)}
        >
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
            <SelectItem value="INR">INR</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Priority */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="priority">
          Priority
        </Label>
        <Select
          onValueChange={(value) => handleSelectChange("priority", value)}
        >
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Priority" />
          </SelectTrigger>
          <SelectContent>
            {dropdowns.priorities.map((priority) => (
              <SelectItem key={priority._id} value={priority._id}>
                {priority.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Status */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="status">
          Status
        </Label>
        <Select onValueChange={(value) => handleSelectChange("status", value)}>
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            {dropdowns.statuses.map((status) => (
              <SelectItem key={status._id} value={status._id}>
                {status.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Start Date */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="startDate">
          Start Date
        </Label>
        <Input
          type="date"
          name="startDate"
          id="startDate"
          className="w-[300px] h-[30px] rounded-none"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>

      {/* End Date */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="endDate">
          End Date
        </Label>
        <Input
          type="date"
          name="endDate"
          id="endDate"
          className="w-[300px] h-[30px] rounded-none"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>

      {/* Due Date */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="dueDate">
          Due Date
        </Label>
        <Input
          type="date"
          name="dueDate"
          id="dueDate"
          className="w-[300px] h-[30px] rounded-none"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      {/* Description */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="description">
          Description
        </Label>
        <Input
          name="description"
          id="description"
          className="w-[300px] h-[100px] rounded-none"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="mt-6 w-[300px] bg-[#5270D1]">
        Add Project
      </Button>
    </form>
  );
};

export default ProjectTab;
