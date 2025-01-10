"use client";
import React, { useState, useEffect } from "react";
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
import { format } from "date-fns";
const ProjectTab = () => {
  const [formData, setFormData] = useState({
    ProjectName: "",
    members: [],
    clients: "",
    budget: "",
    currency: "",
    priority: "",
    status: "",
    startDate: "",
    endDate: "",
    dueDate: "",
    description: "",
  });

  const [statuses, setStatuses] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [members, setMembers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: Array.isArray(value) ? value : [value],
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/Dropdown/getStatuses")
      .then((response) => {
        setStatuses(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching statuses:", error);
      });

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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      startDate: formData.startDate
        ? format(new Date(formData.startDate), "yyyy-MM-dd")
        : null,
      endDate: formData.endDate
        ? format(new Date(formData.endDate), "yyyy-MM-dd")
        : null,
      dueDate: formData.dueDate
        ? format(new Date(formData.dueDate), "yyyy-MM-dd")
        : null,
      currency: formData.currency.join(),
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/project/createProject",
        JSON.stringify(payload),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("API response:", response.data);
      alert("Project added successfully!");
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
      alert("Failed to add project. Please try again.");
    }
  };

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <h1 className="mb-6 text-lg font-bold">Add Project</h1>

      {/* Project Name */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="ProjectName">Project Name</Label>
        <Input
          name="ProjectName"
          id="ProjectName"
          value={formData.ProjectName}
          onChange={handleChange}
        />
      </div>

      {/* Members */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="members">Members</Label>
        <Select
          multiple
          onValueChange={(value) => handleSelectChange("members", value)}
        >
          <SelectTrigger>
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

      {/* Other Fields */}
      {[
        { label: "Clients", name: "clients" },
        { label: "Budget", name: "budget", type: "number" },
        { label: "Start Date", name: "startDate", type: "date" },
        { label: "End Date", name: "endDate", type: "date" },
        { label: "Due Date", name: "dueDate", type: "date" },
        { label: "Description", name: "description" },
      ].map(({ label, name, type = "text" }) => (
        <div
          key={name}
          className="grid w-full max-w-sm items-center gap-1.5 mt-3"
        >
          <Label htmlFor={name}>{label}</Label>
          <Input
            name={name}
            id={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
          />
        </div>
      ))}

      {/* Dropdown Fields */}
      {[
        { label: "Currency", name: "currency", options: ["USD", "EUR", "INR"] },
        { label: "Priority", name: "priority", options: priorities },
        { label: "Status", name: "status", options: statuses },
      ].map(({ label, name, options }) => (
        <div
          key={name}
          className="grid w-full max-w-sm items-center gap-1.5 mt-3"
        >
          <Label htmlFor={name}>{label}</Label>
          <Select onValueChange={(value) => handleSelectChange(name, value)}>
            <SelectTrigger>
              <SelectValue placeholder={`Select ${label}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {options.map((option) =>
                  typeof option === "string" ? (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ) : (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      ))}

      <Button type="submit" className="mt-6 bg-blue-500">
        Add Project
      </Button>
    </form>
  );
};

export default ProjectTab;
