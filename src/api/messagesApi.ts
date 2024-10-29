import axios from "axios";
import { ConversationWithMessages } from "../types";
import { attachAuthHeader } from "../utils/attackAuthHeader";
import { MessageSchemaType } from "@/validation/zodSchemas";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/messages",
});

attachAuthHeader(axiosInstance);

export const postMessegeToConversation = async (
  conversationId: string,
  message: MessageSchemaType
): Promise<ConversationWithMessages> => {
  const resp = await axiosInstance.post(`/${conversationId}`, message);
  return resp.data;
};

export const postMessageToNewConversation = async (
  message: MessageSchemaType
): Promise<ConversationWithMessages> => {
  const resp = await axiosInstance.post("", message);
  return resp.data;
};
