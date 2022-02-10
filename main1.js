const tables = {
    A: { order: ["Sałatka A", "Zupa A", "Deser A"] },
    B: { order: ["Sałatka B", "Zupa B", "Deser B"] },
    C: { order: ["Sałatka C", "Zupa C", "Deser C"] },
    D: { order: ["Sałatka D", "Zupa D", "Deser D"] },
   
}


const btn = document.querySelector('#addTable');
let room = [];
const init = () => {
   
    const createDiv = (tableName, rootDiv) => {
        

        let div = document.createElement("div")
        div.setAttribute("id", tableName);
        rootDiv.appendChild(div);

        const hideBtn=createButton( `${tableName}-hideBtn`,"Hide")
        div.appendChild(hideBtn)

        const showBtn=createButton( `${tableName}-showBtn`,"Show")
        div.appendChild(showBtn)
        
        const closeBtn=createButton( `${tableName}-closeBtn`,"Close")
        div.appendChild(closeBtn)
        
        
        let tableOrder = document.createElement("span")
        tableOrder.style.display="none"
        tableOrder.setAttribute("id", `${tableName}-tableOrder`)
        
        tableOrder.innerHTML =""
        div.appendChild(tableOrder)
        
       
        const id_table=tableName.slice(-1)
        const singleTableArray =tables[id_table].order
    
   for(let j=0;j<singleTableArray.length;j++){
       let p=document.createElement('p');
       p.innerText =singleTableArray[j];
        tableOrder.appendChild(p)
   }
   document.getElementById('root').appendChild(div);
}
    const createButton=(id,text)=>{
let button=document.createElement("button")
button.setAttribute("id",id)
button.innerHTML=text;
return button;
    }
    const addEventListener = (tableName, fn) => {
        const diV = document.getElementById(tableName);
        diV.addEventListener('click', fn)
    }
    const addtable = (tableName, orderName, rootDiv) => {
        let tableID = `tableID-${tableName}`
         
        createDiv(tableID, rootDiv, orderName);
        addEventListener(`${tableID}-closeBtn`, closeMenubtn)
        addEventListener(`${tableID}-showBtn`,()=>{showMenubtn(tableID+"-tableOrder")} )
        addEventListener(`${tableID}-hideBtn`,()=>{ hideMenubtn(tableID+"-tableOrder")})
        
    }
    const showMenubtn = (param) => { 
        document.getElementById(param).style.display="block";
    }
    const hideMenubtn = (param) => {
        
        document.getElementById(param).style.display="none";
    }
    const closeMenubtn = (event) => {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        const tableName = event.target.id.split("-")[1]
       room = room.filter(table => (table != tableName));
    }
   
    for (table in tables) {
        if (room.indexOf(table) == -1) {
            addtable(table, tables[table], document.querySelector('#root'));
            room.push(table)      
         break
        }
    }
}
btn.addEventListener('click', () => init())



















