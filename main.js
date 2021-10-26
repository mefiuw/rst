
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






let restauracja = document.querySelector('#root')
let btn = document.querySelector('#addTable')


let addTable = () => {

    let div = document.createElement("div");
    restauracja.appendChild(div)

    let div1 = document.createElement("button")
    div1.innerHTML = "Hide";
    div.appendChild(div1)

    let div2 = document.createElement("button")
    div.appendChild(div2)
    div2.innerHTML = "Show ";
    let tekst = document.createElement("span")
    div.appendChild(tekst)
    tekst.innerHTML = ""

    let showMenu = () => {
        tekst.innerHTML = "zamowienie"

    }
    let hideMenu = () => {
        tekst.innerHTML = ""

    }
    div1.addEventListener("click", hideMenu);
    div2.addEventListener("click", showMenu);
}

btn.addEventListener("click", addTable);

