import ConversationMessages from "@/components/app/conversations/ConversationMessages"
import ConversationsSidebar from "@/components/app/conversations/ConversationsSidebar"
import MessageForm from "@/forms/MessageForm"

const Conversations = () => {
  return (
    <div className="w-full flex">
      
      {/* User's list of conversations */}
      <div className="w-96 border-r-2 border-r-yellow-300 truncate">
        <ConversationsSidebar />
      </div>

      {/* User's current opened conversation */}
      <div className="flex flex-col text-white p-4 justify-between w-full items-center">
        <ConversationMessages />
        <MessageForm />
      </div>

    </div>
  )
}

export default Conversations