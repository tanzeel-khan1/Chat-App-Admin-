// import { useState } from "react";
// import axios from "axios";

// const useDeleteUser = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const deleteUser = async (userId) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await axios.delete(`/api/users/delete-user/${userId}`);
//       setSuccess(response.data.message);
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Something went wrong. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { deleteUser, loading, error, success };
// };

// export default useDeleteUser;
import { useState } from "react";
import axios from "axios";

export const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`/api/delete-user/${id}`); // backend route
      setLoading(false);
      return true; // success
    } catch (err) {
      setError(err);
      setLoading(false);
      return false;
    }
  };

  return { deleteUser, loading, error };
};
