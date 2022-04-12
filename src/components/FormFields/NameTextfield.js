import TextField from '@mui/material/TextField';
import React from "react";

const NameTextfield = ({handleNameChange, name}) => {
    return (
        <TextField
              required
              id="filled-required"
              label="Name"
              variant="outlined"
              size="small"
              value={name} 
              onChange={handleNameChange}
            />
    );
};

export default NameTextfield;

