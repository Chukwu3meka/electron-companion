import React from "react";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { styles } from ".";
import database from "../../source/database";

const NotesContainer = ({ editNote }) => {
  const [value, setValue] = React.useState("Controlled");

  return (
    <div className={styles.notes}>
      <Typography variant="body2" component="h1" gutterBottom sx={{ paddingTop: 1, paddingLeft: 1 }} color="green">
        My Notes
      </Typography>
      <div>
        {database.map(({ id, title, content }) => (
          <main key={id} onClick={editNote(id)}>
            <Typography>{title || content}</Typography>
            <Typography>{content}</Typography>
          </main>
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
