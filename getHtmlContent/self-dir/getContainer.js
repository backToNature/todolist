import $$option from '../option.js';

let getContainer = (root) => {
    let element_index = 0; //元素编号
    let containers = root.querySelectorAll($$option.container.join(','));
    let _containers = [];
    // 过滤一些比较离谱的容器
    containers.forEach(item => {
        // console.log(item.innerText.length);
        if (item.innerText.length < 10) {
            // 过滤掉文本小于10的容器
        } else {
            _containers.push(item);
        }
        // return true;
    });
    return _containers;
};

export default getContainer;