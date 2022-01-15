import React from "react";
import Typography from "@mui/material/Typography";

import { styles } from ".";

const NotesContainer = ({ selectNote, notes, activeNoteId }) => {
  console.log(activeNoteId);

  return (
    <div className={styles.notes}>
      <Typography variant="body2" component="h1" gutterBottom sx={{ paddingTop: 1, paddingLeft: 1 }} color="green">
        My Notes
      </Typography>

      <div>
        {notes.map(({ id, title, content }) => (
          <main key={id} onClick={selectNote(id, "modify")} className={activeNoteId === id ? styles.active : "nonActive"}>
            <Typography>{title || content}</Typography>
            <Typography>{content}</Typography>
          </main>
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
