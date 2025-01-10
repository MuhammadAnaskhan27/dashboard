// "use client";
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Trash2, ChevronLeft, ChevronRight, Edit } from "lucide-react"; // Added Edit icon
// import {
//   Circle,
//   Clock,
//   ArrowDown,
//   ArrowUp,
//   ArrowRightCircle,
// } from "lucide-react";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import axios from "axios";

// const ITEMS_PER_PAGE = 5;

// const TaskDashboard = () => {
//   const [taskData, setTaskData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [editTask, setEditTask] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [error, setError] = useState(null);

//   const [deleteDialog, setDeleteDialog] = useState({
//     open: false,
//     taskId: null,
//   });

//   useEffect(() => {
//     const fetchTasks = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get(
//           "http://localhost:8000/Task/getAllTasks"
//         );
//         console.log(response);
//         setTaskData(response.data);
//       } catch (err) {
//         console.error("Error fetching tasks:", err);
//         setError("Failed to load tasks. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const filteredTasks = taskData.filter(
//     (task) =>
//       (task.taskName?.toLowerCase() || "").includes(search.toLowerCase()) &&
//       (filterStatus !== "all" ? task.status === filterStatus : true)
//   );

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const paginatedData = filteredTasks.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);

//   const handleDeleteConfirm = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/Task/deleteTask/${deleteDialog.taskId}`,
//         { method: "DELETE" }
//       );
//       if (response.status === 200) {
//         setTaskData((prevTasks) =>
//           prevTasks.filter((task) => task._id !== deleteDialog.taskId)
//         );
//         alert("Task deleted successfully!");
//       } else {
//         alert("Failed to delete task. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error deleting task:", error);
//       alert("An error occurred while deleting the task. Please try again.");
//     } finally {
//       setDeleteDialog({ open: false, taskId: null });
//     }
//   };

//   const handleEditClick = (task) => {
//     setEditTask({ ...task });
//     setIsEditing(true);
//   };

//   const handleEditSave = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:8000/Task/updateTask/${editTask._id}`,
//         editTask,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const updatedTasks = taskData.map((task) =>
//         task._id === editTask._id ? editTask : task
//       );
//       setTaskData(updatedTasks);
//       setIsEditing(false);
//       alert("Task updated successfully!");
//     } catch (error) {
//       console.error("Failed to update task:", error);
//       alert("Failed to update task. Please try again.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditTask((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const renderStatusWithIcon = (status) => {
//     if (status === "To Do") {
//       return (
//         <div className="flex items-center">
//           <Circle className="text-blue-500 h-5 w-5 mr-2" /> To Do
//         </div>
//       );
//     } else if (status === "In Progress") {
//       return (
//         <div className="flex items-center">
//           <Clock className="text-yellow-500 h-5 w-5 mr-2" /> In Progress
//         </div>
//       );
//     }
//     return status;
//   };

//   const renderPriorityWithIcon = (priority) => {
//     switch (priority) {
//       case "Lowest":
//         return (
//           <div className="flex items-center">
//             <ArrowDown className="text-gray-500 h-5 w-5 mr-2" /> Lowest
//           </div>
//         );
//       case "Low":
//         return (
//           <div className="flex items-center">
//             <ArrowDown className="text-blue-500 h-5 w-5 mr-2" /> Low
//           </div>
//         );
//       case "Medium":
//         return (
//           <div className="flex items-center">
//             <ArrowRightCircle className="text-orange-500 h-5 w-5 mr-2" /> Medium
//           </div>
//         );
//       case "High":
//         return (
//           <div className="flex items-center">
//             <ArrowUp className="text-red-500 h-5 w-5 mr-2" /> High
//           </div>
//         );
//       case "Highest":
//         return (
//           <div className="flex items-center">
//             <ArrowUp className="text-darkRed-500 h-5 w-5 mr-2" /> Highest
//           </div>
//         );
//       default:
//         return priority;
//     }
//   };

//   if (loading) {
//     return <div>Loading tasks...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toISOString().split("T")[0]; // Formats the date to YYYY-MM-DD
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <Input
//           placeholder="Search Tasks..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-1/3"
//         />
//         <Link href="/monitaskdashboard/tasks">
//           <Button variant="default">+ Add New Task</Button>
//         </Link>
//         <Select
//           onValueChange={(value) => setFilterStatus(value)}
//           value={filterStatus}
//         >
//           <SelectTrigger className="w-[180px]">
//             <span>
//               {filterStatus === "all" ? "Filter by Status" : filterStatus}
//             </span>
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All</SelectItem>
//             <SelectItem value="To Do">To Do</SelectItem>
//             <SelectItem value="In Progress">In Progress</SelectItem>
//             <SelectItem value="Done">Done</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <div className="overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-[#293863] hover:bg-[#293863]">
//               <TableHead className="text-white">Source</TableHead>
//               <TableHead className="text-white">Task Name</TableHead>
//               <TableHead className="text-white">Project Name</TableHead>
//               <TableHead className="text-white">Task Due Date</TableHead>
//               <TableHead className="text-white">Status</TableHead>
//               <TableHead className="text-white">Priority</TableHead>
//               <TableHead className="text-white">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {paginatedData.map((task) => (
//               <TableRow key={task._id}>
//                 <TableCell>{task.source}</TableCell>
//                 <TableCell>{task.taskName}</TableCell>
//                 <TableCell>
//                   {task.project ? task.project.ProjectName : "No Project Name"}
//                 </TableCell>
//                 <TableCell>{formatDate(task.dueDate)}</TableCell>
//                 <TableCell>{renderStatusWithIcon(task.status)}</TableCell>
//                 <TableCell>{renderPriorityWithIcon(task.priority)}</TableCell>
//                 <TableCell>
//                   <div className="flex gap-2">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleEditClick(task)} // Fixed to use 'task' instead of 'user'
//                       title="Edit"
//                     >
//                       <Edit className="h-4 w-4 text-blue-500" />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() =>
//                         setDeleteDialog({ open: true, taskId: task._id })
//                       }
//                       title="Delete"
//                     >
//                       <Trash2 className="h-4 w-4 text-red-500" />
//                     </Button>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex justify-end items-center gap-2 mt-4">
//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           <ChevronLeft className="h-4 w-4" />
//           Previous
//         </Button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() =>
//             setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//           }
//           disabled={currentPage === totalPages}
//         >
//           Next
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* Delete Confirmation Dialog */}
//       {deleteDialog.open && (
//         <Dialog
//           open={deleteDialog.open}
//           onOpenChange={(open) => setDeleteDialog({ ...deleteDialog, open })}
//         >
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Confirm Deletion</DialogTitle>
//             </DialogHeader>
//             <p>Are you sure you want to delete this task ?</p>
//             <DialogFooter>
//               <Button
//                 variant="outline"
//                 onClick={() => setDeleteDialog({ open: false, taskId: null })}
//               >
//                 Cancel
//               </Button>
//               <Button variant="destructive" onClick={handleDeleteConfirm}>
//                 Delete
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}

//       {/* Edit Modal */}
//       {isEditing && (
//         <Dialog open={isEditing} onOpenChange={setIsEditing}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Edit Task</DialogTitle>
//             </DialogHeader>
//             <div className="mb-4">
//               <label htmlFor="taskName" className="block text-sm">
//                 Task Name
//               </label>
//               <Input
//                 id="taskName"
//                 name="taskName"
//                 value={editTask?.taskName || ""}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="dueDate" className="block text-sm">
//                 Due Date
//               </label>
//               <Input
//                 id="dueDate"
//                 name="dueDate"
//                 type="date"
//                 value={editTask?.dueDate || ""}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="status" className="block text-sm">
//                 Status
//               </label>
//               <Select
//                 id="status"
//                 name="status"
//                 value={editTask?.status || ""}
//                 onValueChange={(value) =>
//                   setEditTask((prev) => ({ ...prev, status: value }))
//                 }
//               >
//                 <SelectTrigger>
//                   <span>{editTask?.status || "Select Status"}</span>
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="To Do">To Do</SelectItem>
//                   <SelectItem value="In Progress">In Progress</SelectItem>
//                   <SelectItem value="Done">Done</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <DialogFooter>
//               <Button variant="outline" onClick={() => setIsEditing(false)}>
//                 Cancel
//               </Button>
//               <Button variant="default" onClick={handleEditSave}>
//                 Save Changes
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default TaskDashboard;

"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
import { Trash2, ChevronLeft, ChevronRight, Edit } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";

const ITEMS_PER_PAGE = 5;

const TaskDashboard = () => {
  const [taskData, setTaskData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [editTask, setEditTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    taskId: null,
  });

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "http://localhost:8000/Task/getAllTasks"
        );
        setTaskData(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Failed to load tasks. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const filteredTasks = taskData.filter(
    (task) =>
      (task.taskName?.toLowerCase() || "").includes(search.toLowerCase()) &&
      (filterStatus !== "all" ? task.status === filterStatus : true)
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredTasks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/Task/deleteTask/${deleteDialog.taskId}`,
        { method: "DELETE" }
      );
      if (response.status === 200) {
        setTaskData((prevTasks) =>
          prevTasks.filter((task) => task._id !== deleteDialog.taskId)
        );
        alert("Task deleted successfully!");
      } else {
        alert("Failed to delete task. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("An error occurred while deleting the task. Please try again.");
    } finally {
      setDeleteDialog({ open: false, taskId: null });
    }
  };

  const handleEditClick = (task) => {
    setEditTask({ ...task });
    setIsEditing(true);
  };

  const handleEditSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/Task/updateTask/${editTask._id}`,
        editTask,
        { headers: { "Content-Type": "application/json" } }
      );
      const updatedTasks = taskData.map((task) =>
        task._id === editTask._id ? editTask : task
      );
      setTaskData(updatedTasks);
      setIsEditing(false);
      alert("Task updated successfully!");
    } catch (error) {
      console.error("Failed to update task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Formats the date to YYYY-MM-DD
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 bg-[#F6F8FA] min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search Tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Link href="/monitaskdashboard/tasks">
          <Button variant="default">+ Add New Task</Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <Table className="bg-white shadow-lg rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100 border-b border-gray-300 text-gray-600">
              <TableHead className="text-[#59638F]">Task Name</TableHead>
              <TableHead className="text-[#59638F]">Project Name</TableHead>
              <TableHead className="text-[#59638F]">Task Due Date</TableHead>
              <TableHead className="text-[#59638F]">Status</TableHead>
              <TableHead className="text-[#59638F]">Priority</TableHead>
              <TableHead className="text-[#59638F]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((task) => (
              <TableRow key={task._id} className="hover:bg-gray-100">
                <TableCell>{task.taskName}</TableCell>
                <TableCell>
                  {task.project ? task.project.ProjectName : "No Project Name"}
                </TableCell>
                <TableCell>{formatDate(task.dueDate)}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditClick(task)}
                      title="Edit"
                    >
                      <Edit className="h-4 w-4 text-blue-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setDeleteDialog({ open: true, taskId: task._id })
                      }
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

      {/* Pagination Controls */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4" />
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
            <p>Are you sure you want to delete this task ?</p>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDeleteDialog({ open: false, taskId: null })}
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
    </div>
  );
};

export default TaskDashboard;
