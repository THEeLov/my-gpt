export type SignInData = {
  authToken: string;
  user: User;
};

export type Token = Omit<SignInData, "user">;

export type User = {
  id: string;
  username: string;
  email: string;
};

export type SignInUser = {
  email: string;
  password: string;
}

export type SignUpUser = SignInUser & {
  username: string;
  confirmPassword: string;
}

export type Conversation = {
  id: string;
  name: string;
  createdAt: Date;
}