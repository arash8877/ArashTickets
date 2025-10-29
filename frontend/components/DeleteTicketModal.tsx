"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

interface Props {
  ticketId: number;
  onClose: () => void;
}

const DeleteTicketModal = ({ ticketId, onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/v1/tickets/${ticketId}`);
      onClose();
      router.push("/tickets");
    } catch (error) {
      console.error("Failed to delete ticket:", error);
      alert("Something went wrong while deleting the ticket.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 p-6 relative">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
          Delete Ticket ?
        </h3>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Are you sure you want to delete this ticket? This action cannot be undone.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white font-medium transition cursor-pointer"
          >
            {loading ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTicketModal;
