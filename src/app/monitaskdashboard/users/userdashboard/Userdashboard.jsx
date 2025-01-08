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
import axios from "axios";

const ROWS_PER_PAGE = 5;

const UserDashboardTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editUser, setEditUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/User/getUsersList");
        const data = await response.json();
        console.log(data); // Inspect the user objects here
        setUsers(data.data); // Ensure data.data contains user objects with `_id` or unique identifier
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.first_name?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (filteredUsers.length === 0) {
      setCurrentPage(1);
    }
  }, [filteredUsers]);

  const totalPages = Math.ceil(filteredUsers.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE
  );

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/User/deleteUser/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status===200) {
        alert("User deleted successfully!");
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id)); // Use _id if it's the unique identifier
      } else {
        const errorData = await response.json();
        console.error(
          "Failed to delete user:",
          errorData.message || "Unknown error"
        );
        alert("Failed to delete user. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user. Please try again.");
    }
  };

  const handleEditClick = (user) => {
    setEditUser({ ...user }); // Set the selected user data for editing
    setIsEditing(true); // Open the edit modal or form
  };

  const handleEditSave = async () => {
    try {
      // Send the updated user data to the server
      const response = await axios.put(
        `http://localhost:8000/User/updateUser/${editUser._id}`, // Use the ObjectId in the URL
        editUser, // Send the updated user data in the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User updated successfully:", response.data);

      // Update the users state with the updated data
      const updatedUsers = users.map((user) =>
        user._id === editUser._id ? editUser : user
      );
      setUsers(updatedUsers);
      setIsEditing(false); // Close the edit modal/form
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Failed to update user. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevData) => ({
      ...prevData,
      [name]: value, // Update the editUser state with the changes
    }));
  };

  return (
    <div className="p-4">
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

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#293863] hover:bg-[#293863]">
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Role</TableHead>
              <TableHead className="text-white">Teams</TableHead>
              <TableHead className="text-white">Projects</TableHead>
              <TableHead className="text-white">Additional Info</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="hover:bg-gray-700 bg-gray-800 text-gray-100"
                >
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.position}</TableCell>
                  <TableCell>{user.teams || "-"}</TableCell>
                  <TableCell>{user.projectCount || "-"}</TableCell>
                  <TableCell>{user.additionalInformation || "-"}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Edit"
                        onClick={() => handleEditClick(user)} // Pass user data to handleEditClick
                      >
                        <Edit className="h-4 w-4 text-blue-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(user._id)} // Use _id or the correct field here
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {Math.max(totalPages, 1)}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages || totalPages === 0}
          variant="outline"
        >
          Next
        </Button>
      </div>

      {/* Modal for Editing */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-sm">First Name</label>
              <Input
                id="first_name"
                name="first_name"
                value={editUser.first_name || ''}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="position" className="block text-sm">Role</label>
              <Input
                id="position"
                name="position"
                value={editUser.position || ''}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projects" className="block text-sm">Projects</label>
              <Input
                id="projects"
                name="projects"
                value={editUser.projects || ''}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="additionalInformation" className="block text-sm">Additional Information</label>
              <Input
                id="additionalInformation"
                name="additionalInformation"
                value={editUser.additionalInformation || ''}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button onClick={() => setIsEditing(false)} variant="outline">
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
