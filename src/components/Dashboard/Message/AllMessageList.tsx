import { useGetAllUsersQuery } from "@/redux/api/userApi";
import user from "../../../assets/chat/chat.jpg";
import profile from '../../../assets/icon/profile.png';
import Image from "next/image";

export type TUser = {
  _id: string;
  name: string;
  image: string;
};

interface AllMessageListProps {
  search: string; // Explicitly type 'search' as a string
}

const AllMessageList: React.FC<AllMessageListProps> = ({ search }) => {
  const { data: userData, isLoading } = useGetAllUsersQuery({ search });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      <div className="messageList">
        <div className="space-y-3">
          {userData?.data?.map((data: TUser, i: number) => (
            <div
              key={data._id}
              className={`userMessageList ${i === 0 ? "bg-[#F7F7F7]" : ""}`}
            >
              <div className="flex  flex-wrap gap-3 items-center">
                <Image
                  src={data.image || profile}
                  className="h-10 w-10 rounded-full"
                  alt="user"
                />
                <div className="ml-2">
                  <h3 className="text-sm">{data.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMessageList;
