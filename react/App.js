import React, { useState } from "react";
import { useSnackbar } from "notistack";

import NotesContainer from "./components/notes";
import EditNoteContainer from "./components/edit";

const App = () => {
  const [noteId, setNoteId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const editNote = (id) => () => {
    if (content) {
      enqueueSnackbar(`Previous note saved`, { variant: "success" });
    } else {
      setNoteId(id);
      console.log(id);
    }

    //     enqueueSnackbar(`Password Reset ${"was successfull"}`, { variant: status ? "success" : "error" });

    //     // ipcRenderer.send("save_note", "dfassdf");
    //     // console.log("dsd");
    //     // electron.notificationApi.sendNotification("my cus noti");
    //     electron.notesApi.saveNote("My custom message!");
    //     // electron.notificationApi.sendNotification("My custom message!");
  };

  return (
    <div className="note">
      <NotesContainer editNote={editNote} />
      <EditNoteContainer {...{ noteId, title, setTitle, content, setContent }} />
    </div>
  );
};
export default App;
