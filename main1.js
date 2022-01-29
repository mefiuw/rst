const tables = {
    A: { order: ["sałatka A", "Zupa A", "Deser A"] },
    B: { order: ["sałatka B", "Zupa B", "Deser B"] },
    C: { order: ["sałatka C", "Zupa C", "Deser C"] },
    D: { order: ["sałatka D", "Zupa D", "Deser D"] },
    // klucz : wartosc
}
const btn = document.querySelector('#addTable');
let room = [];
let tablee=[];
let i;


for(i in tables){
    if(tables.hasOwnProperty(i)){

      tablee.push(tables[i].order)
    }
    }
    let tabl=tablee[i];

const init = () => {
  //tablica zawierajaca info o aktualnych stolikach w pokoju

    const createDiv = (tableName, rootDiv) => {
        //nazwy zmiennych takie jakie maja zadanie
        // refactor kodu, te same czynnosci wywal do fn
        let div = document.createElement("div")
        div.setAttribute("id", tableName);
        rootDiv.appendChild(div);
        let hideBtn = document.createElement("button")
        hideBtn.setAttribute("id", `${tableName}-hideBtn`)
        hideBtn.innerHTML = "Hide";
        div.appendChild(hideBtn)
        let showBtn = document.createElement("button")
        showBtn.setAttribute("id", `${tableName}-showBtn`)
        showBtn.innerHTML = "Show ";
        div.appendChild(showBtn)
        let tableOrder = document.createElement("span")
        tableOrder.setAttribute("id", `${tableName}-tableOrder`)
        tableOrder.innerHTML =""
        div.appendChild(tableOrder)
        let close = document.createElement("button")
        close.setAttribute("id", `${tableName}-closeBtn`)
        close.innerHTML = "Close";
        div.appendChild(close)
    }
    const addEventListener = (tableName, fn) => {
        const diV = document.getElementById(tableName);
        diV.addEventListener('click', fn)
    }
    const addtable = (tableName, orderName, rootDiv) => {
        let tableID = `tableID-${tableName}`
         

        createDiv(tableID, rootDiv, orderName);
        addEventListener(`${tableID}-closeBtn`, closeMenubtn)
        addEventListener(`${tableID}-showBtn`, showMenubtn)
        addEventListener(`${tableID}-hideBtn`, hideMenubtn)
        
    }
    const showMenubtn = (event) => {
      
        event.target.parentNode.childNodes[2].innerHTML =`Zamówienie : ${[tablee]}`
        
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































