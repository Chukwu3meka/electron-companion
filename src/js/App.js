import React from "react";

const App = () => {
  return (
    <>
      <h1>dsfsdaaa111</h1>
      <button
        onClick={() => {
          // ipcRenderer.send("save_note", "dfassdf");
          console.log("dsd");
          // electron.notificationApi.sendNotification("my cus noti");
          electron.notesApi.saveNote("My custom message!");
          // electron.notificationApi.sendNotification("My custom message!");
        }}>
        Notify
      </button>{" "}
    </>
  );
};

export default App;
