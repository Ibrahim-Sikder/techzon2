'use server'


import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authKey } from "../constant/authkey";

export const setAccessToken = (token: string, option?: any) => {
  cookies().set(authKey, token);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};
