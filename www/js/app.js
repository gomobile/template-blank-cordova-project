/*
 * Copyright (c) 2013-2014, Intel Corporation. All rights reserved.
 * Please see http://software.intel.com/html5/license/samples
 * and the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false */
/*global cordova:false */



// This file contains your event handlers, the center of your application.


function myEventHandler() {
    "use strict" ;
    var fName = "myEventHandler():" ;
    console.log(fName, "function entry") ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
        alert("It worked! Cordova device ready detected @ " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!") ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
        alert("It worked! Intel XDK device ready detected @ "  + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!") ;
    }
    else {
        alert("Bad device ready detected or none available because we're running in a browser.") ;
    }

    console.log(fName, "function exit") ;
}


// ...additional event handlers here...
