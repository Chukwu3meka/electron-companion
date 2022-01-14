import React from "react";
import TextField from "@mui/material/TextField";

import { styles } from ".";

const EditNoteContainer = ({ noteId, title, setTitle, content, setContent }) => {
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);

  return (
    <div className={styles.edit}>
      <TextField id="note-title" label="Note Title" variant="standard" value={noteId ? "noteId" : title} onChange={handleTitleChange} />

      <TextField
        id="note-content"
        label="Note Content"
        multiline
        onChange={handleContentChange}
        fullWidth
        value={content}
        placeholder="Start typing here"
        inputProps={{
          style: {
            height: "83vh",
          },
        }}
      />
    </div>
  );
};

export default EditNoteContainer;
