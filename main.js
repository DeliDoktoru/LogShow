const electron =require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');



app.on('ready',()=>{

    // screen size
    let {width, height}=electron.screen.getPrimaryDisplay().workAreaSize;

    let w1=new BrowserWindow({x:width-500,y:0,height:500,width:500,
        movable :false,focusable: false,frame: false,opacity:0.6,
        minimizable:false,maximizable :false,
        alwaysOnTop:true});
    w1.setIgnoreMouseEvents(true,{  forward: true  });
    w1.loadURL(path.join(__dirname,"index.html"));
    

});



