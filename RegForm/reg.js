document.querySelector('#registration_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let name;
    let mail;
    let password;

    name = document.querySelector(".form-control").value;
    localStorage.setItem("name", name);
    mail = document.querySelector(".form-control_2").value;
    localStorage.setItem("email", mail);
    password = document.querySelector(".form-control_3").value;
    localStorage.setItem("password", password);
    const copy = document.querySelector(".copy");
    copy.innerHTML = "Name:" + name + "<br>Email: " + mail + "<br>Password: " + password;

    var storedDataSets = localStorage.getItem('dataSets');
    var dataSets = [];
    if (storedDataSets) {

        dataSets = JSON.parse(storedDataSets);
    }
    var newDataSet = {
        name: name,
        mail: mail,
        password: password
    };
    dataSets.push(newDataSet);
    localStorage.setItem('dataSets', JSON.stringify(dataSets));
    displayDataSets(dataSets);
});
function displayDataSets(dataSets) {
    var displayData = document.querySelector(".copy");
    displayData.innerHTML = " ";

    for (var i = 0; i < dataSets.length; i++) {
        var dataSet = dataSets[i];
        var name = dataSet.name;
        var mail = dataSet.mail;
        

        var dataSetElement = document.createElement("div");
        dataSetElement.innerHTML = "Name: " + name + "<br>mail: " + mail + "<hr>";

        displayData.appendChild(dataSetElement);
    }
}
var storedDataSets = localStorage.getItem('dataSets');

if (storedDataSets) {
    var parsedDataSets = JSON.parse(storedDataSets);
    displayDataSets(parsedDataSets);
} else {
    displayDataSets([]);
}

function checkname(){
    var checkName = document.querySelector(".form-control").value;
    if(checkName=== dataset.name){
        alert("error");
    }
}






