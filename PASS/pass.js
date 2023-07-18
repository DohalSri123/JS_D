let passBox = document.querySelector('#password');
let chBox = document.querySelector('#showPassword');
chBox.addEventListener('change',function () {
    let typeAttr = passBox.getAttribute('type');
    if (typeAttr==='password'){
        passBox.setAttribute('type','text');
    }
    else{
        passBox.setAttribute('type','password')
    }
});