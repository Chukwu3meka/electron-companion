import { useSnackbar } from "notistack";
import React, { useState, useEffect } from "react";

import NotesContainer from "./components/notes";
import EditNoteContainer from "./components/edit";

const App = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [content, setContent] = useState("");
  const [settings, setSettings] = useState({});
  const [initTitle, setInitTitle] = useState("");
  const [initContent, setInitContent] = useState("");

  useEffect(() => {
    console.log("running again");
    const database = electron.getDatabase();
    setNotes(database.notes);
    setSettings(database.settings);
  }, []);

  const saveNewNote = (note) => {
    // update notes in UI
    setNotes([...notes.filter((x) => x.id !== note.id), { ...note, date: new Date().toDateString() }]);
    // save to file
    electron.saveNote({
      notes: [...notes.filter((x) => x.id !== note.id), { ...note, date: new Date().toDateString() }],
      settings,
    });
  };

  const selectNote = (newId) => () => {
    // return null if new note button is clicked
    setId(newId === "new note" ? null : newId);

    if (content?.trim() || title?.trim() || newId) {
      // new note added
      if (id === null && content?.trim()?.length) {
        saveNewNote({ id: notes.length + 1, title, content });
        enqueueSnackbar(`New note saved`, { variant: "success" });
      }
      // existing note modified
      if (id && (content?.trim() || title?.trim()) && (content !== initContent || title !== initTitle)) {
        saveNewNote({ id, title, content });
        enqueueSnackbar(`Previous note modified`, { variant: "success" });
      }

      // update active note to the one selected, if new note button is clicked return "" for title && content
      const { title: newTitle, content: newContent } =
        newId === "new note" ? { title: "", content: "" } : notes.filter((x) => x.id === newId)[0];

      setTitle(newTitle);
      setInitTitle(newTitle);
      setContent(newContent);
      setInitContent(newContent);
    }
  };

  const newNoteHandler = () => selectNote("new note")();

  const saveNoteHandler = () => {
    if (content?.trim() || title?.trim()) {
      saveNewNote({ id: id || notes.length + 1, title, content });
    }
  };

  return (
    <div className="note">
      <NotesContainer selectNote={selectNote} notes={notes} activeNoteId={id} />
      <EditNoteContainer {...{ title, setTitle, content, setContent, newNoteHandler, saveNoteHandler }} />
    </div>
  );
};
export default App;
