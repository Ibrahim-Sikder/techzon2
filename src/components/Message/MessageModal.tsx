/* eslint-disable no-unused-vars */
"use client";
import logo from "../../assets/icon/chat.png";
import Image from "next/image";
import { VscClose } from "react-icons/vsc";
import { IoClose, IoLinkOutline } from "react-icons/io5";
import { Box, Input, List, ListItem, ListItemText, Paper, Button } from '@mui/material';
import { Send } from "@mui/icons-material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";


type TProps = {
  close: () => void;
};

const MessageModal = ({ close }: TProps) => {

  const iconStyle = { fontSize: '28px', background: '#2251CF', color: '#fff', padding: '5px', borderRadius: '8px' }

  return (
    <div className="w-[300px] md:w-[360px] md:h-[600px] h-[400px]  bg-white fixed right-0 md:right-1 bottom-14  rounded-2xl text-black shadow-xl z-[9999999999999999] overflow-hidden shadowStyle">
      <div className="flex flex-col justify-between h-full ">
        <div className="bg-[#2251CF] w-full h-[120px] text-white flex justify-center items-center ">
          <VscClose
            className="transition ease-in-out delay-75  cursor-pointer absolute right-4 top-4"
            onClick={close}
            size={30}
          />
          <div className="flex items-center">
            <div>
              <div className="flex flex-col text-center justify-center  items-center">
                <Image
                  src={logo}
                  width={30}
                  className="rounded-full"
                  alt="logo"
                  height={100}
                />
                Ibrahim Sikder
              </div>
            </div>
          </div>
        </div>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            p: 1,
            backgroundColor: "#fafafa",
          }}
        >


        </Box>

        <div className=" w-full h-24 bg-white flex pl-3  items-center border-t-[#ddd] border-[2px] ">
          <form className="flex flex-col items-start ">
            <div className="flex items-center justify-between w-[300px] md:w-[330px] ">
              <input
                type="text"
                placeholder="Compose your message...."
                className="w-[100%] bg-transparent  h-10 placeholder:text-[14px] "

              />
              <Button type="submit"> <Send sx={iconStyle} /></Button>
            </div>
            <div className="pb-2 flex space-x-2 items-center text-[#707584] ">
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  const file =
                    (e.target as HTMLInputElement).files?.[0] || null;

                }}
                style={{ display: "none" }}

              />


              <GraphicEqIcon className=" chatIcon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;