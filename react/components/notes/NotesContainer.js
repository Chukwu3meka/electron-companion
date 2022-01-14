import React from "react";

import { useSnackbar } from "notistack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { styles } from ".";
import database from "../../source/database";

const NotesContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.notes}>
      <Typography variant="body2" component="h1" gutterBottom sx={{ paddingTop: 1, paddingLeft: 1 }} color="green">
        My Notes
      </Typography>
      <div>
        {database.map((x) => (
          <main key={x.id}>
            <Typography>{x.title || x.content}</Typography>
            <Typography>{x.content}</Typography>
          </main>
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
