import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;
  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          src={message.profilePic}
          height={100}
          width={500}
          className="mx-2 object-cover rounded-full h-12 w-12 xl:h-14 xl:w-14 2xl:w-16 2xl:h-16"
          alt={message.username}
        />
      </div>
      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px]  ${
            isUser ? "text-blue-400 text-right" : "text-red-400 text-left"
          }`}
        >
          {message.username}
        </p>
      </div>
      <div className="flex items-end">
        <div
          className={`px-3 py-2 rounded-lg w-fit text-white ${
            isUser ? "bg-blue-400 ml-auto order-2" : "bg-red-400"
          }`}
        >
          {message.message}
        </div>
        {/* change into time-ago */}
        <p
          className={`text-[0.65rem] italic px-2 text-gray-300 ${
            isUser && "text-right"
          }`}
        >
          {new Date(message.created_at).toLocaleString()}

          {/* <LiveTimestamp time={message.created_at} /> */}
        </p>
      </div>
    </div>
  );
}

export default MessageComponent;
