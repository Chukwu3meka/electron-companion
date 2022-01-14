import React from "react";
import TextField from "@mui/material/TextField";

import { styles } from ".";
import { Button } from "@mui/material";

const EditNote = ({ title, handleTitleChange, content, handleContentChange }) => (
  <div className={styles.edit}>
    <div>
      <TextField id="note-title" label="Note Title" variant="standard" value={title} onChange={handleTitleChange} />
      <Button variant="contained" size="small">
        New Note
      </Button>
    </div>
    <TextField
      multiline
      fullWidth
      value={content}
      id="note-content"
      label="Note Content"
      onChange={handleContentChange}
      placeholder="Start typing here"
      inputProps={{ style: { height: "83vh" } }}
    />
  </div>
);

export default EditNote;
