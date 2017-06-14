var getPostion = function () {

};

var getTextSelection = function () {
    var rect;
    var sel, h = 12;
    if (window.getSelection || document.getSelection) {
      sel = window.getSelection();
      rect = sel.getRangeAt(0).getBoundingClientRect();
      if (sel.focusNode && sel.focusNode.nodeType == 3 && sel.getRangeAt(0).commonAncestorContainer && sel.getRangeAt(0).commonAncestorContainer.nodeType == 3) {
        rect = {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left
        };
      }
    } else if (document.selection) {
      rect = document.selection.createRange().getBoundingClientRect();
        rect = {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left
        };
    }
    return rect;
};

document.addEventListener('mouseup', function (e) {
    
    console.log(getTextSelection());
});
