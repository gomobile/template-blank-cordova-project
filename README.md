Blank Intel XDK and Apache Cordova Project
==========================================

Use this project as a starting point for an Intel XDK or Apache Cordova hybrid mobile app. One key file (init-dev.js) contains the initialization code needed to handle XDK device ready, Cordova device ready or browser document ready init events in a way that allows you to run your app in any of these environments. This init code works when using the the Intel XDK Emulate tab, in the XDK App Preview application (Test tab), in the App Preview Crosswalk container (Debug tab), with weinre (Test tab) and in an app built using either the Intel XDK legacy container (aka AppMobi container) or the new standard Apache Cordova container. 

When init-dev.js completes execution it issues a custom "app.Ready" event. Use this event to start your application, rather than waiting on "device ready" or "document ready" or "window load" or similar events. You should not have to modify anything in init-dev.js to use it. Also, init-dev.js has been written so that it is not dependent on any external libraries or specific webviews.

This blank project works well for converting an existing web app into a hybrid app. One of the biggest issues encountered when porting a web app to a hybrid app is the init sequence, especially when third-party libraries like jQuery are part of that app. Due to the additional burden of initializing the underlying native code layer, developers have trouble getting their code that runs well in a desktop browser to initialize in a HTML5 hybrid webview. Frequently this is due to the significant difference in resources between the desktop browser and the mobile webview (e.g., less memory and lower performance, as well as a reduced feature set). 

You could combine the init-app.js and app.js into a single file (e.g., just app.js) and things will work just fine as long as you start things up using the custom "app.Ready" event described above. Also, there is nothing particularly important about the app.css file, it contains a few helpful CSS definitions, but certainly is not the "end all" for configuring the CSS in your hybrid HTML5 webview application.

See the comments in the index.html file for recommendations on how to load your third-party libraries relative to your application code and the special hybrid libraries (intelxdk.js, cordova.js and xhr.js).

There are a large number of console.log messages contained within init-dev.js. They can be used to debug initialization problems and understand how the file works. It is highly recommended that you leave those console.log messages in your app, they will not unduly slow down or burden your application.

There are many comments in the files in this project. Please read those comments for details and further documentation.

BTW: "dev" means "device" in this context, not "develop," because it grew out of a desire to build a more reliable and flexible "device ready" detector.