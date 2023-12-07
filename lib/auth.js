import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export const getAuthSession = async() => {
  const session = await getServerSession(authConfig);
  return session
};

export const getRequiredAuthSession = async () => {
  const session = await getServerSession(authConfig);

  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session;
};