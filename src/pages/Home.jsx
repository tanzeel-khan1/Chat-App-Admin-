// import React from "react";
// import Sidebar from "../components/Sidebar";

// const Home = () => {
//   return (
//     <div className="h-screen bg-custom-gradient">
//       <h1 className="text-white"> Admin Dashboard Manage Users and Messages</h1>
//     </div>
//   );
// };

// export default Home;
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold    bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Manage users and messages from one place
        </p>
      </div>

      {/* Stats Cards */}
      

      {/* Welcome Card */}
      <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">
          Welcome  to the Chat App Admin Dashboard
        </h2>
        <p className="text-gray-400">
          Use the sidebar to navigate between users and messages.
          This dashboard helps you monitor and manage the chat app efficiently.
        </p>
      </div>

    </div>
  );
};

export default Home;
