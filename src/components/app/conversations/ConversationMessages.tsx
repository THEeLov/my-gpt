import useAuthData from "@/hooks/useAuthData";

const ConversationMessages = () => {

  const { user } = useAuthData();

  return (
    <div className="flex-grow w-full flex justify-center items-center flex-col gap-4 text-5xl select-none fade-in-animation">
      <h1 className="font-bold">
        Hi {user?.username} 👋
      </h1>
      <h2 className="font-thin"> What can i help you with ?</h2>
    </div>
  )
}

export default ConversationMessages