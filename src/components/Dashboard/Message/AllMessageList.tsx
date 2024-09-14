import user from "../../../assets/chat/chat.jpg";

import Image from "next/image";
const AllMessageList = () => {
  const messageData = [
    {
      id: 0,
      image: user,
      name: "Rakibul Hasan",
      message: "Typing.....",
      time: "Just Now",
    },

 
   
  ];

  return (
    <div>
      <div className="messageList">
        <div className="space-y-3">
          {messageData.map((data, i) => (
            <div
              key={data.id}
              className={`userMessageList ${i === 0 ? "bg-[#F7F7F7]" : ""}`}
            >
              <div className="flex  flex-wrap gap-3 items-center">
                <Image
                  src={data.image}
                  className="h-10 w-10 rounded-full"
                  alt="user"
                />
                <div className="ml-2">
                  <h3 className="text-sm">{data.name} </h3>
                  <small className="text-[#0DC143]">{data.message}</small>
                </div>
              </div>
              <span>{data.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMessageList;
