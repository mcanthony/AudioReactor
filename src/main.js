chrome.app.runtime.onLaunched.addListener(function() {

    var width  = 1024,
        height =  768;

    chrome.app.window.create('index.html', {
        bounds: {
            width:  width,
            height: height,
            left: 2600,
            top:  screen.availHeight * 0.5 - height * 0.5
        }
    });
});