// /* eslint-disable react/no-unescaped-entities */
// 'use client'

// import "./Message.css";
// import chat from "../../../assets/chat/avatar.jpg";
// import user from "../../../assets/chat/avatar.jpg";
// import {
//   HiDotsVertical,
//   HiOutlineEmojiSad,
//   HiOutlineHome,
//   HiOutlinePhone,
//   HiOutlinePhotograph,
//   HiOutlineSearch,
// } from "react-icons/hi";
// import { HiOutlineVideoCamera } from "react-icons/hi";
// import { IoMdLink } from "react-icons/io";
// import { LuSendHorizonal } from "react-icons/lu";
// import MessageList from "./MessageList";
// import Image from "next/image";
// import { useGetAllUsersQuery } from "@/redux/api/userApi";
// import { useState } from "react";
// import profile from '../../../assets/icon/profile.png';
// import { Chat } from "@mui/icons-material";
// import Conversation from "./Conversation";

// export type TUser = {
//   _id: string;
//   name: string;
//   image: string;
// };

// interface AllMessageListProps {
//   search: string;
// }


// const Message = () => {
//   const [search, setSearch] = useState('')
//   const [selectedUser, setSelectedUser] = useState<TUser | null>(null);
//   const { data: userData, isLoading } = useGetAllUsersQuery({ search });

//   if (isLoading) {
//     return <p>Loading.....</p>;
//   }
//   return (
//     <div className="bg-[#EFF3F9] p-5 xl:px-20 lg:px-10">
//       <div className="flex items-center justify-between flex-wrap gap-3">
//         <h3 className="text-3xl font-semibold">Chat</h3>
//         <div className="flex items-center space-x-3">
//           <div className="flex items-center">
//             <HiOutlineHome className="text-[#0F79F3] size-5 mr-1" />
//             <span>Dashboard</span>
//           </div>
//           <span>App</span>
//           <span>Chat</span>
//         </div>
//       </div>
//       <div className="messageWraps flex lg:flex-row flex-col justify-between gap-5 mt-5">
//         <div className="messageLeftSide ">
//           <div className="searchChat">
//             <HiOutlineSearch size={25} />{" "}
//             <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" />
//           </div>
//           <hr />

//           <div className="messageList">
//             <div className="space-y-3">
//               {userData?.data?.map((user: TUser, i: number) => (
//                 <div
//                   key={user._id}
//                   className={`userMessageList ${i === 0 ? "bg-[#F7F7F7]" : ""} cursor-pointer`}
//                   onClick={() => setSelectedUser(user)}
//                 >
//                   <div className="flex  flex-wrap gap-3 items-center">
//                     <Image
//                       src={user.image || profile}
//                       className="h-10 w-10 rounded-full"
//                       alt="user"
//                     />
//                     <div className="ml-2">
//                       <h3 className="text-sm">{user.name}</h3>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="messageRightSide">
//           <div className="chatBox">
//             {
//               selectedUser ? (
//                 <Conversation user={selectedUser} />
//               ) : (
//                 <p>Select a user to start a conversation</p>
//               )
//             }
//           </div>
//         </div>
//       </div>
//       <div className="p-5"></div>
//     </div>
//   );
// };

// export default Message;
import React from 'react';

const Message = () => {
  return (
    <div>
      <h4>user </h4>
    </div>
  );
};

export default Message;