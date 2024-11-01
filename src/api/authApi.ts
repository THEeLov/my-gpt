import axios from "axios";

import { SignInData, SignInUser, SignUpUser } from "../types";

const axiosInstance = axios.create({
  baseURL: "https://my-gpt-backend-mauve.vercel.app/api/auth",
});

export const signInUser = async (data: SignInUser): Promise<SignInData> => {
  const resp = await axiosInstance.post("/signin", data);
  return resp.data;
};

export const signUpUser = async (data: SignUpUser): Promise<SignInData> => {
  const resp = await axiosInstance.post("/signup", data);
  return resp.data;
};