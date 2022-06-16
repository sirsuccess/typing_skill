import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const TextArea = ({ id, label, typedText, action,  isDisable}) => {
  return (
    <TextField
    id={id}
    label={label}
    fullWidth
    variant="outlined"
    multiline
    maxRows={10}
    minRows={4}
    defaultValue={typedText}
    sx={{
      backgroundColor: "#fff",
      marginTop: "1rem",
    }}
    onChange={(e) => action(e.target.value)}
    disabled={isDisable}
  />
  );
};
export default TextArea;
