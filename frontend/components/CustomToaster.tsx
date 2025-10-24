"use client";

import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3500,
        className: "react-hot-toast",
        style: {
          background: "white",
          color: "#0f172a",
          borderRadius: "12px",
          padding: "12px 18px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          fontSize: "15px",
          border: "1px solid #e2e8f0",
          transition: "all 0.3s ease",
        },
        success: {
          iconTheme: {
            primary: "#16a34a",
            secondary: "#fff",
          },
          style: {
            background: "linear-gradient(90deg, rgba(34,197,94,0.15), rgba(22,163,74,0.15))",
            border: "1px solid rgba(56,189,248,0.4)",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444", // red-500
            secondary: "#fff",
          },
          style: {
            background: "linear-gradient(90deg, rgba(248,113,113,0.15), rgba(239,68,68,0.15))",
            border: "1px solid rgba(239,68,68,0.4)",
          },
        },
      }}
    />
  );
};

export default CustomToaster;
