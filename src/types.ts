export type SignInData = {
  authToken: string;
  user: User;
};

export type Token = Omit<SignInData, "user">;

export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
};