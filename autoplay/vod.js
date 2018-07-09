$(document).ready(function () {
    function ViewVid() {
        $('#vod').bind('inview', function (event, visible) {
            if (visible && action === true) {
                $(this).get(0).play();
                console.log("video is playing");
            } else {
                console.log("video is paused");
                $(this).get(0).pause();
            }
        });
    }

    var action = false;

    var myVideo = document.getElementById("vod");
    myVideo.load();
    myVideo.onloadeddata = function() {
        //Do whatever you  want when video is loaded here
        console.log('vid is ready');
        $('#loading').css('display', 'none');
        $('#enter').css('display', 'inline');
    };

    $('#enter').click(function () {
        $('#wrapper').css('css-text', 'transform: translateY(-100%); transition: transform 1.5s ease;');
        action = true;
        ViewVid();
    });
});