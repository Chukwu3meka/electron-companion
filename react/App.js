import React from "react";

import TextField from "@mui/material/TextField";

import { useSnackbar } from "notistack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import EditNoteContainer from "./components/edit";

export default function App() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className="note">
      <div>
        <Typography variant="body2" component="h1" gutterBottom>
          My Notes
        </Typography>
        <h1>I am App !!!</h1>
        <button
          onClick={() => {
            enqueueSnackbar(`Password Reset ${"was successfull"}`, { variant: status ? "success" : "error" });

            // ipcRenderer.send("save_note", "dfassdf");
            // console.log("dsd");
            // electron.notificationApi.sendNotification("my cus noti");
            electron.notesApi.saveNote("My custom message!");
            // electron.notificationApi.sendNotification("My custom message!");
          }}>
          Notify
        </button>
      </div>
      <EditNoteContainer />
    </div>
  );
}
