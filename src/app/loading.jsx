// app/error.js
"use client";

import { Button } from "@heroui/react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

export default function Loading({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl shadow-xl p-8 text-center">
        
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center mb-5">
          <FiAlertTriangle className="text-4xl text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Oops!
        </h1>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Something went wrong while loading AH TileCraft.
        </p>

        {/* Error Message */}
        {error?.message && (
          <div className="mb-6 rounded-xl bg-gray-100 dark:bg-zinc-800 p-3 text-sm text-red-500 break-words">
            {error.message}
          </div>
        )}

        {/* Retry Button */}
        <Button
          color="warning"
          size="lg"
          radius="full"
          startContent={<FiRefreshCw />}
          onPress={() => reset()}
          className="font-semibold"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}