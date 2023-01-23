//TRAVERSING THE DOM //
var itemlist = document.querySelector('#items');
// parentNode //
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = 'silver';
//console.log(itemlist.parentNode.parentNode);

// parentElement //
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor = '#F0F8FF';
//console.log(itemlist.parentElement.parentElement);

// childNodes //
//console.log(itemlist.childNodes);
//console.log(itemlist.children);
//console.log(itemlist.children[2]);
//itemlist.children[2].style.backgroundColor = 'pink';

// firstChild //
//console.log(itemlist.firstChild);
// firstElementChild //
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent = 'FIRST';


// lastChild //
//console.log(itemlist.lastChild);
// lastElementChild //
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = 'LAST';

// nextSibling //
//console.log(itemlist.nextSibling);
// nextElementSibling //
//console.log(itemlist.nextElementSibling );


// previousSibling //
//console.log(itemlist.previousSibling);
// previousElementSibling //
//console.log(itemlist.previousElementSibling );
//itemlist.previousElementSibling.style.color = 'pink';


// createElement //


// create a div //
var newdiv = document.createElement('div');

// Add class
newdiv.className = 'Newclass';

// Add id //
newdiv.id = 'Newid';

// Add Attribute //
newdiv.setAttribute('title' , 'Hello div');

// Create text node //
var newdivtext = document.createTextNode('Hello');

// Add text to div //
newdiv.appendChild (newdivtext);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newdiv);
newdiv.style.fontSize = '50px';
container.insertBefore(newdiv , h1);
















