const { ipcRenderer, contextBridge } = require("electron");

// window.onload = async () => {
//   // db = await ipcRenderer.invoke("get-db");
// };

contextBridge.exposeInMainWorld("electron", {
  getDatabase() {
    return require("./react/source/database");
  },
  async saveNote(updatedDatabase) {
    const fs = require("fs");
    fs.writeFile("./react/source/database.js", `module.exports = ${JSON.stringify(updatedDatabase, undefined, 2)}`, function (err) {
      if (err) console.log(err);
    });
    // fs.writeFileSync("./react/source/database.js", `module.exports = ${JSON.stringify(updatedDatabase)}`, "utf-8");
    // fs.writeFile("./react/source/database.js", `module.exports = ${JSON.stringify(updatedDatabase, null, 2)}`, () => {});
  },
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
});
