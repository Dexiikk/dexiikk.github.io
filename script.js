(function() {
    "use strict";
    
    var output = document.getElementById("idiot-span");
    var audio = document.getElementById("idiot-audio");
    
    if (!window.Audio) {
        console.error("Audio not supported");
        output.innerText = "your browser is an idiot";
        return;
    }
    
    document.addEventListener("keydown", toggle);
    document.addEventListener("touchend", toggle);
    document.addEventListener("mouseup", toggle);
    
    function toggle(event) {    
        if (audio.paused) audio.play().catch(function(){});
        if (audio.muted) audio.muted = false;
    }
    
    function invertBackground() {
        document.body.classList.toggle("inverted");
        return setTimeout(invertBackground, 500);
    }

    audio.play().catch(function(){});
    invertBackground();
})();