import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  redirect,
} from "react-router-dom";

import LandingPage from "../src/pages/Home/LandingPage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";

import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";

import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

import PrivateRoute from "./routes/PrivateRoute";
import UserProvider, { UserContext } from "./context/userContext";

import axiosInstance from "./utils/axiosInstance";
import { API_PATHS } from "./utils/apiPaths";
import { Toaster } from "react-hot-toast";


const validateToken = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.AUTH.VALIDATE_TOKEN);
    if (response.status === 200) {
      const role = response.data.user?.role;
    return  redirect(role === "admin" ? "/admin/dashboard" : "/user/dashboard");
    }
  } catch (error) {
    console.log("Token validation failed:", error);
    return null ;
  }
};

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    loader: validateToken,
    element: <Login />,
  },
  {
    path: "/signUp",
    loader: validateToken,
    element: <SignUp />,
  },
  {
    element: <PrivateRoute allowedRoles={["admin"]} />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/tasks",
        element: <ManageTasks />,
      },
      {
        path: "/admin/create-task",
        element: <CreateTask />,
      },
      {
        path: "/admin/users",
        element: <ManageUsers />,
      },
    ],
  },
  {
    element: <PrivateRoute allowedRoles={["user"]} />,
    children: [
      {
        path: "/user/dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/user/tasks",
        element: <MyTasks />,
      },
      {
        path: "/user/task-details/:id",
        element: <ViewTaskDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <div>
        <RouterProvider router={router} />
      </div>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </UserProvider>
  );
};

export default App;

const Root = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <Outlet />;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return user.role === "admin" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="/user/dashboard" />
  );
};
