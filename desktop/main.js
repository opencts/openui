const { app, BrowserWindow } = require('electron');
const path = require('path');

const filePath = path.resolve(__dirname, 'index.html');
const iconPath = path.resolve(__dirname, 'icons/png/512x512.png');

function createWindow() {
    const win = new BrowserWindow({ 
        width: 800,
        height: 640,
        icon: iconPath
    });
    win.loadFile(filePath);
}

async function run() {
    await app.whenReady();
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

run();