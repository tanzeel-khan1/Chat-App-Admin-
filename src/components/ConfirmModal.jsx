import React from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-white rounded-xl p-6 w-80 text-center shadow-lg"
        variants={modalVariants}
      >
        <p className="text-gray-800 mb-6">{message || "Are you sure?"}</p>
        <div className="flex justify-around">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 cursor-pointer rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-500 transition"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmModal;
