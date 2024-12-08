import React from "react";

const Snackbar = ({ message, onClose, type = "error" }) => {
  if (!message) return null;

  // Define styles based on the message type
  const backgroundColor =
    {
      error: "bg-red-600",
      success: "bg-green-600",
    }[type] || "bg-red-600";

  return (
    <div
      className={`fixed bottom-4 right-4 ${backgroundColor} text-white py-2 px-4 rounded shadow-lg`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-300"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
