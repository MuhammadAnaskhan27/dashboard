"use client";
import Image from "next/image";
import Logo from "../../../assets/logo.png";

import { FiLogOut } from "react-icons/fi"; // Exit Icon
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import Link from "next/link";

const frameworks = [
  {
    value: "United States",
    label: "United States",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "Pakistan",
    label: "Pakistan",
  },
];

const Monitask = () => {
  const [open, setOpen] = useState("false");
  const [value, setValue] = useState("");
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-[#F6F9FE]">
        <Button className="absolute top-4 right-4 flex items-center  text-white bg-[#8E9BB3] hover:bg-[#8E9BB3] ">
          <span>Logout</span>
          <FiLogOut size={20} />
        </Button>

        <div className="flex items-center justify-center mt-3  ">
          <div className="p-4 flex flex-col items-center">
            {/* <Image src={Logo} alt="Logo" className="mb-8" /> */}
            <h1 className="font-bold text-3xl mb-4 ">Raqeeb</h1>
            <Card className="w-[650px]">
              <CardHeader>
                <CardTitle className="border-b-2 pb-2 text-[#697094] text-md ">
                  Welcome to Raqeeb!
                </CardTitle>
                <h1 className="pt-4">Fill the fields below and 'Continue'.</h1>
              </CardHeader>

              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Input
                        className="text-[#A5A5A5]"
                        id="name"
                        placeholder="Company name (recommended)"
                      />
                    </div>
                    {/* first popover */}
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-[#A5A5A5]" htmlFor="framework">
                        Where is your organization located?
                      </Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[600px] justify-between"
                          >
                            {value
                              ? frameworks.find(
                                  (framework) => framework.value === value
                                )?.label
                              : "United States"}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    {framework.label}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        value === framework.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Input
                        id="name"
                        className="text-[#A5A5A5]"
                        placeholder="Phone number"
                      />
                    </div>

                    {/* second popover */}
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-[#A5A5A5]" htmlFor="framework">
                        What is your company business?
                      </Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[600px] justify-between"
                          >
                            {value
                              ? frameworks.find(
                                  (framework) => framework.value === value
                                )?.label
                              : "Choose Business"}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    {framework.label}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        value === framework.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* third popover */}
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-[#A5A5A5]" htmlFor="framework">
                        How many users do you intend to monitor?
                      </Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[600px] justify-between"
                          >
                            {value
                              ? frameworks.find(
                                  (framework) => framework.value === value
                                )?.label
                              : "Just me"}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    {framework.label}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        value === framework.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="/projectmanagement/createproject">
                  <Button className="bg-[#5270D1]  hover:bg-[#5270D1]">
                    Continue
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monitask;
