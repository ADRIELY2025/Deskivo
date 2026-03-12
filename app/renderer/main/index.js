const { app, ipcMain } = require("electron")
const MainWindowFactory = require(".windows/MainWindowFactory")

app.whenReady().then(() => {
    MainWindowFactory.createWindow()
})

ipcMain.on("mensagem", (event, msg) => {
    console.log("Mensagem recebida do renderer:", msg)
    event.reply("resposta", "Mensagem recebida com sucesso!")
})