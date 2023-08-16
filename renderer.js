const { app, BrowserWindow, Menu } = require("electron");
require("electron-reload")(__dirname);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 600,
    frame: true, // Set frame to false for a borderless window
  });

  mainWindow.loadFile('src/ui/landing.html');

  let menuTemplate = [
    {
      label: "File",
      submenu: [
        {
          label: "Exit",
          click() {
            app.quit();
          },
        },
      ],
    },
  ];

  let menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.setMinimumSize(700, 505);
}

app.whenReady().then(() => {
  createWindow();
});

