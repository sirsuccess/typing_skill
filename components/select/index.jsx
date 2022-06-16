import { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SelectComponent = ({ selectTime, setSelectTime,disabled }) => {
  const timeSelect = [1, 2, 5];
  return (
    <Autocomplete
      id="time"
      variant="outlined"
      size="big"
      freeSolo
      disabled={disabled}
      min={1}
      value={selectTime}
      options={timeSelect}
      onChange={(e, value) => {
        setSelectTime(value);
      }}
      sx={{
        "& .MuiSvgIcon-root": {
          color: "#000",
        },
        width: "150px",
        marginTop: "1rem",
      }}
      renderInput={(params) => (
        <TextField
          required
          fullWidth
          {...params}
          variant="outlined"
          id="time"
          name="time"
          label="time (minutes)"
          type="number"
          defaultValue={1}
          contentEditable={true}
          sx={{
            "& .MuiInputBase-root.MuiInput-root:before": {
              borderBottom: "1px solid rgba(255, 255, 255, 0.74)",
            },
            "& .MuiInputBase-root.MuiInput-root:after": {
              borderBottom: "1px solid rgba(255, 255, 255, 0.74)",
            },
            "& .MuiButtonBase-root.MuiMenuItem-root.Mui-selected": {
              backgroundColor: "#fff",
            },
          }}
        />
      )}
    />
  );
};
export default SelectComponent;
