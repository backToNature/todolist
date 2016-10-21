
var getDistance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2));
};
var getScale = function ($mod) {

};
$(function () {
    var $mod = $('img');
    $mod.on('touchmove', function (e) {
        var event = e.originalEvent ? e.originalEvent : e, ds;
        if (event.touches.length == 2) {
            ds = getDistance(event.touches[0].pageX, event.touches[0].pageY, event.touches[1].pageX, event.touches[1].pageY);
            $mod.css('transform', 'scale(' + ds / 500 + ')' );
        }
    });
});