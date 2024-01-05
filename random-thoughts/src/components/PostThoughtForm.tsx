"use client";

import React, { useState } from "react";
import { postMessage } from "../app/helpers/apiService"; // Adjust the import path

interface PostThoughtProps {
  userId: string;
}

const PostThoughtForm: React.FC<PostThoughtProps> = ({ userId }) => {
  const [messageContent, setMessageContent] = useState("");

  const handlePostMessage = async (messageContent: string) => {
    try {
      const newMessage = { ThoughtContent: messageContent, UserId: userId };
      await postMessage(newMessage);
    } catch (error) {
      console.error("Error posting message", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageContent.trim()) {
      handlePostMessage(messageContent);
      setMessageContent("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white overflow-hidden sm:rounded-lg p-8 shadow-lg"
    >
      <div className="w-full mb-4">
        <textarea
          id="messageContent"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="What’s happening?"
          className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={3}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="userId"
          className="text-sm font-semibold"
        >
          User ID:
        </label>
        <input
          type="text"
          id="userId"
          value={userId}
          readOnly
          className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-black hover:bg-blue-600 rounded-md shadow-sm"
      >
        Send
      </button>
    </form>
  );
};
export default PostThoughtForm;