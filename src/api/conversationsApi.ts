import axios from "axios";
import { Conversation, ConversationWithMessages } from "../types";
import { attachAuthHeader } from "../utils/attackAuthHeader";

const axiosInstance = axios.create({
  baseURL: "https://my-gpt-backend-production.up.railway.app/api/conversations",
});

attachAuthHeader(axiosInstance);

export const getUserConversations = async (
  userId: string,
): Promise<Conversation[]> => {
  const resp = await axiosInstance.get(`/user/${userId}`);
  return resp.data;
};

export const getConversationMessages = async (
  conversationId: string | undefined,
): Promise<ConversationWithMessages | null> => {
  if (conversationId === undefined) {
    return null;
  }
  const resp = await axiosInstance.get(`/${conversationId}`);
  return resp.data;
};