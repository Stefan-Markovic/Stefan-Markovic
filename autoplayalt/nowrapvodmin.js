$(document).ready(function(){$("#vod").bind("inview",function(i,o){o?($(this).get(0).play(),console.log("video is playing")):(console.log("video is paused"),$(this).get(0).pause())})});