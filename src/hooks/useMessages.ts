import { postMessageToNewConversation, postMessegeToConversation } from "@/api/messagesApi";
import { MessageSchemaType } from "@/validation/zodSchemas";
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useSendMessageToConversation = (conversationId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (message: MessageSchemaType) => postMessegeToConversation(conversationId, message),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["conversations"]})
      queryClient.invalidateQueries({queryKey: ["conversationMessages"]})
    }
  })
}

export const useSendMessageToNewMessage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (message: MessageSchemaType) => postMessageToNewConversation(message),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["conversations"]})
      queryClient.invalidateQueries({queryKey: ["conversationMessages"]})
    }
  })
}