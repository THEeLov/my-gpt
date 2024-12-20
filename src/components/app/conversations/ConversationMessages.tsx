import useAuthData from "@/hooks/useAuthData";
import { useUserConversationMessages } from "@/hooks/useConversations";
import { Spinner } from "@/components/ui/spinner";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import Markdown from 'markdown-to-jsx'

const ConversationMessages = () => {
  const { user } = useAuthData();
  const { conversationId: openConversationId } = useParams();

  const { data: openedConversation, isLoading } =
    useUserConversationMessages(openConversationId);

  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({block: "end"});
    }
  }, [openedConversation]);

  // When theres no conversation opened just welcome user
  if (openConversationId === undefined) {
    return (
      <div className="flex-grow w-full flex justify-center items-center flex-col gap-4 text-5xl select-none fade-in-animation h-full">
        <h1 className="font-bold">Hi {user?.username} 👋</h1>
        <h2 className="font-thin"> What can i help you with ?</h2>
      </div>
    );
  }

  if (isLoading) {
    return <Spinner size="medium" />;
  }

  return (
    <div className="flex flex-col gap-10 text-xl">
      {openedConversation!.messages.map((message, index) => (
        <div
          key={message.id}
          ref={
            index === openedConversation!.messages.length - 1
              ? lastMessageRef
              : null
          }
          className={`p-4 rounded-md max-w-3xl mb-2 ${
            message.user.id === user!.id
              ? "userMessage self-end"
              : "chatMessage self-start"
          }`}
        >
          <Markdown className="markdown-content">{message.message}</Markdown>
          <div className="text-sm text-gray-400">
            {new Date(message.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationMessages;
