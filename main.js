// Import required electron modules:
const { app, BrowserWindow } = require('electron');
// app: controls app's lifecycle
// BrowserWindow: creates and manages app windows

// load web page into new BrowserWindow instance:
const createWindow = () => {
  const win = new BrowserWindow({
    width:800,
    height: 600,
  })

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