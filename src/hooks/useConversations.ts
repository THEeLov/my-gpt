import { getUserConversations } from "@/api/conversationsApi";
import { useQuery } from "@tanstack/react-query";

export const useUserConversations = (userId: string) => {
  return useQuery({
    queryKey: ["conversations", userId],
    queryFn: () => getUserConversations(userId)
  })
}