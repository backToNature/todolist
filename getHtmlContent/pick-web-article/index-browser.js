/**
 * Created by daringuo on 2017/10/16.
 */

import $$getContainer from './src/getContainer.js';
import $$getGoodContainer from './src/getGoodContainer.js';
import $$getSummary from './src/getSummary.js';
import $$washHtml from './src/washHtml.js';

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

    // let html = dom.innerHtml;

    console.log($$washHtml(dom));

    return {
        articleDom: dom ? dom.node : null,
        summary: $$getSummary(root),
        allText: allText
    };
};

export default pickWA;
