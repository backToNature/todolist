let getGoodContainer = (containers) => {
    let containers_details = [];
    let addParams = (obj) => {
        let _node = obj.node;

        obj.link_num = _node.querySelectorAll('a').length || 0; // 记录链接数量

        obj.img_num = _node.querySelectorAll('img').length || 0; // 记录图片数量

        obj.text_length = _node.innerText.length || 0; // 记录文本长度

        obj.link_text_length = 0;

        _node.querySelectorAll('a').forEach(item => {
            obj.link_text_length += item.innerText.length || 0;
        });

    };

    containers.forEach(item => {
        let curObj = {
            node: item
        };
        addParams(curObj);
        containers_details.push(curObj);
    });
    return containers_details;
};

export default getGoodContainer;