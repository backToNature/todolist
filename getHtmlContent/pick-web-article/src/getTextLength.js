/**
 * Created by daringuo on 2017/10/28.
 */


let getContainerTextLength = (node) => {
    let _recursive = (node) => {
        let tag_name = (node.nodeType === 3 ? '#text' : ((node.nodeType === 1 && node.tagName && node.tagName > '') ? node.tagName.toLowerCase() : '#invalid'));


    };
};

export default getContainerTextLength;