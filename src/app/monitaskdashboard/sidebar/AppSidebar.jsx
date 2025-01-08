"use client"; // This makes this component a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct hook for App Directory in Next.js 13+
import Link from "next/link"; // Import Link from next/link
import {
  Home,
  LineChart,
  Users,
  Briefcase,
  CheckSquare,
  BarChart2,
  MoreHorizontal,
  Download,
  MessageCircle,
  Settings,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Sidebar items with routes
const items = [
  {
    title: "Dashboard",
    key: "dashboard",
    icon: Home,
    route: "/monitaskdashboard/dashboard",
  },
  {
    title: "Timeline",
    key: "timeline",
    icon: LineChart,
    route: "/monitaskdashboard/timeline",
  },
  {
    title: "Users",
    key: "users",
    icon: Users,
    route: "/monitaskdashboard/users/userdashboard",
  },
  {
    title: "Projects",
    key: "projects",
    icon: Briefcase,
    route: "/monitaskdashboard/project/projectdashboard",
  },
  {
    title: "Task",
    key: "task",
    icon: CheckSquare,
    route: "/monitaskdashboard/tasks/taskdashboard",
  },
  // {
  //   title: "Company Settings",
  //   key: "settings",
  //   icon: Settings,
  //   route: "/monitaskdashboard/settings",
  // },
  // {
  //   title: "More",
  //   key: "more",
  //   icon: MoreHorizontal,
  //   route: "/monitaskdashboard/more",
  // },
  // {
  //   title: "Feedback",
  //   key: "feedback",
  //   icon: MessageCircle,
  //   route: "/monitaskdashboard/feedback",
  // },
  // {
  //   title: "Download",
  //   key: "download",
  //   icon: Download,
  //   route: "/monitaskdashboard/download",
  // },
];

const reportDropdownItems = [
  { title: "Entry Details", route: "/monitaskdashboard/reports/entrydetails" },
  {
    title: "Clock-in / Clock-out",
    route: "/monitaskdashboard/reports/clockinandout",
  },
  { title: "Visited Sites", route: "/monitaskdashboard/reports/visitedsites" },
  { title: "Productivity", route: "/monitaskdashboard/reports/productivity" },
  { title: "Projects", route: "/monitaskdashboard/reports/projects" },
  { title: "Daily Report", route: "/monitaskdashboard/reports/daily" },
  { title: "Weekly Report", route: "/monitaskdashboard/reports/weekly" },
];

const AppSidebar = ({ children }) => {
  const router = useRouter(); // Using `useRouter` from `next/navigation`
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#FEFEFE] w-64 border-r-0">
        <div className="p-4">
          <h1 className="font-bold text-3xl mb-4">Raqeeb</h1>
          <Button className="bg-white text-[#636C95] w-full rounded-none h-7 mb-2 hover:bg-white border-2">
            + New
          </Button>
          <h1 className="mb-3 ml-1 text-[#59638F] font-semibold">Menu</h1>
          <div>
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.route}
                className={`flex items-center space-x-2 px-2 py-1 w-full text-left ${
                  router.pathname === item.route
                    ? "bg-gray-200 font-bold"
                    : "text-[#59638F]"
                } mb-3 text-sm`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm">{item.title}</span>
              </Link>
            ))}

            {/* Reports Dropdown */}
            <div>
              <button
                onClick={() => setIsReportOpen(!isReportOpen)}
                className="flex items-center justify-between w-full text-left px-2 py-1 mb-3 text-[#59638F] text-sm"
              >
                <div className="flex items-center space-x-2">
                  <BarChart2 className="h-5 w-5" />
                  <span className="text-sm">Reports</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isReportOpen && (
                <div className="ml-6">
                  {reportDropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.title}
                      href={dropdownItem.route}
                      className={`block px-2 py-1 mb-2 text-[#59638F] text-sm ${
                        router.pathname === dropdownItem.route
                          ? "bg-gray-200 font-bold"
                          : ""
                      }`}
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default AppSidebar;
