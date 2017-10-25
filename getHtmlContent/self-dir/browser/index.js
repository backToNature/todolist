import $$getContainer from '../getContainer.js';
import $$getGoodContainer from '../getGoodContainer.js';

let body = window.document.body;

let containers = $$getContainer(body);

console.log($$getGoodContainer(containers));