"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const ROWS_PER_PAGE = 5;

const UserDashboardTable = () => {
  const [users, setUsers] = useState([]); // Empty initial state for users
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editUser, setEditUser] = useState(null); // For Editing User
  const [isEditing, setIsEditing] = useState(false); // Edit Modal Toggle

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/User/getUsersList"); // Replace with your API endpoint
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Filtered Users
  const filteredUsers = Array.isArray(users) ? users.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase())
  ) : [];

  // Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE
  );

  // Handle Delete
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Handle Edit
  const handleEditClick = (user) => {
    setEditUser({ ...user });
    setIsEditing(true);
  };

  const handleEditSave = () => {
    const updatedUsers = users.map((user) =>
      user.id === editUser.id ? editUser : user
    );
    setUsers(updatedUsers);
    setIsEditing(false);
  };

  return (
    <div className="p-4">
      {/* Search and Add User */}
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Link href="/monitaskdashboard/users">
          <Button variant="default">+ Add New User</Button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#293863] hover:bg-[#293863]">
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Role</TableHead>
              <TableHead className="text-white">Teams</TableHead>
              <TableHead className="text-white">Projects</TableHead>
              <TableHead className="text-white">Last Seen Online</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.teams}</TableCell>
                <TableCell>{user.projects}</TableCell>
                <TableCell>{user.lastSeen}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Edit"
                      onClick={() => handleEditClick(user)}
                    >
                      <Edit className="h-4 w-4 text-blue-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(user.id)}
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>
      </div>

      {/* Edit User Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Edit User</h2>
            <Input
              placeholder="Name"
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              className="mb-2"
            />
            <Input
              placeholder="Role"
              value={editUser.role}
              onChange={(e) =>
                setEditUser({ ...editUser, role: e.target.value })
              }
              className="mb-2"
            />
            <Input
              placeholder="Teams"
              value={editUser.teams}
              onChange={(e) =>
                setEditUser({ ...editUser, teams: e.target.value })
              }
              className="mb-2"
            />
            <Input
              placeholder="Projects"
              type="number"
              value={editUser.projects}
              onChange={(e) =>
                setEditUser({ ...editUser, projects: e.target.value })
              }
              className="mb-4"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleEditSave}>Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboardTable;
