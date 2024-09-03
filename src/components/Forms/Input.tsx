import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  type?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  margin?: "none" | "normal" | "dense";
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TECInput = ({
  name,
  label,
  size = "small",
  type = "text",
  fullWidth,
  sx,
  disabled,
  placeholder,
  required,
  variant = "outlined",
  margin = "normal",
  multiline = false,
  rows = 4,
  onChange,
  value
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange: fieldOnChange, value: fieldValue },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          onChange={onChange || fieldOnChange}
          type={type}
          label={label}
          size={size}
          variant={variant}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          placeholder={placeholder}
          required={required}
          margin={margin}
          error={!!error}
          helperText={error?.message}
          multiline={multiline}
          rows={rows}
          value={value || fieldValue}
          defaultChecked={
            formState.dirtyFields[name] ? formState.dirtyFields[name] : value
          }
          disabled={disabled}
        />
      )}
    />
  );
};

export default TECInput;
