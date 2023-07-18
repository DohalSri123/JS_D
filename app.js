console.log(document)

console.log(document.head);

console.log(document.title);

console.log(document.body);

//console.log(document.body.nav);

let nav_tag =document.querySelector('nav');
console.log(nav_tag);

let anchor=document.querySelector('nav a');
console.log(anchor);

let text= anchor.innerHTML;
console.log(text);

anchor.innerHTML='dohal';

let div_1 = document.querySelector('#msg');
console.log(div_1);
div_1.innerHTML='good evening';
div_1.style.backgroundColor='limegreen';
div_1.style.color='white';
div_1.style.padding='10px';
div_1.style.fontsize='15px';
div_1.style.backgroundImage= url("./bp.jpg");

