const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notesApi: {
    saveNote(e) {
      console.log("ASsa", e);
      ipcRenderer.send("notify", e);
    },
  },
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
});
