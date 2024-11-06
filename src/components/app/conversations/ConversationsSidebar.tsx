import useAuthData from "@/hooks/useAuthData";
import { useUserConversations } from "@/hooks/useConversations";
import ConversationCard from "./ConversationCard";
import { GroupedConversations } from "@/types";
import { groupConversationsByDate } from "@/utils/groupConversationByDate";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ConversationsSidebar = () => {
  const navigate = useNavigate();

  const { user } = useAuthData();
  const { data: conversations, isLoading } = useUserConversations(user!.id);

  const groupedConversations: GroupedConversations = conversations
    ? groupConversationsByDate(conversations)
    : new Map();

  return (
    <div className="flex flex-col text-white p-4 h-full">
      <div className="flex gap-4 text-3xl">
        <p className="font-bold select-none mb-4">Conversations</p>
        <Button type="button" variant="default" onClick={() => navigate("/")}><FaPlus/></Button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : conversations?.length === 0 ? (
        <p>You have no conversations yet.</p>
      ) : (
        <div className="flex-grow overflow-auto flex flex-col gap-8">
          {[...groupedConversations.entries()].map(([label, convos]) => (
            <div key={label}>
              <p className="text-lg font-light mb-4">{label}</p>
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
