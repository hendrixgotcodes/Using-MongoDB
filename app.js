const {app, globalShortcut} = require('electron');
const MainWindow = require('./model/MainWindow');
const staticURL = require('url').format({
    protocol: 'file',
    slashes: true,
    path: require('path').join(__dirname, 'views')
})




//Will be called to create index page, which is the form page
function createMainWindow(){
        const mainWindow = new MainWindow('./views/form.html', staticURL);
}


//To do when Electron is ready
app.on('ready',()=>{
    createMainWindow();
});