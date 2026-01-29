// import React from "react";

// const Home = () => {
//   return (
//     <div className="min-h-screen  bg-custom-gradient text-white p-6">

//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-2xl md:text-3xl font-bold    bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//           Admin Dashboard
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage users and messages from one place
//         </p>
//       </div>

//       {/* Stats Cards */}
      

//       {/* Welcome Card */}
//       <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6">
//         <h2 className="text-xl font-semibold mb-2">
//           Welcome  to the Chat App Admin Dashboard
//         </h2>
//         <p className="text-gray-400">
//           Use the sidebar to navigate between users and messages.
//           This dashboard helps you monitor and manage the chat app efficiently.
//         </p>
//       </div>

//     </div>
//   );
// };

// export default Home;
"use client";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-custom-gradient text-white p-6">

      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Manage users and messages from one place
        </p>
      </motion.div>

      {/* Welcome Card */}
      <motion.div
        className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-2">
          Welcome to the Chat App Admin Dashboard
        </h2>
        <p className="text-gray-400">
          Use the sidebar to navigate between users and messages.
          This dashboard helps you monitor and manage the chat app efficiently.
        </p>
      </motion.div>

    </div>
  );
};

export default Home;
