import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: ({ search }) => ({
        url: `/user?search=${search || ""}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
