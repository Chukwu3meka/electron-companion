import React from "react";
import { Notes } from ".";

const NotesContainer = ({ selectNote, notes, activeNoteId }) => {
  return <Notes {...{ notes, selectNote, activeNoteId }} />;
};

export default NotesContainer;
