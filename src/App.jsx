import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";

import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"; 
import { useContext } from "react";
import { DarkModeContext } from "./components/context/darkModeContext";
import { AuthContext } from "./components/context/authContext";

const ProtectedRoute = ({ children }) => {
  const currentUser = true; // Example: Replace with actual authentication logic
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  const {currentUser} = useContext(AuthContext);
  const darkMode = useContext(DarkModeContext);
  console.log(darkMode);
  return <RouterProvider router={router} />;
}

export default App;
