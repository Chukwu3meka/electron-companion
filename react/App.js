import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import NotesContainer from "./components/notes";
import EditNoteContainer from "./components/edit";

const App = () => {
  const [id, seId] = useState(null);
  const [title, setTitle] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [content, setContent] = useState("");
  const [initTitle, setInitTitle] = useState("");
  const [initContent, setInitContent] = useState("");
  const [notes, setNotes] = useState(electron.notesApi.getNotes());
  const [settings, setSettings] = useState(electron.settingsApi.getSettings());

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (content.length && id && content !== initContent && title !== initTitle) {
        console.log("auto Saving");
        // saveNote({ id, title, content });
      }
    }, 60 * 1000);
    return () => {
      // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  }, []);

  const saveNewNote = (note) => {
    // update notes in UI
    setNotes([...notes, { ...note, date: new Date().toDateString() }]);
    // save to file
    electron.notesApi.saveNote({
      notes: [...notes, { ...note, date: new Date().toDateString() }],
      settings,
    });
  };

  const modifyNote = (note) => {
    // update notes in UI
    setNotes([...notes.filter((x) => x.id !== note.id), note]);
    // save to file
    electron.notesApi.saveNote({
      notes: [...notes.filter((x) => x.id !== note.id), note],
      settings,
    });
  };

  const selectNote = (newId, action) => () => {
    // new note added
    if (id === null && content?.trim()?.length) {
      saveNewNote({ id: notes.length + 1, title, content });
      enqueueSnackbar(`New note saved`, { variant: "success" });
    }
    // existing note modified
    if (id && (content?.trim() || title?.trim()) && (content !== initContent || title !== initTitle)) {
      modifyNote({ id, title, content });
      enqueueSnackbar(`Previous note modified`, { variant: "success" });
    }

    const { title: newTitle, content: newContent } = notes.filter((x) => x.id === newId)[0];

    seId(newId);
    setTitle(newTitle);
    setInitTitle(newTitle);
    setContent(newContent);
    setInitContent(newContent);

    //     enqueueSnackbar(`Password Reset ${"was successfull"}`, { variant: status ? "success" : "error" });

    //     // ipcRenderer.send("save_note", "dfassdf");
    //     // console.log("dsd");
    //     // electron.notificationApi.sendNotification("my cus noti");
    //     // electron.notificationApi.sendNotification("My custom message!");
  };

  return (
    <div className="note">
      <NotesContainer selectNote={selectNote} notes={notes} />
      <EditNoteContainer {...{ title, setTitle, content, setContent }} />
    </div>
  );
};
export default App;
