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
