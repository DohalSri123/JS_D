const printwish = (message, color) => {
    let h1_Tag = document.querySelector('#msg_1');
    console.log('h1_tag');
    h1_Tag.innerHTML = message;
    h1_Tag.style.backgroundColor = color;
    h1_Tag.style.color = 'white';
    h1_Tag.style.padding = '10px';
    h1_Tag.style.fontsize = '15px';

}


let wish = document.querySelector('#gm');
wish.addEventListener('click', function(){
        printwish('Good_Morning', 'green');

});
let wish_1 = document.querySelector('#gf');
wish_1.addEventListener('click', function(){
    printwish('Good_Afternoon', 'orangered');

});
let wish_2 = document.querySelector('#ge');
wish_2.addEventListener('click', function(){
    printwish('Good_Evening', 'red');

});
let wish_3 = document.querySelector('#gn');
wish_3.addEventListener('click', function(){
    printwish('Good_Night', 'yellow');

});