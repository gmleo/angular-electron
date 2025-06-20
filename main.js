const { app, BrowserWindow } = require("electron");

let appWin;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Angular and Electron",
        resizable: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    appWin.loadURL(`file://${__dirname}/dist/browser/index.html`);

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.whenReady().then(() => {
  createWindow()
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});
