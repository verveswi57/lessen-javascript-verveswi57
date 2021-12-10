/**
 * Generate a list
 * @param {HTMLElement} container
 * @param {Array} content
 */
function genList(container, content) {

  let container = document.getElementById('container');
  let ul = document.querySelector('ul');
  let li = ul.children;
  
   for (let i = 0; i < li.length; i++) {
     li[i] =  document.body.content.append[i];
   }
}

let aContainer = document.getElementById('container');
let items = ['item 1', 'item 2', 'item 3', 'item 4'];

genList(aContainer, items);
