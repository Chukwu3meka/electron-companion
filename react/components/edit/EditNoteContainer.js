import React from "react";

import { EditNote } from ".";

const EditNoteContainer = ({ title, setTitle, content, setContent }) => {
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);

  return <EditNote {...{ title, handleTitleChange, content, handleContentChange }} />;
};

export default EditNoteContainer;
