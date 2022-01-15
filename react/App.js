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
    // getNotes();
    // console.log();
    // const companion = localStorage.getItem("companion");
    // console.log(companion);
    // console.log(database);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (content.length && id) {
        // saveNote({ id, title, content });
      }
    }, 60 * 1000);
    return () => {
      // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  }, []);

  const saveNote = (note) => {
    database.notes.push({ id, title, content });
    // { id, title, content }

    //   const fs = require('fs');

    // fs.writeFile("./source/database", note, function (err) {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log("The file was saved!");
    // });

    // Or

    // localStorage.setItem("companion.note1", { id, title, content });
    // console.log()
    electron.notesApi.saveNote({ id, title, content });
  };

  const selectNote = (newId, action) => () => {
    // new note added
    if (id === null && content?.length) {
      // update previous note
      saveNote({ id, title, content });
      enqueueSnackbar(`Previous note saved`, { variant: "success" });
    }
    // existing note modified
    if (id && (content !== database.find((x) => x.id === id).content || title !== database.find((x) => x.id === id).title)) {
      // update previous note
      enqueueSnackbar(`Previous note modified`, { variant: "success" });
    }

    const { title: newTitle, content: newContent } = database.filter((x) => x.id === newId)[0];
    seId(newId);
    setContent(newContent);
    setTitle(newTitle);

    //     enqueueSnackbar(`Password Reset ${"was successfull"}`, { variant: status ? "success" : "error" });

    //     // ipcRenderer.send("save_note", "dfassdf");
    //     // console.log("dsd");
    //     // electron.notificationApi.sendNotification("my cus noti");
    //     // electron.notificationApi.sendNotification("My custom message!");
  };

  return (
    <div className="note">
      <NotesContainer selectNote={selectNote} notes={database.notes} />
      <EditNoteContainer {...{ title, setTitle, content, setContent }} />
    </div>
  );
};
export default App;
