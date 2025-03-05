const htmlBody = document.querySelector("body");

function appendToDisplay(val){
    let inputNumber = document.getElementById('InputNumber');
    let madeChange = inputNumber.value += val;
    return madeChange;
}

function calculate(){
    let x = document.getElementById("InputNumber").value;
    let y = eval(x);
    document.getElementById("InputNumber").value = y;
}

function clearAll(){
 document.getElementById('InputNumber').value = "";
}

function remove(){
    const moveAll = "what is your name";
    console.log(moveAll);
}

function changeBackgrouundcolor(){
    const section = document.querySelector(".section");
    const htmlBody = document.querySelector("body");
    const colors = ["Red", "Cyan", "DarkBlue", "LightBlue", "Purple", "Yellow", "Lime", "Magenta", "Pink", "White", "Silver", "Grey", "Orange", "Brown", "Maroon", "Green", "Olive", "Aquamarine"];
    const justIndex = Math.floor(Math.random() * colors.length);
    const justColor = colors[justIndex];

    section.style.backgroundColor = justColor;
    console.log(justColor);
}