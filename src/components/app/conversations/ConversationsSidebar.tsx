import useAuthData from "@/hooks/useAuthData";
import { useUserConversations } from "@/hooks/useConversations";
import ConversationCard from "./ConversationCard";

const ConversationsSidebar = () => {
  const { user } = useAuthData();
  const { data: conversations, isLoading } = useUserConversations(user!.id);

  return (
    <div className="flex flex-col text-white p-4 h-full">
      <p className="font-bold text-2xl select-none mb-4">Conversations</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : conversations?.length === 0 ? (
        <p>You have no conversations yet.</p>
      ) : (
        <div className="flex-grow overflow-auto">
          {conversations!.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversationsSidebar;
