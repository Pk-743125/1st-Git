// QUERYSELECTOR //
//var header = document.querySelector("#main-header");
//header.style.borderBottom = 'solid 3px #000';

//var input = document.querySelector('input');
//input.value = 'WELCOME';

//var submit = document.querySelector('input[type="submit"]');
//submit.value = 'SEND';

//var item = document.querySelector(".list-group-item");
//item.style.color = 'blue';

//var lastItem = document.querySelector(".list-group-item:last-child");
//lastItem.style.color = 'orange';

//var secondItem = document.querySelector(".list-group-item:nth-child(2)");
//secondItem.style.color = 'pink';


var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style="display:none";



// QUERYSELECTORALL //
var li = document.querySelectorAll(".list-group-item");
console.log(li);
li[1].style.color = 'pink';
var odd = document.querySelectorAll("li:nth-child(odd)");
for( var i = 0 ; i<odd.length ; i++){
    odd[i].style.backgroundColor = 'green';
}
