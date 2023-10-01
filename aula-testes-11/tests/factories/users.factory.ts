import prisma from "database";
import { Prisma, User } from "@prisma/client";

type UserInput = Prisma.UserCreateInput;

export function createUserInput(email: string, password: string): UserInput {
  return {
    email,
    password,
  };
}

export async function buildUser(user: UserInput): Promise<User> {
  return await prisma.user.create({ data: user });
}
