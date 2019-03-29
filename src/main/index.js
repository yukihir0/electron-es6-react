const {app, BrowserWindow} = require("electron")
let window

function createWindow () {
  window = new BrowserWindow({width: 800, height: 600})
  window.loadFile("src/index.html")
  window.webContents.openDevTools()
  window.on("closed", () => {
    win = null
  })
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (window === null) {
    createWindow()
  }
})
