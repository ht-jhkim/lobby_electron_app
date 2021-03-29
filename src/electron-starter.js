const { app, BrowserWindow, dialog  } = require("electron");
const { autoUpdater } = require("electron-updater");
const url = require("url");
const path = require("path");

let updateWin;

function createWindow() {
  // 브라우저 창을 생성합니다.
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
    },
  });
  win.setMenuBarVisibility(false);

  // React를 빌드할 경우 결과물은 build 폴더에 생성되기 때문에 loadURL 부분을 아래와 같이 작성합니다.
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true,
    });
  win.loadURL(startUrl);
}

// 이 메소드는 Electron의 초기화가 완료되고
// 브라우저 윈도우가 생성될 준비가 되었을때 호출된다.
// 어떤 API는 이 이벤트가 나타난 이후에만 사용할 수 있습니다.
app.whenReady().then(createWindow);

// 모든 윈도우가 닫히면 종료된다.
app.on("window-all-closed", () => {
  // macOS에서는 사용자가 명확하게 Cmd + Q를 누르기 전까지는
  // 애플리케이션이나 메뉴 바가 활성화된 상태로 머물러 있는 것이 일반적입니다.
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // macOS에서는 dock 아이콘이 클릭되고 다른 윈도우가 열려있지 않았다면
  // 앱에서 새로운 창을 다시 여는 것이 일반적입니다.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function sendStatusToWindow(text) {
  updateWin.webContents.send("message", text);
}

function createDefaultUpdateWindow() {
  updateWin = new BrowserWindow({
    backgroundColor: "#eeeeee",
    webPregerences: {
      nodeIntegration: true,
    },
  });

  updateWin.on("close", () => {
    updateWin = null;
  });
  updateWin.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);
  return updateWin;
}

autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow("Checking for update...");
});
autoUpdater.on("update-available", () => {
  sendStatusToWindow("Update available.");
});
autoUpdater.on("update-not-available", () => {
  sendStatusToWindow("Update not available.");
});
autoUpdater.on("error", (err) => {
  sendStatusToWindow("Error in auto-updater. " + err);
});
autoUpdater.on("download-progress", (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + " - Downloaded " + progressObj.percent + "%";
  log_message = log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")";
  sendStatusToWindow(log_message);
});
autoUpdater.on("update-downloaded", () => {
  sendStatusToWindow("Update downloaded");

  const option = {
    type: "question",
    buttons: ["업데이트", "취소"],
    defaultId: 0,
    title: "electron-updater",
    message: "업데이트가 있습니다. 프로그램을 업데이트 하시겠습니까?",
  };
  let btnIndex = dialog.showMessageBoxSync(updateWin, option);

  if(btnIndex === 0) {
    autoUpdater.quitAndInstall();
  }
});

app.on("ready", async () => {
  createDefaultUpdateWindow();
  autoUpdater.checkForUpdates();
});

