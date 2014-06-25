Blank Intel XDK and Apache Cordova Project
==========================================

Use this project as a starting point for an Intel XDK or Apache Cordova hybrid mobile app. One key file (init-dev.js) contains the initialization code needed to handle XDK device ready, Cordova device ready or browser document ready init events in one application in a way that allows you to run your app in any of these environments. This init code works in the XDK emulator, in the XDK App Preview application, in the Crosswalk debug container, with weinre and in an app built using either the Intel XDK legacy container (aka AppMobi container) as well as a standard Apache Cordova container. 

This blank project works well for converting an existing web app into a hybrid app. One of the biggest issues encountered when porting a web app to a hybrid app is the init sequence, especially when third-party libraries like jQuery are part of that app. Due to the additional burden of initializing the underlying native code layer, developers have trouble getting their code that runs well in a desktop browser to initialize in a hybrid webview. Frequently this is due to the significant difference in resources between the desktop browser and the mobile webview (e.g., less memory and lower performance, as well as a reduced feature set).

...more to be written...
