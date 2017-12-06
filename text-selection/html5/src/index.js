import $$getSelection from './getSelection.js';


let mergeRects = (rects) => {
    let tops = [], bottoms = [], lefts = [], rights = [];
    for (let i = 0, len = rects.length, rect; i < len; ++i) {
        rect = rects[i];
        if (rect) {
            tops.push(rect.top);
            bottoms.push(rect.bottom);
            lefts.push(rect.left);
            rights.push(rect.right);
        }
    }
    return {
        top: Math.min.apply(Math, tops),
        right: Math.max.apply(Math, rights),
        bottom: Math.max.apply(Math, bottoms),
        left: Math.min.apply(Math, lefts)
    };
}

let getSelectionPosition = () => {
    let sel = $$getSelection(window);
    if (sel && sel.focusNode && sel.focusNode.nodeType == 3 && sel.getRangeAt(0).commonAncestorContainer && sel.getRangeAt(0).commonAncestorContainer.nodeType == 3) {
        // let clientRects = sel.getRangeAt(0).getBoundingClientRect(),
        var isDocument = false;
        var rangeMethodName = "getBounding" + (isDocument ? "Document" : "Client") + "Rect";
        var rects = [];
        for (var i = 0, rect = null, rangeRect; i < sel.rangeCount; ++i) {
            rects.push(sel.getRangeAt(i)[rangeMethodName]());
        }

        console.log(mergeRects(rects));

            // topLeftPoint = {top: clientRects[0].top, left: clientRects[0].left},
            // rightBottomPoint = {top: clientRects[len - 1].top, left: clientRects[len - 1].left};
        // return {
        //     startPoint: topLeftPoint,
        //     endPoint: rightBottomPoint
        // };
    } else {
        return null;
    }
    
};

export default getSelectionPosition;
