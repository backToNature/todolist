(function () {
    var cssText = ".qb_collection_clearfix:after{content:'.';display:block;visibility:hidden;height:0;line-height:0;font-size:0;clear:both}.qb_collection_clearfix{zoom:1}#qb_collection_dialog_mask{position:fixed;width:100%;height:100%;background:#000;opacity:.2;top:0;left:0;right:0;bottom:0;z-index:2147483647}#qb_collection_img_mask{width:62px!important;height:27px!important;border:solid 1px rgba(0,0,0,0.1);border-radius:2px!important;-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;background-color:#fff!important;position:absolute!important;z-index:2147483647!important;box-sizing:content-box!important;cursor:pointer!important;font-family:'Microsoft YaHei'!important;_font-family:'\5FAE\8F6F\96C5\9ED1'!important;text-align:center!important;font-size:12px!important;color:#000!important;line-height:27px!important}#qb_collection_img_mask:hover{border:solid 1px rgba(0,0,0,0.2)!important}#qb_collection_img_mask:active{border:solid 1px rgba(0,0,0,0.2)!important;background-color:rgba(0,0,0,0.1)!important}#qb_collection_img_mask .qb_collection_img_icon{display:inline-block;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUJBMkJGRjg4NjQ2MTFFNzkxQzVDN0YxREJBNzU1QjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUJBMkJGRjk4NjQ2MTFFNzkxQzVDN0YxREJBNzU1QjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQkEyQkZGNjg2NDYxMUU3OTFDNUM3RjFEQkE3NTVCMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQkEyQkZGNzg2NDYxMUU3OTFDNUM3RjFEQkE3NTVCMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkAoY1IAAAG0SURBVHjaTJG9TxtBEMXffpx92Gd8WEhI2EUs0USiwxIVqfkDcEEoIAUCIUqaJH2SKi0iKdJGShuloaNJQ0llISEEAtHcGXPGh3dvh1mjSBnpp13t7Mx7Oytof18m5+fvrdYdHUVFMR4/SSG+g8MRbatSqWyzTGlrTxsLC591enFxQKuri9Hd3bvg9raf5PkbJ+UnTCrchzgMT0y7HY/m5g7T4+MDmafpSr3TWS/NzvbJGBDRiRLircfv/ZnP1ZeW1vMkWRFJt/urqlTXaQ0jBB6yDGUpJwLWOdTiGAGvGI+RGfNbGyKTAY2pIEgCpRCPRhgRgaUguHA4GIAtogCEBv5Kd319isHg41QYIqzVUGGVgImaTfCDUVgLYW2TrBUF0RdZ29w8Ktrt14/39xvgTsTygpVUpTJREFzMHPGbFBstZHV3dzizvLzzcHm593hzsya4qw9fyLbmedtigyW+/EoQNbVP6jy/aii1kxrzTWqt+R9+8rFg/HjrzCLzlRnql3FYBNPTZ1GrtZX0ej8q1epMGTjkzBZe4g+zxjxJ/As/Ged63HbDWpt67/9Fn5ncfRZgAIv5tuPXAOVaAAAAAElFTkSuQmCC');width:12px;height:11px}#qb_collection_img_mask .qb_collection_img_icon.active{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk5QkNGRTg4NjQ2MTFFNzhGOTJDNEU4RjM1RDZGNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk5QkNGRTk4NjQ2MTFFNzhGOTJDNEU4RjM1RDZGNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTlCQ0ZFNjg2NDYxMUU3OEY5MkM0RThGMzVENkY3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTlCQ0ZFNzg2NDYxMUU3OEY5MkM0RThGMzVENkY3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpVCBEoAAAEaSURBVHjajJCxTsNADIZtXxpBFalEzVgUhi68BAsDWyTWboWprDwFQ8dKLIiZpRJ9BCTYWIG1YmAIKFWHUinNHf6vAmUp4Mnn/zv7t9mNxzSbTgfLyeTMxPEui9wZkXNipqqqhs7ag6ooXreybLSTppc86/VOPvP8SlotImvJh3Pv+KCR+LcI2fmctpPklN+y7EkajX2F6NfQBrYsn0XhvT/h9VQCKzr4hf4ZYIXL8sLC+9rzZjvKgJVmp3MThOGt+tvIQwMDVpppSnG32zdheG+/r1SHtQYNDFihxYJMFBVxu31siB7r6yNHzWvKgBXvfbWigDmPmI90xsNPd81RgwYGbFA/m3b80O+HzHztd3Wur7Vl/exfAgwApbxwdUBkBPMAAAAASUVORK5CYII=')}#qb_caup_inject_div{position:fixed;z-index:2147483647;top:0;right:0}#qb_caup_inject_div.qb_cau_center{top:50%;left:50%;margin-top:-159px;margin-left:-197px}";
    var $util = {
        execStyle: function (cssText) {
            var document = window.document;
            var styleTag = document.createElement('style');
            styleTag.setAttribute('type', 'text/css');
            if (document.all) {
                styleTag.styleSheet.cssText = cssText;
            } else {
                styleTag.innerHTML = cssText;
            }
            document.getElementsByTagName("head").item(0).appendChild(styleTag);
        }
    };

    $util.execStyle(cssText);
    $store = $('<div id="qb_collection_img_mask"> <div class="qb_collection_img_icon"></div> <span>收藏</span> </div>');
    $store.on('click', function (e) {
        _storeImg($util.storage.get('latestImg'));
    });
    $(window).on('mousemove', function (e) {
        var offsetTop, offsetRight, width, height;
        var $TARGET = $(e.target), $MASK_SELECTOR = $('#qb_collection_img_mask'),
            LIMIT_WIDTH = 200, LIMIT_HEIGHT = 100;
        // $util.storage.set('$mousemove_target', $TARGET);
        if ($TARGET.attr('id') === 'qb_collection_img_mask' || $TARGET.parent().attr('id') === 'qb_collection_img_mask') {
            return;
        }
        if (e.target.nodeName.toUpperCase() === 'IMG') {
            width = $TARGET.width();
            height = $TARGET.height();
            offsetTop = $TARGET.offset().top;
            offsetLeft = $TARGET.offset().left;
            if (width >= LIMIT_WIDTH && height >= LIMIT_HEIGHT) {
                // $util.storage.set('latestImg', $TARGET);
                $store.css({
                    top: offsetTop + 20,
                    left: offsetLeft + width - 20 - 62
                });
                if (!$MASK_SELECTOR.length) {
                    $('body').append($store);
                }
                $store.show();
            }
        } else {
            if ($MASK_SELECTOR.length) {
                $MASK_SELECTOR.hide();
            }
        }
    });

    // window.getContent = function (wrapper) {
    //     var _result = {};

    //     var _recursive = function (_node) {
    //         var tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid'));
            

    //     };
    //     _recursive(wrapper);
    //     return _result;
    // };


    
}());


// console.log(getContent(window.document.body));
