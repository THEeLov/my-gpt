import { postMessageToNewConversation, postMessegeToConversation } from "@/api/messagesApi";
import { MessageSchemaType } from "@/validation/zodSchemas";
import { useMutation } from "@tanstack/react-query";

export const useSendMessageToConversation = (conversationId: string) => {
  return useMutation({
    mutationFn: (message: MessageSchemaType) => postMessegeToConversation(conversationId, message)
  })
}

export const useSendMessageToNewMessage = () => {
  return useMutation({
    mutationFn: (message: MessageSchemaType) => postMessageToNewConversation(message)
  })
}