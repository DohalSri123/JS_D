let textareael = document.querySelector('#msg');
let charCountEl = document.querySelector('#char-count');
textareael.addEventListener('keyup', function () {
    let textLength = textareael.value.length;
    charCountEl.innerHTML = textLength;
    console.log(textLength)
});