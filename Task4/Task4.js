//EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title="ABC";
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = "WELCOME" ;
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);


//GETELEMENTBYID //
//console.log(document.getElementById("header-title"));
//var headertitle = document.getElementById("header-title");
//console.log(headertitle );
//headertitle.textContent = 'Hello' ; 
//headertitle.innerText = 'Hiiiii';
//console.log(headertitle.textContent);
//console.log(headertitle.innerText);
//headertitle.innerHTML = '<h3>Hello</h3>';
//headertitle.style.borderBottom = 'solid 4px #ccc';
//var header = document.getElementById("main-header");
//header.style.borderBottom = 'solid 3px #000';


// GEELEMENTBYCLASSNAME //
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = 'HELLO HELLO';
items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';
for(var i=0 ; i<items.length ; i++){
    items[i].style.fontWeight = 'bold';
}
