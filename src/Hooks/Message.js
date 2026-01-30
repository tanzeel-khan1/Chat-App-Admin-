import { useState, useEffect } from "react";
import axios from "axios";

export const useAllChats = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllChats = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/messages"); 
      // ⬆️ backend route apni actual route ke hisaab se adjust karna

      setMessages(response.data.messages || []);
    } catch (err) {
      console.error("Error fetching all chats:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllChats();
  }, []);

  return { messages, loading, error, refetch: fetchAllChats };
};
