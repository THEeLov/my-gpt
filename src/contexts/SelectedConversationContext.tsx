import React, { createContext, useState } from "react";

  export interface SelectedConversationContextType {
    openConversationId: string | null;
    handleChatSwap: (conversationId: string, receiverId: string) => void
  }

  export const SelectedConversationContext = createContext<SelectedConversationContextType | undefined>(
    undefined,
  );

  export const SelectedConversationContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    
    const [openConversationId, setOpenConversationId] = useState<string | null>(null);
    
    const handleChatSwap = (conversationId: string) => {
      setOpenConversationId(conversationId);
    }

    return (
      <SelectedConversationContext.Provider value={{openConversationId, handleChatSwap }}>
        {children}
      </SelectedConversationContext.Provider>
    );
  };