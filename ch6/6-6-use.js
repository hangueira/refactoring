import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
console.log(owner.firstName);
owner.changeFirstName('hks');
console.log(owner.firstName);
console.log(getDefaultOwner());
