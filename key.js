let textbox = document.querySelector('#username');
textbox.addEventListener('keyup', function () {
    let typemsg = textbox.value;
    let mag = document.querySelector('#msg');
    mag.innerHTML = typemsg;
});
let im_1=document.querySelector(".image");
console.log(im_1);
im_1.src="sp.jpg";