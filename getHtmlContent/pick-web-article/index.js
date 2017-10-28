
import $$getContainer from './src/getContainer.js';
import $$getGoodContainer from './src/getGoodContainer.js';

let pickWA = (root) => {
    let containers = $$getContainer(root);
    let goodContainers = $$getGoodContainer(containers);
    if (goodContainers.length) {
        return goodContainers[goodContainers.length - 1];
    } else {
        return null;
    }
};

export default pickWA;
