let rangeEl = document.querySelector('.customrange1');
let amountEl = document.querySelector('#amount');
rangeEl.addEventListener('input', function () {
     let selectAmt = rangeEl.value;
    amountEl.innerHTML=selectAmt;
});