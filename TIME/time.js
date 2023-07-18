
let indianwatch = () =>{
    let time = { timeZone: 'Asia/Kolkata' };
    let currentdate = new Date().toLocaleDateString('en-us', time);
    let currentTime = new Date().toLocaleTimeString('en-us', time);
    console.log(time);
    document.querySelector('#indian_date').innerHTML= currentdate;
    document.querySelector('#indian_time').innerHTML= currentTime;

};
setInterval(indianwatch, 1000);

let usawatch = () =>{
    let time = { timeZone: 'America/New_York' };
    let currentdate = new Date().toLocaleDateString('en-us', time);
    let currentTime = new Date().toLocaleTimeString('en-us', time);
    console.log(time);
    document.querySelector('#american_date').innerHTML= currentdate;
    document.querySelector('#american_time').innerHTML= currentTime;

};
setInterval(usawatch, 1000);

let watch = () =>{
    let time = { timeZone: 'Asia/Shanghai' };
    let currentdate = new Date().toLocaleDateString('en-us', time);
    let currentTime = new Date().toLocaleTimeString('en-us', time);
    console.log(time);
    document.querySelector('#china_date').innerHTML= currentdate;
    document.querySelector('#china_time').innerHTML= currentTime;

};
setInterval(watch, 1000);