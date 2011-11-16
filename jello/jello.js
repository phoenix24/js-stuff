$(document).ready(function(){
    
    var x = true, y = true, xx = 30, yy = 30;
    function init(){
        var el = $('<div>').appendTo('body').addClass('box').css('display', 'block');
        setInterval(movebox, 50);
    }

    function movebox(){
        var el = $('.box');
        var dist = 5;
        var dht = document.height - parseInt(el.css('height').match(/\d*/)[0]);
        var dwt = document.width - parseInt(el.css('width').match(/\d*/)[0]);

        if (x) {
            if (xx < dwt) xx = xx + dist;
            else x = false;
        } else {
            if (xx > 0) xx = xx - dist;
            else x = true;
        }
        
        if (y) {
            if (yy < dht) yy = yy + dist;
            else y = false;
        } else {
            if (yy > 0) yy = yy - dist;
            else y = true;
        }
        el.css('top', yy + 'px').css('left', xx + 'px');
    }

    init();
});
