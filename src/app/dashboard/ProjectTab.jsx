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

const ProjectTab = () => {
  const [date, setDate] = useState(null); // Fixed initialization of date state

  return (
    <div className="m-4">
      <h1>Add Project</h1>

      {/* First Input */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label className="text-[#5270D1]" htmlFor="email">
          Project Name
        </Label>
        <Input
          className="w-[300px] h-[30px] rounded-none"
          type="email"
          id="email"
        />
      </div>

      {/* Second Input */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="members">
          Members
        </Label>
        <Select>
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Nothing Selected" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Nothing Selected</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Third Input */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="teams">
          Teams
        </Label>
        <Select>
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Nothing Selected" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Nothing Selected</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Fourth Input */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="clients">
          Clients
        </Label>
        <Select>
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="Nothing Selected" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Nothing Selected</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Fifth Input */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="budget">
          Project Budget
        </Label>
        <Input
          className="w-[300px] h-[30px] rounded-none"
          type="text"
          id="budget"
        />
      </div>

      {/* Sixth Input */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label className="text-[#5270D1]" htmlFor="currency">
          Currency
        </Label>
        <Select>
          <SelectTrigger className="w-[300px] h-[30px] rounded-none">
            <SelectValue placeholder="USD ($)" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Nothing Selected</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Seventh Input */}
      <div className="flex w-full max-w-sm items-center gap-3 mt-3">
        <div>
          <Label className="text-[#5270D1]" htmlFor="priority">
            Priority
          </Label>
          <Select>
            <SelectTrigger className="w-[145px] h-[30px] rounded-none">
              <SelectValue placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Nothing Selected</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-[#5270D1]" htmlFor="status">
            Status
          </Label>
          <Select>
            <SelectTrigger className="w-[145px] h-[30px] rounded-none">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Nothing Selected</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Eighth Input */}

      <div className="grid w-full max-w-sm items-center mt-3 gap-0">
        <Label className="text-[#5270D1]" htmlFor="start-date">
          Start Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[300px] h-[30px] rounded-none justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2" />
              {date ? format(date, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid w-full max-w-sm items-center mt-3 gap-0">
        <Label className="text-[#5270D1]" htmlFor="end-date">
          End Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[300px] h-[30px] rounded-none justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2" />
              {date ? format(date, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Ninth Input */}

      <div className="grid w-full max-w-sm items-center mt-3 gap-0">
        <Label className="text-[#5270D1]" htmlFor="start-date mb-4 ">
          Due Date
        </Label>
        <Popover className="mt-20">
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[300px] h-[30px] rounded-none justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2" />
              {date ? format(date, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button className="bg-[#5470CB] mt-4 mb-10 w-[300px] hover:bg-[#5470CB] h-8 ">
        Add Project
      </Button>
    </div>
  );
};

export default ProjectTab;
