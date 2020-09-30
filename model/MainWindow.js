const {
    BrowserWindow,
    Menu,
    globalShortcut
} = require('electron');
const menuTemplate = [];

class MainWindow extends BrowserWindow {
    constructor(fileUrl, staticURL) {
        super({
            width: 540,
            height: 600,
            resizable: false,
            webPreferences: {
                nodeIntegration: true
            },
            center: true,
        })
        this.loadURL(staticURL);
        this.loadFile(fileUrl);

        const menu = Menu.buildFromTemplate(menuTemplate);
        this.setMenu(menu);

        globalShortcut.register('cmdorctrl+r',()=>{
            this.reload();
        })
        globalShortcut.register('cmdorctrl+d',()=>{
            this.webContents.toggleDevTools();
        })

    }
}
module.exports = MainWindow;