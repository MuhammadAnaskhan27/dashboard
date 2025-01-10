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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit, Trash2, MoreVertical } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

// Helper function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ROWS_PER_PAGE = 5;

const UserDashboardTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editUser, setEditUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    userId: null,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/User/getUsersList");
        const data = await response.json();
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

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/User/deleteUser/${deleteDialog.userId}`,
        { method: "DELETE" }
      );

      if (response.status === 200) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== deleteDialog.userId)
        );
        alert("User deleted successfully!");
      } else {
        alert("Failed to delete user. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user. Please try again.");
    } finally {
      setDeleteDialog({ open: false, userId: null });
    }
  };

  const handleEditClick = (user) => {
    setEditUser({ ...user });
    setIsEditing(true);
  };

  const handleEditSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/User/updateUser/${editUser._id}`,
        editUser,
        { headers: { "Content-Type": "application/json" } }
      );

      const updatedUsers = users.map((user) =>
        user._id === editUser._id ? editUser : user
      );
      setUsers(updatedUsers);
      setIsEditing(false);
      alert("User updated successfully!");
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Failed to update user. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 bg-[#F6F8FA] min-h-screen ">
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
        <Table className="bg-white shadow-lg rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100 border-b border-gray-300 text-gray-600">
              <TableHead className="text-left">Logo</TableHead>
              <TableHead className="text-left text-[#59638F] ">Name</TableHead>
              <TableHead className="text-left text-[#59638F] ">Email</TableHead>
              <TableHead className="text-left text-[#59638F] ">Email</TableHead>
              <TableHead className="text-left text-[#59638F] ">
                Projects
              </TableHead>
              <TableHead className="text-left text-[#59638F] ">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="hover:bg-gray-100  border-b"
                >
                  <TableCell className="border-r">
                    <Avatar
                      className="h-8 w-8 text-white flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: getRandomColor(),
                      }}
                    >
                      <AvatarImage
                        className="object-cover rounded-full"
                        src={user.profilePic || "/default-avatar.png"}
                        alt={user.first_name}
                        onError={(e) => {
                          e.target.src = "/default-avatar.png";
                        }}
                      />
                      <AvatarFallback className="text-lg font-bold">
                        {user.first_name ? user.first_name[0] : "?"}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>

                  <TableCell>
                    <div className="font-medium text-gray-800">
                      {`${user.first_name} ${user.last_name}`}
                    </div>
                    <div className="text-gray-500">{user.position}</div>
                  </TableCell>
                  <TableCell>{user.email || "-"}</TableCell>
                  <TableCell>{user.company || "-"}</TableCell>
                  <TableCell>{user.projectCount || 0}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Edit"
                        onClick={() => handleEditClick(user)}
                      >
                        <Edit className="h-5 w-5 text-blue-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Delete"
                        onClick={() =>
                          setDeleteDialog({ open: true, userId: user._id })
                        }
                      >
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
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

      {/* Delete Confirmation Dialog */}
      {deleteDialog.open && (
        <Dialog
          open={deleteDialog.open}
          onOpenChange={(open) => setDeleteDialog({ ...deleteDialog, open })}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to delete this user?</p>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDeleteDialog({ open: false, userId: null })}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Modal */}
      {isEditing && (
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
            </DialogHeader>
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-sm">
                First Name
              </label>
              <Input
                id="first_name"
                name="first_name"
                value={editUser.first_name || ""}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-sm">
                Last Name
              </label>
              <Input
                id="last_name"
                name="last_name"
                value={editUser.last_name || ""}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button variant="default" onClick={handleEditSave}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default UserDashboardTable;
