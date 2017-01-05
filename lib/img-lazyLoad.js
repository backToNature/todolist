(function ($) {
    $.fn.wapLazyLoad = function (opt) {
        var $window = $(window);
        var elements = $(this).not('.img-lazyed');

        //160407 更新 针对下拉分页显示图片的需求,定义随机数设置事件名
        var loadNo = parseInt(Math.random() * 1000000000);

        //默认配置
        var config = {
            threshold       : 0,
            failure_limit   : 0,
            effect: 'show',     //支持 show 和 fadeIn 2种显示效果
            event: 'scroll',
            container: window,
            data_attribute  : "lazy-src",
            load            : null
        };

        $.extend(config, opt || {});

        //获取事件元素,默认window
        var $container = (config.container === undefined || config.container === window) ? $window : $(config.container);

        $container.on((config.event + ".lazy-load" + loadNo), function () {
            var counter = 0;
            if (elements.length === 0) {
                $container.off(config.event + ".lazy-load" + loadNo);
            }
            elements.each(function(){
                //触发条件判断
                if ($.abovethetop(this, config) || $.leftofbegin(this, config)) {
                    /* Nothing. */

                } else if (!$.belowthefold(this, config) && !$.rightoffold(this, config)) {
                    //加载图片
                    lazyloadFn(this);
                    /* if we found an image we'll load, reset the counter */
                    counter = 0;
                } else {
                    if (++counter > config.failure_limit) {
                        return false;
                    }
                }
            })

        });

        // 加载图片
        function lazyloadFn(ele) {
            var self = ele;
            var $self = $(ele);
            //初始化参数
            self.loaded = false;
            if (!self.loaded) {
                $("<img />").on("load", function() {
                    var original = $self.attr("data-" + config.data_attribute);
                    $self.css("opacity", 0).hide();

                    if ($self.is("img")) {
                        $self.attr("src", original);
                    } else {
                        $self.css("background-image", "url('" + original + "')").css("background-repeat", "no-repeat");
                    }
                    //动画效果
                    if (config.effect === "fadeIn") {
                        $self.show().css({
                            "opacity": 1,
                            "-webkit-transition": "opacity 0.2s ease-in",
                            "transition": "opacity 0.2s ease-in"
                        });
                    } else {
                        $self.css("opacity", 1).show();
                    }

                    self.loaded = true;
                    //160407 更新
                    $self.addClass('img-lazyed');

                    /* Remove image from array so it is not looped next time. */
                    var temp = $.grep(elements, function(element) {
                        return !element.loaded;
                    });
                    elements = $(temp);

                    if (config.load) {
                        var elements_left = elements.length;
                        config.load.call(self, elements_left, config);
                    }
                })
                .attr("src", $self.attr("data-" + config.data_attribute));
            }
        }


        //获取图片相对于视觉视口的位置,上下左右
        //判断图片上边沿是否进入视口, true 表示未进入
        $.belowthefold = function(element, config) {
            var fold;

            if (config.container === undefined || config.container === window) {
                fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
            } else {
                fold = $(config.container).offset().top + $(config.container).height();
            }

            return fold <= $(element).offset().top - config.threshold;
        };

        //判断图片左边沿是否进入视口, true 表示未进入
        $.rightoffold = function(element, config) {
            var fold;

            if (config.container === undefined || config.container === window) {
                fold = $window.width() + $window.scrollLeft();
            } else {
                fold = $(config.container).offset().left + $(config.container).width();
            }

            return fold <= $(element).offset().left - config.threshold;
        };

        //判断图片下边沿是否跑出视口, true 表示已跑出
        $.abovethetop = function(element, config) {
            var fold;

            if (config.container === undefined || config.container === window) {
                fold = $window.scrollTop();
            } else {
                fold = $(config.container).offset().top;
            }

            return fold >= $(element).offset().top + config.threshold  + $(element).height();
        };

        //判断图片左边沿是否跑出视口, true 表示已跑出
        $.leftofbegin = function(element, config) {
            var fold;

            if (config.container === undefined || config.container === window) {
                fold = $window.scrollLeft();
            } else {
                fold = $(config.container).offset().left;
            }

            return fold >= $(element).offset().left + config.threshold + $(element).width();
        };

        //初始化
        $container.trigger(config.event);
    };
})(jQuery);