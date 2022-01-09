//create elememt
const newHeading = document.createElement('h2');

//new id
newHeading.id = 'task-Title';

//New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
console.log(firstLi.children[0]);

let val;

val = link.className;
val = link.classList;
val = link.classList.add('test');
val = link.classList.remove('test');
val = link;

console.log(val);

