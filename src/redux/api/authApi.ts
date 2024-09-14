import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),
    verify: build.mutation({
      query: (data) => ({
        url: "/auth/verify",
        method: "PUT",
        body: data,
      }),
    }),

  }),
});

export const { useRegisterMutation, useLoginMutation, useVerifyMutation, } = authApi;
