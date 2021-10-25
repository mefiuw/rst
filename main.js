





let json1 = '{"result":"tableA", "count":"obiadA"}';
let json2 = '{"result":"tableB", "count":"obiadB"}';
let json3 = '{"result":"tableB", "count":"obiadB"}';
let json4 = '{"result":"tableB", "count":"obiadB"}';
let obj1 = JSON.parse(json1);
let obj2 = JSON.parse(json2);
let obj3 = JSON.parse(json3);
let obj4 = JSON.parse(json4);
console.log(obj1.count);
console.log(obj1.result);
console.log(obj2.count);
console.log(obj2.result);
console.log(obj3.count);
console.log(obj3.result);
console.log(obj4.count);
console.log(obj4.result);
let table = document.querySelector('table')
const cofnij = document.querySelector('cofnij')
let divNumber = 0;
let addTableNumber = 0;
let btn = document.querySelector('button.addTable')

let remover = () => {
    console.log("cofnij");
    cofnij.addEventListener("click", remover);
}
let addTable = () => {

    console.log("ok")
    let div = document.createElement("div");
    document.body.appendChild(div)
    div.innerHTML = '<button class="cofnij">cofnij</button>' + '<button class="table">table</button>';

    let showMenu = () => {
        console.log("ok")
        table.innerHTML = (obj1.count);
        table.addEventListener("click", showMenu);
    }


}

btn.addEventListener("click", addTable);




if (addTableNumber == 1) {
    let div = document.createElement("div")
    document.body.appendChild(div)
    addTableNumber++;
}
else
    addTableNumber = 0;


