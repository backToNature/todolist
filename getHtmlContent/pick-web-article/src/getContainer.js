/**
 * Created by daringuo on 2017/10/28.
 */

import $$option from './option.js';

let getContainer = (root) => {
    let containers = root.querySelectorAll($$option.container.join(','));
    let _containers = [], _hideContainers = [];
    // 容器过滤机制

    /**
     * @todo
     * 基于视觉制定一些过滤规则
     */
    containers.forEach(item => {
        let style = window.getComputedStyle(item);
        if (style.display === 'none') {
            _hideContainers.push(item);
        }

    });

    // 过滤隐藏的容器
    containers.forEach(item => {
        let isParentHide = false;
        _hideContainers.some(it => {
            if (it.contains(item) || it === item) {
                isParentHide = true;
                return
            }
        });

        if (!isParentHide) {
            _containers.push(item);
        }
    });
    return _containers;
};

export default getContainer;