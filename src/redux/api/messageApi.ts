import { getCookie } from "@/helpers/axios/Cookies";
import { baseApi } from "./baseApi";

export const messageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMessages: build.query({
      query: ({ senderId, chatUserId }) => ({
        url: `/message/get/${chatUserId}`,
        method: "GET",
      }),
    }),
    sendMessages: build.mutation({
      query: (data) => ({
        url: `/message/send/${data.id}`,
        method: "POST",
        data:data.body
      }),
    }),
    
    
    
    
  }),
});

export const { useGetAllMessagesQuery, useSendMessagesMutation } = messageApi;
