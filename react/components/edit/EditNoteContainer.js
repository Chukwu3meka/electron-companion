import React from "react";

import { EditNote } from ".";

const EditNoteContainer = ({ title, setTitle, content, setContent, newNoteHandler }) => {
  const handleTitleChange = (event) => setTitle(`${event.target.value}`.toString());
  const handleContentChange = (event) => setContent(`${event.target.value}`.toString());

  return <EditNote {...{ title, handleTitleChange, content, handleContentChange, newNoteHandler }} />;
};

export default EditNoteContainer;
