import { useState } from "react";
import axios from "axios";

export const useDeleteMessage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteMessage = async (messageId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.delete(
        `/api/messages/${messageId}` // backend route adjust karna
      );

      return response.data; // { success: true, message: "Message deleted successfully" }
    } catch (err) {
      console.error("Error deleting message:", err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteMessage, loading, error };
};
