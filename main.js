const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const electron = require('electron-reload')(__dirname)


const IMG_DIR = '/img/';

// Init Window

let win


function createWindow() {

    // Create new window
    win = new BrowserWindow({
        width:800,
        height:720,
        // icon: path.join(__dirname, IMG_DIR, 'icon.png'),
        autoHideMenuBar: true
    });

    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open devtools
    // win.webContents.openDevTools()

    win.on('closed', () => { win = null });
}

// Run create window function
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})