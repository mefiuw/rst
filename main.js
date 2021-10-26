
const items = [
    { result: 'tableA', count: 'obiadA' },
    { result: 'tableB', count: 'obiadB' },
    { result: 'tableC', count: 'obiadC' },
    { result: 'tableD', count: 'obiadD' },
    { result: 'tableE', count: 'obiadE' },
    { result: 'tableF', count: 'obiadF' }

]
const itemsMeat = items.map((item) => {
    return item.count
})
console.log(itemsMeat)
let item = items[Math.floor(Math.random() * items.length)];
console.log(item)




let number = 0;
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
        if (number == 0) {
            let item = items[Math.floor(Math.random() * items.length)];
            tekst.innerHTML = item.count
        }
        number++;

    }
    let hideMenu = () => {
        tekst.innerHTML = ""
        number = 0;

    }
    div1.addEventListener("click", hideMenu);
    div2.addEventListener("click", showMenu);
}

btn.addEventListener("click", addTable);

