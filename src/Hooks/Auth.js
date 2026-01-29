import { useState } from "react";
import API from "../utlis/api";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ------------------ Login ------------------
  const login = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const res = await API.post("/admin/login", formData);

      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("adminInfo", JSON.stringify(res.data));

      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ------------------ Signup ------------------
  const signup = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const res = await API.post("/admin/signup", formData);

      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ------------------ Logout ------------------
  const logout = async () => {
    try {
      await API.post("/admin/logout");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminInfo");
    }
  };

  return { login, signup, logout, loading, error };
};

export default useAuth;
