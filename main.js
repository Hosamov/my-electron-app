// Import required electron modules:
const { app, BrowserWindow, ipcMain } = require('electron');
// app: controls app's lifecycle
// BrowserWindow: creates and manages app windows
const path = require('path');

// load web page into new BrowserWindow instance:
const createWindow = () => {
  const win = new BrowserWindow({
    width:800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  ipcMain.handle('ping', () => 'pong');
  win.loadFile('index.html');
}

// Call function when app is ready:
app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

