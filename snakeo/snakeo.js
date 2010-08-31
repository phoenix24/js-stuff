$(document).ready(function(){

    var plants = [];
    function plant() {
        this.px = Math.floor(Math.random() * 900);
        this.py = Math.floor(Math.random() * 500);
        this.el = $('.plant').clone();
    }

    var snakes = [];
    function snake() {
        this.dr = 0;
        this.snkblks = [];
        var skblk = new snkblk();
        skblk.el.removeClass('box').addClass('head');
        this.snkblks.push(skblk);
        
    }

    function snkblk() {
        this.el = $('.box').clone().appendTo('body').css('display', 'block');
        this.xx = parseInt(this.el.css('left').match(/\d*/)[0]);
        this.yy = parseInt(this.el.css('top').match(/\d*/)[0]);
        this.oxx = 0;
        this.oyy = 0;
    }

    function init() {
        var pt;

        //make a new snake
        var ske = new snake();
        
        //add the snake to list of snakes
        snakes.push(ske);

        for (i=0; i<20; i++){
            pt = new plant();
            pt.el.appendTo('body').css('top', pt.py + 'px').css('left', pt.px + 'px').css('display', 'block');
            plants.push(pt);
        }
    }

    init();

    $('body').bind('keydown', function(ev){
        var key = ev.keyCode || ev.which;
        var arrow = { 'left':37, 'right':39, 'up':38, 'down':40 };
        
        var snk = snakes[0].snkblks[0];

        for (j=0;j<snakes.length;j++){
        var snke = snakes[j];
        var snkblks = snke.snkblks;

        var moved = false;

        for (k=0;k<snkblks.length;k++){
        var snk = snkblks[k];
        var el = snk.el;
        xx = snk.xx;
        yy = snk.yy;
        //console.log("coord : " + xx + ", " + yy);
        
        if (k == 0) {
        if (key == arrow.left && xx - 10 > 0) {
            xx = xx - 10;
            el.css('left', xx + "px" );
            moved = true;
        }
        if (key == arrow.right && xx + 10 < 900) {
            xx = xx + 10;
            el.css('left', xx + "px" );
            moved = true;
        }
        if (key == arrow.up && yy - 10 > 0) {
            yy = yy - 10;
            el.css('top', yy + "px" );
            moved = true;
        }
        if (key == arrow.down && yy + 10 < 600) {
            yy = yy + 10;
            el.css('top', yy + "px" );
            moved = true;
        }
        if (moved == false ) return;
        snk.oxx = snk.xx;
        snk.oyy = snk.yy;
        snk.xx = xx;
        snk.yy = yy;
        
        //plants.forEach(function(pt){
        for (i=0; i<plants.length; i++){
            var pt = plants[i];
            var xd = Math.abs(pt.px - xx);
            var yd = Math.abs(pt.py - yy);
            if (xd < 10 && yd < 10){
                console.log("match : " + pt.px + ":" + pt.py + ", " + xd + ":" + yd);
                $(pt.el).remove();
                plants.splice(i, 1);
                var skblk = new snkblk();
                skblk.xx = snkblks[snkblks.length - 1].oxx;
                skblk.yy = snkblks[snkblks.length - 1].oyy;
                snkblks.push(skblk);
            }
        };
        } else {
            var snk = snkblks[k];
            var snk1 = snkblks[k-1];
            var el = snk.el;
            snk.oxx = snk.xx;
            snk.oyy = snk.yy;
            snk.xx = snk1.oxx;
            snk.yy = snk1.oyy;

            el.css('top', snk.yy + "px" );
            el.css('left', snk.xx + "px" );
            //console.log("tail : " + snk.xx + ", " + snk.yy);
        }

        }
        }
    });
});