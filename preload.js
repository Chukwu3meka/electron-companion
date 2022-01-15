const database = require("./react/source/database");
const { ipcRenderer, contextBridge } = require("electron");

window.onload = async () => {
  // db = await ipcRenderer.invoke("get-db");
};

contextBridge.exposeInMainWorld("electron", {
  settingsApi: {
    getSettings() {
      return database.settings;
    },
  },
  notesApi: {
    getNotes() {
      return database.notes;
    },
    saveNote(updatedDatabase) {
      const fs = require("fs");
      fs.writeFileSync("./react/source/database.js", `module.exports = ${JSON.stringify(updatedDatabase, null, 2)}`, "utf-8");
      // fs.writeFile("./react/source/database.js", `module.exports = ${JSON.stringify(updatedDatabase, null, 2)}`, () => {});
    },
  },
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
});
