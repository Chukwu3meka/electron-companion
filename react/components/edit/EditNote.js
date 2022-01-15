import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

import { styles } from ".";

const EditNote = ({ title, handleTitleChange, content, handleContentChange, newNoteHandler, saveNoteHandler }) => (
  <div className={styles.edit}>
    <div>
      <TextField id="note-title" label="Note Title" variant="standard" value={title} onChange={handleTitleChange} />
      <ButtonGroup variant="contained" size="small" aria-label="action-buttons">
        <Button onClick={newNoteHandler}>New Note</Button>
        {title?.length || content?.length ? (
          <Button color="secondary" onClick={saveNoteHandler}>
            save Note
          </Button>
        ) : null}
      </ButtonGroup>
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
