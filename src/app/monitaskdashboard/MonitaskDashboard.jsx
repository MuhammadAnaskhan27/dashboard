"use strict";
import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl">Subscribe to Raqeeb</h1>
      <h5 className="border-2 shadow-slate-300-md mt-2 p-4 text-red-600 ">
        Your trial is over,its time to pick a plan and Subscribe
      </h5>

      <div className=" mt-4 ">
        <Label htmlFor="airplane-mode " className="mr-3">
          Monthly Plan
        </Label>
        <Switch className="mr-3" id="airplane-mode" />
        <Label htmlFor="airplane-mode">Annual Plan</Label>
        <Input
          className="w-[300px] mt-2 h-[30px] rounded-none"
          type="email"
          id="email"
          placeholder="Business plan for $8.99 per user per month"
        />
      </div>

      {/* First Input */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="email">Number of Employees</Label>
        <Input
          placeholder="1"
          className="w-[300px] h-[30px] rounded-none"
          type="email"
          id="email"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="email">Screenshots Add-Ons 60 per hour</Label>
        <Input
          placeholder="0"
          className="w-[300px] h-[30px] rounded-none"
          type="email"
          id="email"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="email">Screenshots Add-Ons 90 per hour</Label>
        <Input
          placeholder="0"
          className="w-[300px] h-[30px] rounded-none"
          type="email"
          id="email"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="email">Screenshots Add-Ons 120 per hour</Label>
        <Input
          placeholder="0"
          className="w-[300px] h-[30px] rounded-none"
          type="email"
          id="email"
        />

        <h1 className="text-md mt-3">Review subscription details</h1>
        <h6 className="text-sm mt-4">Today's charge</h6>
        <h6 className="text-lg font-bold text-green-500 ">$8.99</h6>

        <Button className="bg-[#5470CB] hover:bg-[#5470CB] h-8 ">
          Pay $8.99 & subscribe
        </Button>
        <h1 className="text-xs mb-10 text-center">
          Secure checkout by Stripe.
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
