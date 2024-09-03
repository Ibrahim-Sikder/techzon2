import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        data,
      }),
    }),

    getAllUsers: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetAllUsersQuery, useLoginMutation } = userApi;
