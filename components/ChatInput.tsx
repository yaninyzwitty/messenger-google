"use client";
import useSWR from "swr";
import { v4 as uuid } from "uuid";

import { FormEvent, useState } from "react";
import fetcher from "../utils/fetcher";
import { useSession } from "next-auth/react";

function ChatInput() {
  const { data: session } = useSession();

  const {
    data: messages,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/getMessages", fetcher);
  const [input, setInput] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const messageToSend = input;
    setInput("");
    const id = uuid();
    const message: Message = {
      id,
      username: session?.user?.name!,
      email: session?.user?.email!,
      created_at: Date.now(),
      message: messageToSend,
      profilePic: session?.user?.image!,
    };
    console.log(message);

    const uploadToUpstash = async () => {
      const data = await fetch(`/api/addMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then((res) => res.json());

      return [data.message, ...messages!];

      // const message: Message[] = data.message;

      // console.log("Message Added>>", data);
    };

    await mutate(uploadToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  // use ref

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 z-50 flex items-center justify-between px-10 py-5 w-full bg-white border-gray-400 border-t space-x-5"
    >
      <input
        type="text"
        // disabled={!email}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Message here!!"
        className="flex-1 border border-gray-300 focus:outline-none px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed rounded-md disabled:opacity-50"
      />
      <button
        type="submit"
        className="rounded-md px-5 py-3 bg-blue-500 disabled:bg-blue-300 text-white"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
