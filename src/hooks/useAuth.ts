import { useMutation } from "@tanstack/react-query";

import { signInUser, signUpUser } from "../api/authApi";
import { SignInUser, SignUpUser } from "@/types";

export const useSignIn = () => {
  return useMutation({
    mutationFn: (payload: SignInUser) => signInUser(payload),
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: (payload: SignUpUser) => signUpUser(payload),
  });
};