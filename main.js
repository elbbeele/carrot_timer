const { app, BrowserWindow } = require('electron/main')
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'renderer.js')
      }
  });

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }q
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})