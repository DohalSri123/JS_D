
    let textbox = document.querySelector('.form-control');
textbox.addEventListener('keyup', function () {
    let typemsg = textbox.value;
    let mag = document.querySelector('#msg');
    mag.innerHTML = typemsg;
});

let texbox = document.querySelector('.form-control_1');
textbox.addEventListener('keyup', function () {
    let typemsg = texbox.value;
    let mag = document.querySelector('#mg');
    mag.innerHTML = typemsg;
});

