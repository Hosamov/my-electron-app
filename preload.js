// Note: Preloads bridge electron's process types together
//https://www.electronjs.org/docs/latest/tutorial/tutorial-preload
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
});
