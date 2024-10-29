import { useConverstationContext } from "@/hooks/useConversationContext";
import { Conversation } from "@/types";

const ConversationCard = ({ conversation }: { conversation: Conversation }) => {
  const { handleConversationSwap } = useConverstationContext();

  return (
    <div
      className="rounded-md p-2 conversationCard cursor-pointer mb-2"
      onClick={() => handleConversationSwap(conversation.id)}
    >
      <p className="truncate font-thin">{conversation.name}</p>
    </div>
  );
};

export default ConversationCard;
