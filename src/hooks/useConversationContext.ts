import { useContext } from "react";
import { SelectedConversationContext } from "../contexts/SelectedConversationContext";

export const useConverstationContext = () => {
  const context = useContext(SelectedConversationContext);
  if (!context) {
    throw new Error("Should not happen");
  }
  return context;
};