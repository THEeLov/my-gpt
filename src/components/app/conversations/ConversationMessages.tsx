import useAuthData from "@/hooks/useAuthData";
import { useConverstationContext } from "@/hooks/useConversationContext";
import { useUserConversationMessages } from "@/hooks/useConversations";
import { Spinner } from "@/components/ui/spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const ConversationMessages = () => {
  const { user } = useAuthData();
  const { openConversationId } = useConverstationContext();

  const { data: openedConversation, isLoading } =
    useUserConversationMessages(openConversationId);

  console.log(openedConversation);

  // When theres no conversation opened just welcome user
  if (openConversationId === null) {
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
    <div className="">
      {openedConversation?.messages.map((message) => (
        <div
          key={message.id}
          className="p-4 bg-gray-800 text-white rounded-md w-full max-w-md"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.message}
          </ReactMarkdown >
          <span className="text-sm text-gray-400">
            {new Date(message.createdAt).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ConversationMessages;
