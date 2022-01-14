import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

import NotesContainer from "./components/notes";
import EditNoteContainer from "./components/edit";
import database from "./source/database";

const App = () => {
  const [id, seId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (content.length) {
      console.log("saveContent after 20 seconds");
    }
  }, [content]);

  const selectNote = (id) => () => {
    if (id) {
      const { title, content } = database.filter((x) => x.id === id)[0];
      // seId(id);
      setContent(content);
      setTitle(title);
    } else {
      // update previous note
      enqueueSnackbar(`Previous note saved`, { variant: "success" });
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
      <NotesContainer selectNote={selectNote} />
      <EditNoteContainer {...{ title, setTitle, content, setContent }} />
    </div>
  );
};
export default App;
