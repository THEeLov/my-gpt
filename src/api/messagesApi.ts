import axios from "axios";
import { attachAuthHeader } from "../utils/attackAuthHeader";
import { MessageSchemaType } from "@/validation/zodSchemas";

const axiosInstance = axios.create({
  baseURL: "https://my-gpt-backend-production.up.railway.app/api/messages",
  timeout: 60000
});

attachAuthHeader(axiosInstance);

export const postMessegeToConversation = async (
  conversationId: string,
  message: MessageSchemaType
): Promise<string> => {
  const resp = await axiosInstance.post(`/${conversationId}`, message);
  return resp.data;
};

export const postMessageToNewConversation = async (
  message: MessageSchemaType
): Promise<string> => {
  const resp = await axiosInstance.post("", message);
  return resp.data;
};
