$(document).ready(function () {

    //Video pauses if not in view
    function ViewVid() {
        $('#vod').bind('inview', function (event, visible) {
            if (visible && action === true) {
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });
    }

    var action = false;

    var vid = document.getElementById("vod");
    vid.load();
    vid.onloadeddata = function() {
        $('#loading').css('display', 'none');
        $('#enter').css('display', 'inline');
    };

    $('#enter').click(function () {
        $('#wrapper').css('css-text', 'transform: translateY(-100%); transition: transform 1.5s ease;');
        action = true;
        ViewVid();
    });
});