"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BiErrorCircle } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("🚨 Error caught by error boundary:", error);
  }, [error]);

  const handleRetry = () => {
    try {
      reset(); // Attempt to recover gracefully
      // Add a small delay before reload as fallback
      setTimeout(() => {
        router.refresh(); // Client-side refresh (re-fetch data)
      }, 300);
    } catch (e) {
      console.error("Manual reset failed, performing hard reload...", e);
      window.location.reload(); // Full browser reload as last resort
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">
      <BiErrorCircle className="text-red-500 text-6xl mb-4 animate-bounce" />

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Oops! Something went wrong 💥
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        We encountered an unexpected issue. Don’t worry — our team of digital
        elves is already investigating.  
      </p>

      <div className="flex gap-3">
        <button
          onClick={handleRetry}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-blue-700 transition-all active:scale-95"
        >
          <MdRefresh className="text-xl" />
          Try Again
        </button>

        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2.5 rounded-xl shadow-sm hover:bg-gray-100 transition-all active:scale-95"
        >
          Go Home
        </button>
      </div>

      {process.env.NODE_ENV === "development" && (
        <pre className="mt-8 p-4 text-left bg-gray-100 rounded-xl text-sm text-red-600 max-w-lg overflow-auto">
          {error.message}
        </pre>
      )}
    </div>
  );
}
