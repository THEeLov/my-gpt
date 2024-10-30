import { Conversation } from "@/types";
import { useNavigate, useParams } from "react-router-dom";

const ConversationCard = ({ conversation }: { conversation: Conversation }) => {
  const navigate = useNavigate();
  const { conversationId } = useParams();

  return (
    <div
      className={`rounded-md p-2 conversationCard cursor-pointer mb-2 ${conversation.id === conversationId ? "activeConversation" : ""}`}
      onClick={() => navigate(`/${conversation.id}`)}
    >
      <p className="truncate font-thin">{conversation.name}</p>
    </div>
  );
};

export default ConversationCard;
