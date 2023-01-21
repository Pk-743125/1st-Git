// GEELEMENTBYCLASSNAME //
//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
///console.log(items[1]);
//items[1].textContent = 'HELLO HELLO';
//items[1].style.fontWeight = 'bold';
//items[2].style.backgroundColor = 'green';
//for(var i=0 ; i<items.length ; i++){
    //items[i].style.fontWeight = 'bold';
//}


//GETELEMENTBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Special';
li[1].style.fontWeight = 'bold';
//li[2].style.backgroundColor = 'green';
for(var i=0 ; i<li.length ; i++){
    li[i].style.fontWeight = 'bold';
}
for(var i=0 ; i<li.length ; i++){
    li[i].style.backgroundColor = 'yellow';
}
