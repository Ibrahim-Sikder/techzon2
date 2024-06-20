/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef, useState } from "react";
import { Autocomplete, Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TECForm from "@/components/Forms/Form";
import TECModal from "@/components/shared/TECModal/TECModal";
import TECInput from "@/components/Forms/Input";
import TECSelect from "@/components/Forms/Select";
import {
  Gender,
  color,
  productBrands,
  productCategories,
  productSizes,
  productTags,
} from "@/types";
import TECTextArea from "@/components/Forms/TextArea";

import dynamic from "next/dynamic";
import { joditConfig } from "@/config";
import TECAutoComplete from "@/components/Forms/AutoComplete";
import TECMultipleAutoComplete from "@/components/Forms/MultipleAutoComplete";
import Tags from "@/components/Forms/MultipleAutoComplete";
import TECMultipleAutoCompleteValue from "@/components/Forms/MultipleAutoComplete";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const userSchema = z.object({
  name: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  }),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password required"),
  dob: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date of birth"),
  gender: z.enum(["male", "female", "others"], {
    message: "Gender must be 'male', 'female', or 'others'",
  }),
  role: z.enum(["admin", "manager", "editor"], {
    message: "Role must be 'admin', 'manager', or 'editor'",
  }),
  department: z
    .array(
      z.enum(["content", "hotel", "restaurant"], {
        message: "Department must be 'content', 'hotel', or 'restaurant'",
      })
    )
    .min(1, "At least one department must be selected"),
});

const defaultValues = {
  name: { firstName: "", lastName: "" },
  phone: "",
  email: "",
  dob: "",
  gender: "male",
  role: "editor",
  department: [],
};

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const textAreaStyle = {
  border: "1px solid #111",
  width: "100%",
  borderRadius: "5px",
  resize: "none",
  padding: "10px",
};

const CreateProductModal = ({ open, setOpen }: TProps) => {
  const submitHandler = async (values: FieldValues) => {
    console.log(values);
  };
  const editor = useRef<any | null>(null);
  const [content, setContent] = useState<string>("");

  return (
    <TECModal open={open} setOpen={setOpen} title="Create a new product">
      <TECForm
        onSubmit={submitHandler}
        // resolver={zodResolver(userSchema)}
        // defaultValues={defaultValues}
      >
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6} md={6}>
            <TECInput
              name="name"
              size="medium"
              label="Product Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECInput
              name="price"
              size="medium"
              label="Price"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECInput
              name="discount_price"
              size="medium"
              label="Discount Price "
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECMultipleAutoCompleteValue
              name="tags"
              label="Tags"
              fullWidth
              options={productTags}
              multiple
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECMultipleAutoCompleteValue
              name="category"
              label="Category"
              fullWidth
              options={productCategories}
              multiple
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECSelect
              items={productBrands}
              name="brand"
              label="Brand"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECInput
              name="stock"
              size="medium"
              label="Stock Quantity  "
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECInput name="slug" size="medium" label="Slug" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECSelect
              items={color}
              name="color"
              size="medium"
              label="Color"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECSelect
              items={productSizes}
              name="size"
              size="medium"
              label="Size"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item>
          <TECTextArea
            placeholder="Short Description"
            minRows={3}
            name="description"
            sx={textAreaStyle}
          />
        </Grid>
        <Grid item>
          <JoditEditor
            ref={editor}
            value={content}
            config={joditConfig}
            // Ensure onBlur and onChange do not interfere with SpeechRecognition
            onBlur={(newContent: string) => setContent(newContent)}
            onChange={(newContent: string) => setContent(newContent)}
          />
        </Grid>
        <Typography
          variant="h6"
          sx={{ marginTop: "20px", textAlign: "center" }}
        >
          SEO Information{" "}
        </Typography>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6} md={6}>
            <TECInput
              name="meta_name"
              size="medium"
              label="Meta Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TECInput
              name="meta_keywords"
              size="medium"
              label=" Meta Keywords"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item>
          <TECTextArea
            placeholder="Meta Description"
            minRows={3}
            name="meta_description"
            sx={textAreaStyle}
          />
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Create a Product
          </Button>
        </Box>
      </TECForm>
    </TECModal>
  );
};

export default CreateProductModal;
