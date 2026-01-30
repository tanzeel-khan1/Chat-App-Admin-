// import React from "react";
// import { useAllChats } from "../Hooks/Message";
// import { useDeleteMessage } from "../Hooks/useDeleteMessage";

// const Message = () => {
//   const { messages, loading, error, refetch } = useAllChats();
//   const { deleteMessage, loading: deleteLoading } = useDeleteMessage();

//   const handleDelete = async (id) => {
//     try {
//       await deleteMessage(id);
//       refetch(); // delete ke baad chats reload
//     } catch (err) {
//       alert("Failed to delete message");
//     }
//   };

//   if (loading) return <p>Loading chats...</p>;
//   if (error) return <p>Something went wrong!</p>;

//   return (
//     <div>
//       <h2>All Messages</h2>

//       {messages.map((msg) => (
//         <div
//           key={msg._id}
//           style={{
//             borderBottom: "1px solid #ddd",
//             marginBottom: "10px",
//             paddingBottom: "10px",
//           }}
//         >
//           <p><strong>From:</strong> {msg.sender?.name}</p>
//           <p><strong>To:</strong> {msg.receiver?.name}</p>
//           <p>{msg.content}</p>

//           <button
//             onClick={() => handleDelete(msg._id)}
//             disabled={deleteLoading}
//             style={{ color: "red" }}
//           >
//             {deleteLoading ? "Deleting..." : "Delete"}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Message;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAllChats } from "../Hooks/Message";
import { useDeleteMessage } from "../Hooks/useDeleteMessage";
import ConfirmModal from "../components/ConfirmModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

const Message = () => {
  const { messages, loading, error, refetch } = useAllChats();
  const { deleteMessage, loading: deleting } = useDeleteMessage();

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  const openModal = (id) => {
    setSelectedMessageId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMessageId(null);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedMessageId) return;

    const success = await deleteMessage(selectedMessageId);
    if (success) {
      toast.success("Message deleted successfully!");
      refetch();
    } else {
      toast.error("Failed to delete message!");
    }
    closeModal();
  };

  // animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03 },
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
        All Messages
      </motion.h1>

      {loading && <Loader />}

      {error && (
        <p className="text-red-300 text-center">
          {error.message || "Error fetching messages"}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {messages.map((msg) => (
          <motion.div
            key={msg._id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div className="mb-4 space-y-2">
              <p className="text-white text-sm">
                <span className="font-semibold">From:</span>{" "}
                {msg.sender?.name || "Unknown"}
              </p>
              <p className="text-white text-sm">
                <span className="font-semibold">To:</span>{" "}
                {msg.receiver?.name || "Unknown"}
              </p>
              <p className="text-white/80 text-sm border-t border-white/20 pt-2">
                {msg.content}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(msg._id)}
              disabled={deleting}
              className="px-3 py-1 bg-red-600 hover:bg-red-500 cursor-pointer text-white font-semibold rounded shadow transition"
            >
              {deleting ? "Deleting..." : "Delete"}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this message?"
      />
    </div>
  );
};

export default Message;
