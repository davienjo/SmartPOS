const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let mainWindow;
let serverProcess;
let clientProcess;

function startServer() {
  console.log("Starting server...");
  serverProcess = spawn("node", ["index.js"], {
    cwd: path.join(__dirname, "server"),
  });
  serverProcess.stdout.on("data", (data) =>
    console.log("Server:", data.toString()),
  );
  serverProcess.stderr.on("data", (data) =>
    console.error("Server error:", data.toString()),
  );
}

function startClient() {
  console.log("Starting React client...");
  clientProcess = spawn("npm", ["run", "dev"], {
    cwd: path.join(__dirname, "client"),
    shell: true,
  });
  clientProcess.stdout.on("data", (data) =>
    console.log("Client:", data.toString()),
  );
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    title: "SmartPOS",
    show: false,
  });

  const tryLoad = (attempts = 0) => {
    mainWindow
      .loadURL("http://localhost:5173")
      .then(() => {
        mainWindow.show();
        console.log("✅ App loaded successfully!");
      })
      .catch(() => {
        if (attempts < 20) {
          console.log(`Waiting for React... attempt ${attempts + 1}`);
          setTimeout(() => tryLoad(attempts + 1), 2000);
        } else {
          console.error("Could not connect to React app");
          mainWindow.show();
        }
      });
  };

  setTimeout(() => tryLoad(), 3000);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  startServer();
  startClient();
  createWindow();
});

app.on("before-quit", () => {
  if (serverProcess) serverProcess.kill();
  if (clientProcess) clientProcess.kill();
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
