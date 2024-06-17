'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, SxProps } from '@mui/material';

type TRadioOption = {
  label: string;
  value: string;
};

type TRadioButtonProps = {
  name: string;
  label?: string;
  options: TRadioOption[];
  row?: boolean;
  sx?: SxProps;
  radioSx?: SxProps;  // For styling the Radio component
  labelSx?: SxProps;  // For styling the FormControlLabel component
};

const TECRadioButton = ({ name, label, options, row = false, sx, radioSx, labelSx }: TRadioButtonProps) => {
  const { control } = useFormContext();

  return (
    <FormControl component="fieldset" sx={sx}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RadioGroup {...field} row={row}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio sx={radioSx} />}
                label={option.label}
                sx={labelSx}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default TECRadioButton;
