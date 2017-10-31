/**
 * Created by daringuo on 2017/10/28.
 */

import $$option from './option.js';

let getContainer = (root) => {
    let containers = root.querySelectorAll($$option.container.join(','));
    let _containers = [];
    // 容器过滤机制

    containers.forEach(item => {
        /**
         * @todo
         * 基于视觉制定一些过滤规则
         */
        if (!item.style.display === 'none') {
            _containers.push(item);
        }
    });
    return _containers;
};

export default getContainer;