const { ipcRenderer, contextBridge } = require("electron");

let db;

window.onload = async () => {
  // db = await ipcRenderer.invoke("get-db");
};

contextBridge.exposeInMainWorld("electron", {
  notesApi: {
    getNotes(e) {
      // console.log(db);
      // if (!db || !db.notes) return [];
      // console, log(db.notes);
      // return db.notes;
      // ipcRenderer.send("save-note", e);
    },
    saveNote(note) {
      const fs = require("fs");
      fs.writeFileSync("./react/source/database.js", JSON.stringify(note, null, 2), "utf-8");

      // ipcRenderer.send("save-note", e);
    },
  },
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
});
