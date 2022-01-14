import React from "react";

import NotesContainer from "./components/notes";
import EditNoteContainer from "./components/edit";

const App = () => (
  <div className="note">
    <NotesContainer />
    <EditNoteContainer />
  </div>
);

export default App;
