import useAuthData from "@/hooks/useAuthData";
import { useUserConversations } from "@/hooks/useConversations";
import ConversationCard from "./ConversationCard";
import { GroupedConversations } from "@/types";
import { groupConversationsByDate } from "@/utils/groupConversationByDate";

const ConversationsSidebar = () => {
  const { user } = useAuthData();
  const { data: conversations, isLoading } = useUserConversations(user!.id);

  const groupedConversations: GroupedConversations = conversations ? groupConversationsByDate(conversations) : new Map();

  return (
    <div className="flex flex-col text-white p-4 h-full">
      <p className="font-bold text-2xl select-none mb-4">Conversations</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : conversations?.length === 0 ? (
        <p>You have no conversations yet.</p>
      ) : (
        <div className="flex-grow overflow-auto">
          {[...groupedConversations.entries()].map(([label, convos]) => (
            <div key={label}>
              <p className="text-lg font-thin mb-2">{label}</p>
              {convos.map((conversation) => (
                <ConversationCard
                  key={conversation.id}
                  conversation={conversation}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversationsSidebar;
