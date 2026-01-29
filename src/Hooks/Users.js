// import { useState, useEffect } from "react";
// import axios from "axios";

// export const useAllUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchAllUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("/api/all"); // <-- Adjust your backend route
//       setUsers(response.data.users || []);
//     } catch (err) {
//       console.error("Error fetching all users:", err);
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllUsers();
//   }, []);

//   return { users, loading, error, refetch: fetchAllUsers };
// };
import { useState, useEffect } from "react";
import axios from "axios";

export const useAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/get-all-users"); // <-- Adjust your backend route
      setUsers(response.data.users || []);
    } catch (err) {
      console.error("Error fetching all users:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return { users, loading, error, refetch: fetchAllUsers };
};
