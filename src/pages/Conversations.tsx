import ConversationMessages from "@/components/app/conversations/ConversationMessages";
import ConversationsSidebar from "@/components/app/conversations/ConversationsSidebar";
import MessageForm from "@/forms/MessageForm";

const Conversations = () => {
  return (
    <div className="w-full flex">
      {/* User's list of conversations */}
      <div className="w-96 conversationSidebar">
        <ConversationsSidebar />
      </div>

      {/* User's current opened conversation */}
      <div className="flex flex-col flex-grow text-white p-4 justify-between items-center gap-5">
        {/* Scrollable messages container */}
        <div className="overflow-auto flex-grow w-3/4 h-2">
          <ConversationMessages />
        </div>

        {/* Fixed position for MessageForm at the bottom */}
        <MessageForm />
      </div>
    </div>
  );
};

export default Conversations;
