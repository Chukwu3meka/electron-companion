const { BrowserWindow, app, ipcMain, Notification, ipcRenderer } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    icon: `${__dirname}/assets/icon.png`,
    backgroundColor: "white",
    // fullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.maximize();
  win.show();
  win.loadFile("index.html");
  // and load the index.html of the app.
  // win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
}

if (isDev) {
  try {
    require("electron-reloader")(module);
  } catch (e) {
    // console.log(e);
  }
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notifiation", body: message }).show();
});

// ipcMain.handle("get-db", async () => {
//   try {
//     return "sth";
//   } catch (error) {
//     console.log({ getNotes: "error" });
//   }
// });

// Stop error
app.allowRendererProcessReuse = true;
