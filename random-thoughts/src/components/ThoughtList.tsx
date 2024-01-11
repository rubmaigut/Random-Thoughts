"use client";

import React, { useEffect, useState } from 'react';
import { getMessages } from '@/app/helpers/apiService';

 export interface ThoughtCard {
  id: string
  thoughtContent: string;
  likes: number;
  userId: string;
}

interface MessagesListProps {
  messages: ThoughtCard[]
}

const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {

  return (
    <div className="mt-4 space-y-4">
    {messages.map((message) => (
      <div key={message.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-gray-800 text-lg font-medium">{message.thoughtContent}</p>
            <div className="mt-2 text-sm text-gray-600">
              User ID: {message.userId}
            </div>
          </div>
          <button 
            className="ml-4 text-blue-500 hover:text-blue-600 transition-colors"
            aria-label={`Like message ${message.id}`}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 8.5l.01-.011M16.54 3C15.668 3 14.855 3.328 14.23 3.877L12 5.998l-2.23-2.121C9.095 3.328 8.282 3 7.41 3 5.609 3 4 4.573 4 6.335c0 1.76.609 3.165 1.77 4.385L12 18l6.23-7.28c1.161-1.22 1.77-2.625 1.77-4.385 0-1.762-1.609-3.335-3.46-3.335z" />
          </svg>
            <span className="ml-1">{message.likes}</span>
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default MessagesList;
