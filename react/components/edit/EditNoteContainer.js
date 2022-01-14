import React from "react";

import { useSnackbar } from "notistack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { styles } from ".";

const EditNoteContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //   <button
  //   onClick={() => {
  //     enqueueSnackbar(`Password Reset ${"was successfull"}`, { variant: status ? "success" : "error" });

  //     // ipcRenderer.send("save_note", "dfassdf");
  //     // console.log("dsd");
  //     // electron.notificationApi.sendNotification("my cus noti");
  //     electron.notesApi.saveNote("My custom message!");
  //     // electron.notificationApi.sendNotification("My custom message!");
  //   }}>
  //   Notify
  // </button>

  return (
    <div className={styles.edit}>
      <TextField id="note-title" label="Note Title" variant="standard" />
      <TextField
        id="note-content"
        label="Note Content"
        multiline
        fullWidth
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
