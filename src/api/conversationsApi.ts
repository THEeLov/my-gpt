import axios from "axios";
import { Conversation, ConversationWithMessages } from "../types";
import { attachAuthHeader } from "../utils/attackAuthHeader";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/conversations",
});

attachAuthHeader(axiosInstance);

export const getUserConversations = async (
  userId: string,
): Promise<Conversation[]> => {
  const resp = await axiosInstance.get(`/user/${userId}`);
  return resp.data;
};

export const getConversationMessages = async (
  conversationId: string | null,
): Promise<ConversationWithMessages | null> => {
  if (conversationId === null) {
    return null;
  }
  const resp = await axiosInstance.get(`/${conversationId}`);
  return resp.data;
};