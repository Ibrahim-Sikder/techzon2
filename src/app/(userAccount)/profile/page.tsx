import user from "../../../assets//images/user.jpg";
import Image from "next/image";

import "./profile.css";
import Container from "@/components/shared/Container";

const MyAccount = () => {
  return (
    <Container className="">
      <div className="mt-10 account">
        <div className="flex items-center justify-center">
          <Image className="w-32 h-32 rounded-full" src={user} alt="user" />
          <div className="ml-2">
            <h3 className="text-3xl font-bold">MR Khan</h3>
            <span>softypy@gmail.com</span>
          </div>
        </div>
        <div className="mt-5 flex items-center jsutify-between w-full">
          <input className="accountInput" placeholder="First Name" />
          <input className="accountInput" placeholder="Last Name" />
        </div>
        <div>
          <input className="accountInput2" placeholder="Email Address" />
        </div>
        <div className="mt-5">
          <h3 className="text-3xl font-bold">Change Password </h3>
          <input className="accountInput2" placeholder="Current Password" />
        </div>
        <div>
          <input className="accountInput2" placeholder="New Password" />
        </div>
        <div>
          <input className="accountInput2" placeholder="Confirm Password" />
        </div>
        <div className="mt-3">
          <button className="shopBtn accountBtn">Update Your Account </button>
        </div>
      </div>
    </Container>
  );
};

export default MyAccount;
