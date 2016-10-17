/// <reference path="typings/node/node.d.ts" />
"use strict";
var jsonFileUtils = require("./js/com/apptromix/utils/JsonFileUtils");
var electron = require('electron');
var app = electron.app;
var browserWindow = electron.BrowserWindow;
var splashWindow;
var mainWindow;
function createWindow() {
    var readGlobalFile = new jsonFileUtils('./components/global-init-config.json');
    var globalsjson = readGlobalFile.readFileJson();
    splashWindow = new browserWindow({
        width: globalsjson.splash_screen.width,
        height: globalsjson.splash_screen.height,
        frame: globalsjson.splash_screen.isFramerequired,
        darkTheme: globalsjson.splash_screen.isdarkTheme
    });
    splashWindow.loadURL('file://' + __dirname + '/' + globalsjson.splash_screen.component + '/' + globalsjson.splash_screen.name);
    if (globalsjson.splash_screen.isDevToolsRequired) {
        splashWindow.webContents.openDevTools();
    }
    splashWindow.on('closed', function () {
        splashWindow = null;
    });
    setTimeout(function () { createActualWindow(globalsjson); }, globalsjson.splash_screen.timeout);
}
function createActualWindow(globalsjson) {
    var childWindow = new browserWindow({
        parent: globalsjson.main_window.parent,
        modal: globalsjson.main_window.isModal,
        show: globalsjson.main_window.isVisible,
        darkTheme: globalsjson.main_window.isdarkTheme
    });
    childWindow.loadURL('file://' + __dirname + '/' + globalsjson.main_window.component + '/' + globalsjson.main_window.name);
    childWindow.once('ready-to-show', function () {
        childWindow.show();
        splashWindow.close();
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
