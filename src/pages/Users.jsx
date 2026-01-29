// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useAllUsers } from "../Hooks/Users";
// import { useDeleteUser } from "../Hooks/DeleteUser";
// import ConfirmModal from "../components/ConfirmModal";

// const Users = () => {
//   const { users, loading, error, refetch } = useAllUsers();
//   const { deleteUser, loading: deleting } = useDeleteUser();

//   // Modal state
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const openModal = (id) => {
//     setSelectedUserId(id);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedUserId(null);
//     setIsModalOpen(false);
//   };

//   const handleConfirmDelete = async () => {
//     if (!selectedUserId) return;

//     const success = await deleteUser(selectedUserId);
//     if (success) {
//       alert("User deleted successfully!");
//       refetch();
//     } else {
//       alert("Failed to delete user.");
//     }
//     closeModal();
//   };

//   // Framer Motion variants for cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//     hover: { scale: 1.05 },
//   };

//   return (
//     <div className="bg-custom-gradient min-h-screen p-8">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl font-bold text-white mb-8 text-center"
//       >
//         Users Page
//       </motion.h1>

//       {loading && <p className="text-white text-center">Loading users...</p>}
//       {error && (
//         <p className="text-red-300 text-center">
//           {error.message || "Error fetching users."}
//         </p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {users.map((user) => (
//           <motion.div
//             key={user._id}
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg flex flex-col justify-between"
//           >
//             <div className="mb-4">
//               <h2 className="text-lg font-semibold text-white">{user.name}</h2>
//               <p className="text-white/80">{user.email}</p>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => openModal(user._id)}
//               className="px-3 py-1 bg-red-600 cursor-pointer hover:bg-red-500 text-white font-semibold rounded shadow transition"
//               disabled={deleting}
//             >
//               {deleting ? "Deleting..." : "Delete"}
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>

//       {/* Confirmation Modal */}
//       <ConfirmModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         onConfirm={handleConfirmDelete}
//         message="Are you sure you want to delete this user?"
//       />
//     </div>
//   );
// };

// export default Users;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAllUsers } from "../Hooks/Users";
import { useDeleteUser } from "../Hooks/DeleteUser";
import ConfirmModal from "../components/ConfirmModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

const Users = () => {
  const { users, loading, error, refetch } = useAllUsers();
  const { deleteUser, loading: deleting } = useDeleteUser();

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const openModal = (id) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUserId(null);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedUserId) return;

    const success = await deleteUser(selectedUserId);
    if (success) {
      toast.success("User deleted successfully!");
      refetch();
    } else {
      toast.error("Failed to delete user.");
    }
    closeModal();
  };

  // Framer Motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <div className="bg-custom-gradient min-h-screen p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Users Page
      </motion.h1>

      {loading &&  <Loader/>}
      {error && (
        <p className="text-red-300 text-center">
          {error.message || "Error fetching users."}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <motion.div
            key={user._id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white">{user.name}</h2>
              <p className="text-white/80">{user.email}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(user._id)}
              className="px-3 py-1 bg-red-600 cursor-pointer hover:bg-red-500 text-white font-semibold rounded shadow transition"
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this user?"
      />
    </div>
  );
};

export default Users;
