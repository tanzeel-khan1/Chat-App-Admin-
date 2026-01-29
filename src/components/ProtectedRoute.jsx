// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const adminInfo = localStorage.getItem("adminInfo");

//   if (!adminInfo) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  try {
    const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
    const token = localStorage.getItem("adminToken");

    if (!adminInfo || !token) {
      return <Navigate to="/login" />;
    }

    return children;
  } catch (error) {
    // If localStorage has invalid JSON
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
