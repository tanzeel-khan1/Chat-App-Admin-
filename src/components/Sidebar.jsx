import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../utlis/api";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
        { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Messages", path: "/messages" },
    { name: "Get Msg By Name", path: "/get-msg-name" },
    { name: "Get Msg By Name & Date", path: "/get-msg-name-date" },
  ];

  const logout = async () => {
    try {
      await API.post("/admin/logout");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminInfo");
      navigate("/login");
    }
  };

  return (
    <>
      {/* ☰ Mobile Menu Button (ONLY when sidebar closed) */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 text-2xl bg-black cursor-pointer text-white px-3 py-1 rounded"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-full md:h-screen
          w-64
          bg-gradient-to-b from-black via-gray-900 to-black
          text-white flex flex-col
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h1 className="text-lg font-semibold   bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Chat App
            
          </h1>

          {/* ✕ Close Button (ONLY mobile) */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-md text-sm transition-all
                ${
                  isActive
                    ? "bg-white/10 text-blue-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
                `
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Logout */}
          <button
            onClick={logout}
            className="mt-auto px-4 py-2 cursor-pointer rounded-md text-sm bg-red-600/90 hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
}
