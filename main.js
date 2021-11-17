let items = {
    A: { order: ["sałatka A", "Zupa A", "Deser A"] },
    B: { order: ["sałatka B", "Zupa B", "Deser B"] },
    C: { order: ["sałatka C", "Zupa C", "Deser C"] },
    D: { order: ["sałatka D", "Zupa D", "Deser D"] },
}
const tab = [tableA = 0, tableB = 1, tableC = 2, tableD = 3]
let index = [0];
let number1 = 1;
let restauracja = document.querySelector('#root')
let btn = document.querySelector('#addTable')
let i = 0;
let target

let addTable = () => {

    if (i >= 4 || tab.length < 4 || index == 5) {
        btn.style.display = "none";
        restauracja.style.backgroundColor = "red";
        alert("nie masz tylu klientów, nie żartuj sobie");
        target.removeEventListener("click", addTable)

    }




    if (!tableA) {
        let div = document.createElement("div")
        div.setAttribute("id", index);
        restauracja.appendChild(div);
        let div1 = document.createElement("button")
        div1.setAttribute("id", index)
        div1.innerHTML = "Hide";
        div.appendChild(div1)
        let div2 = document.createElement("button")
        div2.setAttribute("id", index)
        div2.innerHTML = "Show ";
        div.appendChild(div2)
        let tekst = document.createElement("span")
        tekst.setAttribute("id", index)
        tekst.innerHTML = ""
        div.appendChild(tekst)
        let close = document.createElement("button")
        close.setAttribute("id", index)
        close.innerHTML = "Close";
        div.appendChild(close)
        let test = Math.floor(Math.random() * 4)
        //console.log(test);
        let showMenu = () => {

            if (test === 0)// || tekst.id == [tableA])
            {
                tekst.innerHTML = items.A.order;
            }
            if (test === 1) { //|| tekst.id == [tableB]) {

                tekst.innerHTML = items.B.order;
            } if (test === 2) {//|| tekst.id == [tableC]) {

                tekst.innerHTML = items.C.order;
            } if (test === 3) { //|| tekst.id == [tableD]) {

                tekst.innerHTML = items.D.order;
            }
        }
        div2.addEventListener("click", showMenu);
        let hideMenu = () => {
            if (number1 == 1) {
                tekst.innerHTML = ""
            }

        }
        div1.addEventListener("click", hideMenu);
        let closeDiv = () => {


            if (close.id == tableA) {
                div.remove(tableA);
                index--;
            }
            else index == tableA;
            div.remove(tableA);
            if (close.id == tableB) {
                div.remove(tableB);
                index--;

            }
            else index == tableB;
            div.remove(tableB);
            if (close.id == tableC) {
                div.remove(tableC);
                index--;
            }
            else index == tableC;
            div.remove(tableC);
            if (close.id == tableD) {
                div.remove(tableD);
                index--;
            } else index == tableD;
            div.remove(tableD);
            btn.style.display = "block";
            restauracja.style.backgroundColor = "purple";

            i--;

        }
        close.addEventListener('click', closeDiv);
    }

    //console.log(i, index);
    i++;
    index++;
}
btn.addEventListener('click', addTable)














