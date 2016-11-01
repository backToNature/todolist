!(function () {
    var Tips = function (data) {
        var $wraper;
        var $body = $(window.document.body);
        
        var tpl_tips = 
            '<div class="pop-tips-content">' +
                '<span class="pop-tips-glyphicon" aria-hidden="true"></span>' +
                '<span node-type="pop-tips-text" class="pop-tips-text"></span>' +
            '</div>';

        if (!$('.module-pop-tips').length) {
            $wraper = $('<div node-type="pop-tips-wrapper" class="module-pop-tips"></div>');
            $body.append($wraper);
        } else {
            $wraper = $('.module-pop-tips');
        }

        var $tpl_tips = $(tpl_tips);
        $tpl_tips.find('span[node-type="pop-tips-text"]').text(data.content || '');
        var $glyphicon = $tpl_tips.find('.pop-tips-glyphicon');
        if (data.theme === 'green') {
            $glyphicon.addClass('glyphicon-ok');
            $tpl_tips.addClass('pop-tips-green');
        } else if (data.theme === 'red') {
            $glyphicon.addClass('glyphicon-remove');
            $tpl_tips.addClass('pop-tips-red');
        } else {
            $glyphicon.addClass('glyphicon-upload');
            $tpl_tips.addClass('pop-tips-blue');
        }
        $wraper.append($tpl_tips);
        $wraper.css('margin-left', '-' + $wraper.width() / 2 + 'px');
        var $currentTip = $wraper.find('.pop-tips-content').last();
        $currentTip.animate({
            opacity: 1,
            height: '53px'
        }, 'slow', 'swing', function () {
            window.setTimeout(function () {
                $currentTip.animate({
                    opacity: 0,
                    height: 0
                }, 'slow', function () {
                    if (typeof data.callback === 'function') {
                        data.callback();
                    }
                    $currentTip.remove();
                });
            }, data.showTime || 1500);
        });

    };
    // RequireJS && SeaJS
    if (typeof define === 'function') {
        define(function() {
            return Tips;
        });
    // NodeJS
    } else if (typeof exports !== 'undefined') {
        module.exports = Tips;
    } else {
        this.Tips = Tips;
    }
}());