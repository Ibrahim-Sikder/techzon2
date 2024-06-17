// components/StateCreate.tsx
"use client";

import TECForm from "@/components/Forms/Form";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { FieldValues } from "react-hook-form";

import dynamic from "next/dynamic";
import { joditConfig } from "@/config";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreateCity = () => {
  const editor = useRef<any | null>(null);
  const [content, setContent] = useState<string>("");

  const submitHandler = async (values: FieldValues) => {
    const cityData = {
      ...values,
      content: content,
    };
    // Handle form submission here, e.g., send data to the server
  };

  return (
    <Box
      sx={{
        width: "1000px",
        mx: "auto",
        marginTop: "30px",
        overflow: "hidden",
      }}
    >
      <Typography fontWeight="bold" variant="h5" textAlign="center">
        Jodi Editor
      </Typography>
      <TECForm onSubmit={submitHandler}>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: 1, justifyContent: "center" }}
        >
          <Grid item xs={12}>
            <JoditEditor
              ref={editor}
              value={content}
              config={joditConfig}
              // Ensure onBlur and onChange do not interfere with SpeechRecognition
              onBlur={(newContent: string) => setContent(newContent)}
              onChange={(newContent: string) => setContent(newContent)}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Create Now
            </Button>
          </Grid>
        </Grid>
      </TECForm>
    </Box>
  );
};

export default CreateCity;
