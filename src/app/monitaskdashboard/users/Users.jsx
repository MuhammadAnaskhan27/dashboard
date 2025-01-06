"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Textarea } from "@/components/ui/textarea";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";

const Users = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    employeeId: "",
    timeZone: "",
    projects: "",
    hireDate: null,
    additionalInfo: "",
    allowLogin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/User/CreateUser",
        formData
      );
      console.log("API response:", response.data);
      alert("User added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add user. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-4">
        <h1>Add New User</h1>

        <div className="flex border-2 p-4 justify-around">
          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label className="text-[#5270D1]" htmlFor="firstName">
                First Name
              </Label>
              <Input
                className="w-[300px] h-[30px] rounded-none"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label className="text-[#5270D1]" htmlFor="lastName">
                Last Name
              </Label>
              <Input
                className="w-[300px] h-[30px] rounded-none"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label className="text-[#5270D1]" htmlFor="email">
                Email
              </Label>
              <Input
                className="w-[300px] h-[30px] rounded-none"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
              <Label className="text-[#5270D1]" htmlFor="phoneNumber">
                Phone Number
              </Label>
              <Input
                className="w-[300px] h-[30px] rounded-none"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label className="text-[#5270D1]" htmlFor="position">
                Position
              </Label>
              <Input
                className="w-[300px] h-[30px] rounded-none"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
              />
            </div>
          </div>

          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label className="text-[#5270D1]" htmlFor="employeeId">
                Employee ID
              </Label>
              <Input
                className="w-[300px] h-[30px] rounded-none"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="Employee ID"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label className="text-[#5270D1]" htmlFor="hireDate">
                Hire Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[300px] h-[30px] rounded-none justify-start text-left font-normal",
                      !formData.hireDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2" />
                    {formData.hireDate
                      ? format(formData.hireDate, "MM/dd/yyyy")
                      : "Select Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.hireDate}
                    onSelect={(date) =>
                      setFormData({ ...formData, hireDate: date })
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label className="text-[#5270D1]" htmlFor="additionalInfo">
                Additional Information
              </Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Type your message here."
              />
            </div>

            <div className="flex mt-4 items-center space-x-2">
              <Checkbox
                id="allowLogin"
                name="allowLogin"
                checked={formData.allowLogin}
                onChange={handleChange}
              />
              <label
                htmlFor="allowLogin"
                className="text-sm text-[#5471CC] font-medium leading-none"
              >
                Allow login to the monitask website
              </label>
            </div>
          </div>
        </div>
      </div>

      <Button
        className="bg-[#5470CB] relative left-80 mt-4 mb-10 w-[400px] hover:bg-[#5470CB] h-8"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Users;
