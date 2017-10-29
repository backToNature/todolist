import $$getContainer from '../getContainer.js';
import $$getGoodContainer from '../getGoodContainer.js';

let body = window.document.body;

let containers = $$getContainer(body);

let now = new Date();
let pickedContainers = $$getGoodContainer(containers);
console.log(pickedContainers);
let points = [];
pickedContainers.forEach(item => {
    points.push(item.point);
});
console.log(points);
console.log(`time:${new Date() - now}`);