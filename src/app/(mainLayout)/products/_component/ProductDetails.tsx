import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import headphone from "../../../../assets/images/headphone/headphone.jpg";
import Image from "next/image";

export default function ProductDetails() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Accessories" value="1" />
            <Tab label="Description" value="2" />
            <Tab label="Specification " value="3" />
            <Tab label="Reviews" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2">
          <div>
            <h2> Perfectly Done</h2>
            <p>
              Praesent ornare, ex a interdum consectetur, lectus diam sodales
              elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem
              semper viverra. In lobortis egestas massa. Nam nec massa nisi.
              Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat.
              Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices
              dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus,
              non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt
              eu.
            </p>
          </div>
          <div className="grid grid-cols-2 gap  items-center">
            <div className="space-y-8">
              <div>
                <h3> Wireless</h3>
                <p className="text-[#747474] text-sm mt-3">
                  {" "}
                  Fusce vitae nibh mi. Integer posuere, libero et ullamcorper
                  facilisis, enim eros tincidunt orci, eget vestibulum sapien
                  nisi ut leo. Cras finibus vel est ut mollis. Donec luctus
                  condimentum ante et euismod.
                </p>
              </div>
              <div>
                <h3> Fresh Design</h3>
                <p className="text-[#747474] text-sm mt-3 ">
                  Integer bibendum aliquet ipsum, in ultrices enim sodales sed.
                  Quisque ut urna vitae lacus laoreet malesuada eu at massa.
                  Pellentesque nibh augue, pellentesque nec dictum vel, pretium
                  a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper
                  massa.
                </p>
              </div>
              <div>
                <h3> Fabolous Sound</h3>
                <p className="text-[#747474] text-sm mt-3 ">
                  Cras rutrum, nibh a sodales accumsan, elit sapien ultrices
                  sapien, eget semper lectus ex congue elit. Nullam dui elit,
                  fermentum a varius at, iaculis non dolor. In hac habitasse
                  platea dictumst.
                </p>
              </div>
            </div>

            <Image alt="headphone" width={500} height={200} src={headphone} />
          </div>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
