/**
 * Created by daringuo on 2017/10/16.
 */

import $$getContainer from './src/getContainer.js';
import $$getGoodContainer from './src/getGoodContainer.js';
import $$getSummary from './src/getSummary.js';

let pickWA = (root) => {
    let containers = $$getContainer(root);
    let goodContainers = $$getGoodContainer(containers);
    let dom, allText = '';
    if (goodContainers.length) {
        dom = goodContainers[goodContainers.length - 1];
        allText = dom.node.innerText;
    } else {
        dom = null;
    }

    return {
        articleDom: dom.node,
        summary: $$getSummary(root),
        allText: allText
    };
};

export default pickWA;
