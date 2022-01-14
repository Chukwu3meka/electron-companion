const { BrowserWindow, app, ipcMain, Notification } = require("electron");
const path = require("path");
// require("./ipcEvents").ipcEvents();
const isDev = !app.isPackaged;

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
}

if (isDev) {
  try {
    require("electron-reloader")(module);
  } catch {}
}

app.whenReady().then(() => {
  createWindow();

  // app.on("activate", () => {
  //   if (BrowserWindow.getAllWindows().length === 0) createWindow();
  // });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("save", (e, note) => {
  console.log(note, "sdASD");
  new Notification({ title: "Notifiation", body: e }).show();
});

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notifiation", body: message }).show();
});

// Stop error
app.allowRendererProcessReuse = true;
