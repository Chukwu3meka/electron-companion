const { BrowserWindow, app, ipcMain, Notification, ipcRenderer } = require("electron");
const path = require("path");
// require("./ipcEvents").ipcEvents();
const DB = require("nedb");

const Store = require("electron-store");
const store = new Store();
const isDev = require("electron-is-dev");

let dataStore;

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

function initDataStore() {
  console.log(store);
  // let path = app.getPath("userData");
  // dataStore = new DB({
  //   filename: `${path}/companion.json`,
  // });
  // dataStore.loadDatabase((err) => {
  //   if (err) {
  //     console.log("database error");
  //     throw err;
  //   }
  // });
}

app.whenReady().then(() => {
  initDataStore();
  createWindow();
  // const Store = require("electron-store");

  // Store.initRenderer();

  // app.on("activate", () => {
  //   if (BrowserWindow.getAllWindows().length === 0) createWindow();
  // });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("save-note", async (a, note) => {
  dataStore.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
    // Two documents were inserted in the database
    // newDocs is an array with these documents, augmented with their _id
  });

  dataStore.insert({ notes: note }, (err, doc) => {
    if (err) {
      console.log(`save-note: ${err}`);
    } else {
      console.log(doc);
    }
  });

  const d = new Promise((resolve, reject) => {
    dataStore.find({}, (err, docs) => {
      console.log(docs);
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });

  console.log({ d });

  // db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
  //   // Two documents were inserted in the database
  //   // newDocs is an array with these documents, augmented with their _id
  // });

  // db.insert(doc, function (err, newDoc) {   // Callback is optional
  //   // newDoc is the newly inserted document, including its _id
  //   // newDoc has no key called notToBeSaved since its value was undefined
  // });
  // console.log({ note });
  // new Notification({ title: "Notifiation", body: e }).show();
});

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notifiation", body: message }).show();
});

ipcMain.handle("get-db", async () => {
  try {
    const db = new Promise((resolve, reject) => {
      dataStore.find({}, (err, docs) => {
        console.log(docs);
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
    console.log(db);
    return db;
  } catch (error) {
    console.log({ getNotes: "error" });
  }
});

// Stop error
app.allowRendererProcessReuse = true;
