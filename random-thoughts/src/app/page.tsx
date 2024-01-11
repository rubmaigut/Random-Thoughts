"use client";

import { UserDetails } from "./dashboard/details";
import ThoughtList, { ThoughtCard } from "@/components/ThoughtList";
import { mockUser } from "./helpers/mockData";
import PostThoughtForm from "../components/PostThoughtForm";
import { useEffect, useState } from "react";
import { getMessages } from "./helpers/apiService";


export default function DashboardPage() {
  const [messages, setMessages] = useState<ThoughtCard[]>([]);
  const user = mockUser;

  useEffect(() => {
    getMessages()
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const handleNewMessage = (newMessage: ThoughtCard) => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };
  
  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
        <>
          <h1 className="text-3xl font-semibold text-black">
            👋 Hi, {user.firstName || `Stranger`}
          </h1>
          <div className="grid gap-4 mt-8 lg:grid-cols-3">
            <UserDetails />
          </div>
          <div>
            <div className="flex p-4">
              <h3 className="text-xl leading-6 font-semibold text-gray-900 my-auto">
                New Thought
              </h3>
            </div>
            <PostThoughtForm userId={user.firstName || "Developer"} onNewMessage={handleNewMessage}   />
            <ThoughtList messages= {messages} />
          </div>
        </>
    </div>
  );
}
