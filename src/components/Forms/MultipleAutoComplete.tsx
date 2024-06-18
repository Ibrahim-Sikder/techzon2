import { SxProps } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

type Option = {
  label: string;
};

type ControlledAutocompleteProps = {
  name: string;
  label?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
  options: Option[];
  size?: "small" | "medium";
  margin?: "none" | "normal" | "dense";
  multiple?: boolean;
};

const TECMultipleAutoCompleteValue = ({
  name,
  label = "Movie",
  fullWidth = false,
  sx,
  required,
  options,
  size = "small",
  margin = "normal",
  multiple = false,
}: ControlledAutocompleteProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          freeSolo
          {...field}
          multiple={multiple}
          disablePortal
          options={options}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          sx={{
            width: fullWidth ? "100%" : 300,
            "& .MuiAutocomplete-listbox": {
              maxHeight: 200,
              overflow: "auto",
            },
            ...sx,
          }}
          onChange={(_, newValue) => field.onChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              fullWidth={fullWidth}
              margin={margin}
              required={required}
              error={!!error}
              helperText={error?.message}
              sx={{
                width: fullWidth ? "100%" : 300,
                mx: fullWidth ? 0 : "auto",
              }}
            />
          )}
        />
      )}
    />
  );
};

export default TECMultipleAutoCompleteValue;
