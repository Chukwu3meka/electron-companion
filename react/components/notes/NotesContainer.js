import React from "react";
import { Notes } from ".";

const NotesContainer = ({ selectNote, notes, activeNoteId, deleteNoteHandler }) => {
  return <Notes {...{ notes, selectNote, activeNoteId, deleteNoteHandler }} />;
};

export default NotesContainer;
