import React from "react";

import { useSnackbar } from "notistack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { styles } from ".";

const NotesContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.notes}>
      <Typography variant="body2" component="h1" gutterBottom>
        My Notes
      </Typography>
    </div>
  );
};

export default NotesContainer;
