//const restauracja = document.querySelector('#root');

const tables = {
    A: { order: ["sałatka A", "Zupa A", "Deser A"] },
    B: { order: ["sałatka B", "Zupa B", "Deser B"] },
    C: { order: ["sałatka C", "Zupa C", "Deser C"] },
    D: { order: ["sałatka D", "Zupa D", "Deser D"] },
    // klucz : wartosc
}
const btn = document.querySelector('#addTable');
let room = [];
const init = () => {



    //tablica zawierajaca info o aktualnych stolikach w pokoju

    const createDiv = (divID, rootDiv) => {
        //nazwy zmiennych takie jakie maja zadanie
        // refactor kodu, te same czynnosci wywal do fn
        let div = document.createElement("div")
        div.setAttribute("id", divID);
        rootDiv.appendChild(div);
        let hideBtn = document.createElement("button")
        hideBtn.setAttribute("id", `${divID}-hideBtn`)
        hideBtn.innerHTML = "Hide";
        div.appendChild(hideBtn)
        let showBtn = document.createElement("button")
        showBtn.setAttribute("id", `${divID}-showBtn`)
        showBtn.innerHTML = "Show ";
        div.appendChild(showBtn)
        let tableOrder = document.createElement("span")
        tableOrder.setAttribute("id", `${divID}-tableOrder`)
        tableOrder.innerHTML = ""
        div.appendChild(tableOrder)
        let close = document.createElement("button")
        close.setAttribute("id", `${divID}-closeBtn`)
        close.innerHTML = "Close";
        div.appendChild(close)
    }
    const addEventListener = (divID, fn) => {
        const diV = document.getElementById(divID);
        diV.addEventListener('click', fn)
    }
    const addtable = (tableName, tableOrder, rootDiv) => {
        let tableID = `tableID-${tableName}`
        let OrderName = `OrderName-${tableOrder}`

        createDiv(tableID, rootDiv, OrderName);
        addEventListener(`${tableID}-closeBtn`, closeMenubtn)
        addEventListener(`${tableID}-showBtn`, showMenubtn)
        addEventListener(`${tableID}-hideBtn`, hideMenubtn)
    }
    const showMenubtn = (event) => {

        event.target.parentNode.childNodes[2].innerHTML = event.target.nextSibling.innerHTML.tables[table].order;

    }

    const hideMenubtn = (event) => {

        event.target.parentNode.childNodes[2].innerHTML = "";

    }




    const closeMenubtn = (event) => {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        const tableName = event.target.id.split("-")[1]
        room = room.filter(table => (table != tableName));

    }


    //iterujemy po wszystkich stolikach


    // tableName - nazwa stolika, tableOrder - zamownienie, restauracja - div


    for (table in tables) {
        if (room.indexOf(table) == -1) {
            addtable(table, tables[table], document.querySelector('#root'));
            room.push(table)
            break
        }
    }



}

btn.addEventListener('click', () => init())





















// const tab = [tableA = 0, tableB = 1, tableC = 2, tableD = 3]
// let index = [0];
// let number1 = 1;
// let restauracja = document.querySelector('#root')
// let btn = document.querySelector('#addTable')
// let i = 0;
// let target

// let addTable = () => {

//     if (i >= 4 || tab.length < 4 || index == 5) {
//         btn.style.display = "none";
//         restauracja.style.backgroundColor = "red";
//         alert("nie masz tylu klientów, nie żartuj sobie");
//         target.removeEventListener("click", addTable)

//     }




//     if (!tableA) {
//         let div = document.createElement("div")
//         div.setAttribute("id", index);
//         restauracja.appendChild(div);
//         let div1 = document.createElement("button")
//         div1.setAttribute("id", index)
//         div1.innerHTML = "Hide";
//         div.appendChild(div1)
//         let div2 = document.createElement("button")
//         div2.setAttribute("id", index)
//         div2.innerHTML = "Show ";
//         div.appendChild(div2)
//         let tekst = document.createElement("span")
//         tekst.setAttribute("id", index)
//         tekst.innerHTML = ""
//         div.appendChild(tekst)
//         let close = document.createElement("button")
//         close.setAttribute("id", index)
//         close.innerHTML = "Close";
//         div.appendChild(close)
//         let test = Math.floor(Math.random() * 4)
//         //console.log(test);
//         let showMenu = () => {

//             if (test === 0)// || tekst.id == [tableA])
//             {
//                 tekst.innerHTML = items.A.order;
//             }
//             if (test === 1) { //|| tekst.id == [tableB]) {

//                 tekst.innerHTML = items.B.order;
//             } if (test === 2) {//|| tekst.id == [tableC]) {

//                 tekst.innerHTML = items.C.order;
//             } if (test === 3) { //|| tekst.id == [tableD]) {

//                 tekst.innerHTML = items.D.order;
//             }
//         }
//         div2.addEventListener("click", showMenu);
//         let hideMenu = () => {
//             if (number1 == 1) {
//                 tekst.innerHTML = ""
//             }

//         }
//         div1.addEventListener("click", hideMenu);
//         let closeDiv = () => {


//             if (close.id == tableA) {
//                 div.remove(tableA);
//                 index--;
//             }
//             else index == tableA;
//             div.remove(tableA);
//             if (close.id == tableB) {
//                 div.remove(tableB);
//                 index--;

//             }
//             else index == tableB;
//             div.remove(tableB);
//             if (close.id == tableC) {
//                 div.remove(tableC);
//                 index--;
//             }
//             else index == tableC;
//             div.remove(tableC);
//             if (close.id == tableD) {
//                 div.remove(tableD);
//                 index--;
//             } else index == tableD;
//             div.remove(tableD);
//             btn.style.display = "block";
//             restauracja.style.backgroundColor = "purple";

//             i--;

//         }
//         close.addEventListener('click', closeDiv);
//     }

//     //console.log(i, index);
//     i++;
//     index++;
// }
// btn.addEventListener('click', addTable)














