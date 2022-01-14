import React from "react";

import { useSnackbar } from "notistack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { styles } from ".";

const EditNoteContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className={styles.edit}>
      <TextField id="note-title" label="Note Title" variant="standard" />
    </div>
  );
};

export default EditNoteContainer;
