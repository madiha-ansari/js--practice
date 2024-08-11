var value = document.getElementById("inputData")
function display(element) {
    let elementValue = element.innerText
    value.value += elementValue
}

function clearValue(){
    value.value = " "
}

function getResult() {
    value.value = eval(value.value)
}

function del() {
    let data = document.getElementById("inputData");
    data.value = data.value.substr(0, data.value.length - 1);
}