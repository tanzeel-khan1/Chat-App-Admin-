// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   try {
//     const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
//     const token = localStorage.getItem("adminToken");

//     if (!adminInfo || !token) {
//       return <Navigate to="/login" />;
//     }

//     return children;
//   } catch (error) {
//     // If localStorage has invalid JSON
//     return <Navigate to="/login" />;
//   }
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation(); // current route path
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  const token = localStorage.getItem("adminToken");

  // Agar login page par ho aur user already login hai
  if (location.pathname === "/login" && adminInfo && token) {
    return <Navigate to="/home" replace />;
  }

  // Agar user login nahi hai
  if (!adminInfo || !token) {
    return <Navigate to="/login" replace />;
  }

  // Agar user login hai aur route login page nahi hai
  return children;
};

export default ProtectedRoute;
