import React from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/system";

const CustomRadio = styled((props) => <Radio {...props} />)(
  ({ theme, color }) => ({
    "& .MuiSvgIcon-root": {
      display: "none",
    },
    "&.Mui-checked": {
      "& .MuiSvgIcon-root": {
        display: "none",
      },
      "& .custom-radio": {
        border: `2px solid ${theme.palette.primary.main}`, // Border color for checked state
        backgroundColor: "transparent", // Remove background color when checked
      },
    },
    "& .custom-radio": {
      width: 30,
      height: 30,
      borderRadius: 5,
      backgroundColor: color, // Background color for unchecked state
      border: "1px solid rgba(0, 0, 0, 0.54)", // Default border color
    },
  })
);

const ProductSize = () => {
  return (
    <div>
      <div className="flex items-center">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Size</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <FormControlLabel
              value="female"
              control={
                <CustomRadio
                  icon={<span className="custom-radio" />}
                  checkedIcon={<span className="custom-radio" />}
                />
              }
              label=""
            />
            <FormControlLabel
              value="male"
              control={
                <CustomRadio
                  icon={<span className="custom-radio" />}
                  checkedIcon={<span className="custom-radio" />}
                />
              }
              label=""
            />
            {/* Add more FormControlLabel for other options as needed */}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default ProductSize;
