var win = window, doc = win.document;

var util = {
    addEvent: function (element, eType, handle, bol) {
        if (element.addEventListener) {           //如果支持addEventListener
                element.addEventListener(eType, handle, bol);
        } else if (element.attachEvent){          //如果支持attachEvent
            element.attachEvent('on' + eType, handle);
        } else {                                  //否则使用兼容的onclick绑定
            element['on'+eType] = handle;
        }
    }
};
var selection = {
    getSelectionPoint: function () {
        var txt;
        if (win.getSelection) {
            txt = win.getSelection().toString(); 
        } else if (doc.getSelection) { 
            txt = doc.getSelection(); 
        } else if (doc.selection) { 
            txt = doc.selection.createRange().text; 
        } 
        return txt;
    },
    getSelectionRange: function () {
        var sel = win.getSelection();

        console.log(sel.getRangeAt(0).getBoundingClientRect());
        console.log(sel.getRangeAt(0).getClientRects());

    }
};

util.addEvent(doc, 'mouseup', function (e) {
    var textSelection = win.getSelection();

    if (!textSelection) {
        return;
    }

    var boundingClientRect = textSelection.getRangeAt(0).getBoundingClientRect();

    if (boundingClientRect.top === boundingClientRect.bottom || boundingClientRect.left === boundingClientRect.right) {
        return;
    }

    console.log(selection.getSelectionRange());

}, false)
