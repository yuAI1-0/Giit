const { app, BrowserWindow } = require('electron')

app.disableHardwareAcceleration();

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 150,
        frame: false,
        backgroundColor: '#02020201', // 將背景色設置為接近透明的顏色
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true); // 將視窗設置為始終在頂部
}

app.whenReady().then(createWindow)