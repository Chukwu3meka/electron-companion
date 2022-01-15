import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import NotesContainer from "./components/notes";
import EditNoteContainer from "./components/edit";

const App = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [content, setContent] = useState("");
  const [initTitle, setInitTitle] = useState("");
  const [initContent, setInitContent] = useState("");
  const [notes, setNotes] = useState(electron.notesApi.getNotes());
  const [settings, setSettings] = useState(electron.settingsApi.getSettings());

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (content.length && content !== initContent && title !== initTitle) {
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

  const selectNote = (newId) => () => {
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

    // update active note to the one selected, if new note button is clicked return "" for title && content
    const { title: newTitle, content: newContent } =
      newId === "new note" ? { title: "", content: "" } : notes.filter((x) => x.id === newId)[0];

    // return null if new note button is clicked
    setId(newId === "new note" ? null : newId);
    setTitle(newTitle);
    setInitTitle(newTitle);
    setContent(newContent);
    setInitContent(newContent);
  };

  const newNoteHandler = () => {
    selectNote("new note")();
  };

  return (
    <div className="note">
      <NotesContainer selectNote={selectNote} notes={notes} activeNoteId={id} />
      <EditNoteContainer {...{ title, setTitle, content, setContent, newNoteHandler }} />
    </div>
  );
};
export default App;
