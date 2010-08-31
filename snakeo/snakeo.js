$(document).ready(function(){

    var plants = [];
    function plant() {
        this.px = Math.floor(Math.random() * 900);
        this.py = Math.floor(Math.random() * 500);
        this.el = $('.plant').clone();
    }

    //var snakes = [];
    function snake() {
        
    }

    function skblk() {
        var el = $('.box');
        var yy = $('.box').css('top');
        var xx = $('.box').css('left');
        xx = parseInt(xx.match(/\d*/)[0]);
        yy = parseInt(yy.match(/\d*/)[0]);
        
    }

    function init() {
        var pt;
        for (i=0; i<10; i++){
            pt = new plant();
            pt.el.appendTo('body').css('top', pt.py + 'px').css('left', pt.px + 'px').css('display', 'block');
            plants.push(pt);
        }
    }

    init();

    $('body').bind('keydown', function(ev){
        var key = ev.keyCode || ev.which;
        var arrow = { 'left':37, 'right':39, 'up':38, 'down':40 };

        var el = $('.box');
        var yy = $('.box').css('top');
        var xx = $('.box').css('left');
        xx = parseInt(xx.match(/\d*/)[0]);
        yy = parseInt(yy.match(/\d*/)[0]);

        if (key == arrow.left && xx - 10 > 0) {
            xx = xx - 10;
            el.css('left', xx + "px" );
        }
        if (key == arrow.right && xx + 10 < 900) {
            xx = xx + 10;
            el.css('left', xx + "px" );
        }
        if (key == arrow.up && yy - 10 > 0) {
            yy = yy - 10;
            el.css('top', yy + "px" );
        }
        if (key == arrow.down && yy + 10 < 600) {
            yy = yy + 10;
            el.css('top', yy + "px" );
        }
        
        console.log("coord : " + xx + ", " + yy);
        //plants.forEach(function(pt){
        for (i=0; i<plants.length; i++){
            var pt = plants[i];
            var xd = Math.abs(pt.px - xx);
            var yd = Math.abs(pt.py - yy);
            console.log("plant : " + pt.px + ", " + pt.py);
            if (xd < 10 && yd < 10){
                console.log("match : " + pt.px + ":" + pt.py + ", " + xd + ":" + yd);
                $(pt.el).remove();
                plants.splice(i, 1);
            }
        };
    });
});
