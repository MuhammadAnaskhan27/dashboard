"use client";
import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import {
  LineChart,
  Users,
  Briefcase,
  CheckSquare,
  BarChart2,
  MoreHorizontal,
  Download,
  MessageCircle,
  Home,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import ProjectTab from "../ProjectTab";
import TaskTab from "../TaskTab";
import Image from "next/image";
import Dashboard from "../Dashboard";

// Sidebar items
const items = [
  { title: "Dashboard", key: "dashboard", icon: Home },
  { title: "Timeline", key: "timeline", icon: LineChart },
  { title: "Users", key: "users", icon: Users },
  { title: "Projects", key: "projects", icon: Briefcase },
  { title: "Task", key: "task", icon: CheckSquare },
  { title: "Reports", key: "reports", icon: BarChart2 },
  { title: "Company Settings", key: "settings", icon: Settings },
  { title: "More", key: "more", icon: MoreHorizontal },
  { title: "Feedback", key: "feedback", icon: MessageCircle },
  { title: "Download", key: "download", icon: Download },
];

const AppSidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div>
            <Dashboard />
          </div>
        );
      case "timeline":
        return <div>Timeline Content: View your project timelines here.</div>;
      case "users":
        return <div>Users Content: Manage your users and teams here.</div>;
      case "projects":
        return (
          <div>
            <ProjectTab />
          </div>
        );
      case "task":
        return (
          <div>
            <TaskTab />
          </div>
        );
      case "reports":
        return <div>Reports Content: Analyze data and generate reports.</div>;
      case "settings":
        return (
          <div>Company Settings Content: Configure your company settings.</div>
        );
      case "more":
        return (
          <div>More Content: Explore additional features and options.</div>
        );
      case "feedback":
        return <div>Feedback Content: Share your feedback with us.</div>;
      case "download":
        return <div>Download Content: Access your downloads here.</div>;
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar className="bg-[#FEFEFE] w-64">
          <SidebarContent>
            <SidebarGroup>
              {/* <Image className="mt-2 mb-4 " src={Logo} /> */}
              <h1 className="font-bold text-3xl mb-4 ">Raqeeb</h1>
              <SidebarGroupLabel>
                <Button className="bg-white text-[#636C95] w-[100%] rounded-none h-7 mb-2  hover:bg-white border-2">
                  + New
                </Button>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <h1 className="mb-3 ml-1 text-[#59638F] font-semibold">Menu</h1>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.key}>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={() => setActiveTab(item.key)}
                          className={`flex items-center space-x-2 px-2 py-1 w-full text-left ${
                            activeTab === item.key
                              ? "bg-gray-200 font-bold"
                              : "text-[#59638F]"
                          }`}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div>{renderTabContent()}</div>
      </div>
    </SidebarProvider>
  );
};

export default AppSidebar;
