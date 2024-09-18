'use client'

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AllMessageList from "./AllMessageList";
import GroupChat from "./GroupChat";
import Contacts from "./Contacts";
import { HiOutlineSearch } from "react-icons/hi";

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children} {/* Directly render children here */}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MessageList() {
  const [value, setValue] = React.useState(0);
  const [search,setSearch] = React.useState('')
  console.log(search)

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <>

      <h3 className="text-xl mb-2 font-semibold">Message</h3>
      <div className="searchChat">
        <HiOutlineSearch size={25} />{" "}
        <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" />
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ display: 'block' }}
          >
            <Tab label="All Message" {...a11yProps(0)} />
            <Tab label="Group Chat " {...a11yProps(1)} />
            <Tab label="Contacts" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AllMessageList search={search}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <GroupChat />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Contacts />
        </CustomTabPanel>
      </Box>
    </>
  );
}
