import React, { createContext, useState } from "react";

  export interface SelectedConversationContextType {
    openConversationId: string | null;
    handleConversationSwap: (conversationId: string) => void
  }

  export const SelectedConversationContext = createContext<SelectedConversationContextType | undefined>(
    undefined,
  );

  export const SelectedConversationContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    
    const [openConversationId, setOpenConversationId] = useState<string | null>(null);
    
    const handleConversationSwap = (conversationId: string) => {
      setOpenConversationId(conversationId);
    }

    return (
      <SelectedConversationContext.Provider value={{openConversationId, handleConversationSwap }}>
        {children}
      </SelectedConversationContext.Provider>
    );
  };