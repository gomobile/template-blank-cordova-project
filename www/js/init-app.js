/*
 * Copyright (c) 2013-2014, Paul Fischer, Intel Corporation. All rights reserved.
 * Please see http://software.intel.com/html5/license/samples
 * and the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*jshint -W079 */
/*global $:false, intel:false, app:false, dev:false */
/*global myEventHandler:false, cordova:false, device:false */



var app = app || {} ;

app.initApplication = function() {
    "use strict" ;
    var fName = "app.initApplication():" ;
    console.log(fName, "entry") ;

// Main app starting point (what dev.onDeviceReady calls after system is ready).
// Runs after underlying device native code and webview/browser is initialized.
// Where you should "kick off" your application by initializing app events, etc.

// NOTE: Customize this function to initialize your application.

    // initialize third-party libraries and event handlers

    // initThirdPartyLibraryNumberOne() ;
    // initThirdPartyLibraryNumberTwo() ;
    // initThirdPartyLibraryNumberEtc() ;

    // initialize application code

    // initMyAppCodeNumberOne() ;
    // initMyAppCodeNumberTwo() ;
    // initMyAppCodeNumberEtc() ;

    // Initialize app event handlers.
    // TODO: configure to work with both touch and click events (mouse + touch)

    var el, str ;

    el = document.getElementById("id_btnHello") ;
    el.addEventListener("touchend",myEventHandler,false) ;

    // after init is all done is a good time to remove our splash screen

    // see https://github.com/01org/appframework/blob/master/documentation/detail/%24.ui.launch.md
    // do this if you disabled App Framework autolaunch (in index.html, for example)
    // $.ui.launch() ;

    app.showDeviceReady() ;                 // this is specific to this demo
    app.hideSplashScreen() ;                // this is optional for your app

    // ...and whatever else you want to do now that the app has started...

    el = document.getElementById("id_textArea") ;                   // print some interesting junk
    el.innerHTML = JSON.stringify(dev.isDeviceReady, null, 1) ;     // to the <textarea> tag
    el.appendChild(document.createTextNode("\n")) ;

    if( window.device && device.cordova ) {                         // old Cordova 2.x version detection
        str = "cordova.version: " + device.cordova ;                // print the cordova version string...
        console.log(str) ;                                          // ...to the console and
        el.appendChild(document.createTextNode(str + "\n")) ;       // ...to the <textarea> tag
        str = "device.model: " + device.model ;
        console.log(str) ;
        el.appendChild(document.createTextNode(str + "\n")) ;
        str = "device.platform: " + device.platform ;
        console.log(str) ;
        el.appendChild(document.createTextNode(str + "\n")) ;
        str = "device.version: " + device.version ;
        console.log(str) ;
        el.appendChild(document.createTextNode(str + "\n")) ;
    }

    if( window.cordova && cordova.version ) {
        str = "cordova.version: " + cordova.version ;               // print new Cordova 3.x version string...
        console.log(str) ;                                          // ...to the console and
        el.appendChild(document.createTextNode(str + "\n")) ;       // ...to the <textarea> tag

        if( cordova.require ) {                                     // print the included cordova plugins
            str = JSON.stringify(cordova.require('cordova/plugin_list').metadata, null, 1) ;
            console.log(str) ;
            el.appendChild(document.createTextNode(str + "\n")) ;
        }
    }


    // app initialization is done
    // app event handlers are ready
    // exit to idle state and just wait for events...

    console.log(fName, "exit") ;
} ;



// Primarily for demonstration.
// Update our status in the main view.
// Are we running in a hybrid container or a browser?

app.showDeviceReady = function() {
    var fName = "app.showDeviceReady():" ;
    console.log(fName, "entry") ;

    // Following is for demonstration.
    // find the "system ready" indicator on our display
    var el = document.getElementById("id_cordova") ;
    var parentElement = document.getElementById("id_deviceReady") ;
    var listeningElement = parentElement.querySelector('.listening') ;
    var receivedElement = parentElement.querySelector('.received') ;
    var failedElement = parentElement.querySelector('.failed') ;

    // set the "system ready" indicator on our display
    if( window.Cordova && dev.isDeviceReady.c_cordova________) {
        el.innerHTML = "Cordova device ready detected!" ;
        listeningElement.setAttribute('style', 'display:none;') ;
        receivedElement.setAttribute('style', 'display:block;') ;
        failedElement.setAttribute('style', 'display:none;') ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk____________ ) {
        el.innerHTML = "Intel XDK device ready detected!" ;
        listeningElement.setAttribute('style', 'display:none;') ;
        receivedElement.setAttribute('style', 'display:block;') ;
        failedElement.setAttribute('style', 'display:none;') ;
    }
    else {
        el.innerHTML = "Must be in a browser..." ;
        listeningElement.setAttribute('style', 'display:none;') ;
        receivedElement.setAttribute('style', 'display:none;') ;
        failedElement.setAttribute('style', 'display:block;') ;
    }

    console.log(fName, "exit") ;
} ;



// This may or may not be required, depends on your app and plugin configuration.
// This is also a simple study in the art of multi-platform device API detection.

app.hideSplashScreen = function() {
    var fName = "app.hideSplashScreen():" ;
    console.log(fName, "entry") ;

    if( window.Cordova && navigator.splashscreen ) {            // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    else if( window.intel && intel.xdk && intel.xdk.device ) {  // Intel XDK API detected
        intel.xdk.device.hideSplashScreen() ;
    }
    else {                                                      // must be in a browser
        // no such thing as a splash screen here...
    }

    console.log(fName, "exit") ;
} ;
