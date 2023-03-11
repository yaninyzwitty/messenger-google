import React from "react";
import ChatInput from "../components/ChatInput";
import MessagesList from "../components/MessageList";

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());
  const messages: Message[] = data.messages;
  return (
    <div className="">
      {/* dark:bg-gray-800 h-full */}
      <MessagesList initialMessages={messages} />
      <ChatInput />
    </div>
  );
}

export default HomePage;
