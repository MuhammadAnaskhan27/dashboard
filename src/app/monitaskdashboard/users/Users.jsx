"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const Users = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phoneNumber: "",
    position: "",
    employeeId: "",
    hireDate: "",
    additionalInformation: "", // Updated field name
    isLogin: false,
    projectCount: 1,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/User/CreateUser",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="position">Position</Label>
              <Input
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
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="Employee ID"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="hireDate">Hire Date</Label>
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
                      ? format(new Date(formData.hireDate), "MM/dd/yyyy")
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
              <Label htmlFor="additionalInformation">
                Additional Information
              </Label>
              <Textarea
                id="additionalInformation"
                name="additionalInformation"
                value={formData.additionalInformation}
                onChange={handleChange}
                placeholder="Type your message here."
              />
            </div>

            <div className="flex mt-4 items-center space-x-2">
              <Checkbox
                id="isLogin"
                name="isLogin"
                checked={formData.isLogin}
                onChange={handleChange}
              />
              <label htmlFor="isLogin" className="text-sm">
                Allow login to the monitask website
              </label>
            </div>
          </div>
        </div>
      </div>

      <Button className="mt-4 mb-10 w-[400px] h-8" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Users;
