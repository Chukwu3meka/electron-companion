import React from "react";
import Typography from "@mui/material/Typography";

import { styles } from ".";
import database from "../../source/database";

const NotesContainer = ({ selectNote }) => (
  <div className={styles.notes}>
    <Typography variant="body2" component="h1" gutterBottom sx={{ paddingTop: 1, paddingLeft: 1 }} color="green">
      My Notes
    </Typography>
    <div>
      {database.map(({ id, title, content }) => (
        <main key={id} onClick={selectNote(id)}>
          <Typography>{title || content}</Typography>
          <Typography>{content}</Typography>
        </main>
      ))}
    </div>
  </div>
);

export default NotesContainer;
