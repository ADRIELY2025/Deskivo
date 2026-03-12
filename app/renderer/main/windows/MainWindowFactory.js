
export default class MainWindowFactory {

    static createWindow() {
         Menu.setApplicationMenu(null);
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, "preload.js"),
                contextIsolation: true
            }
        })

         win.loadFile(path.join(__dirname, view));
            
            return win;
    }

}

