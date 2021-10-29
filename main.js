let items = {
    A: { order: ["sałatka A", "Zupa A", "Deser A"] },
    B: { order: ["sałatka B", "Zupa B", "Deser B"] },
    C: { order: ["sałatka C", "Zupa C", "Deser C"] },
    D: { order: ["sałatka D", "Zupa D", "Deser D"] },
}
let a = [1, 2, 3, 4];
let i = 1;
let number = 1;
let number1 = 1;
let restauracja = document.querySelector('#root')
let btn = document.querySelector('#addTable')

let addTable = () => {

    if (i <= 4) {
        let div = document.createElement("div")
        div.setAttribute("id", i);
        restauracja.appendChild(div)
        let div1 = document.createElement("button")
        div1.setAttribute("id", i);
        div1.innerHTML = "Hide";
        div.appendChild(div1)
        let div2 = document.createElement("button")
        div2.setAttribute("id", i);
        div.appendChild(div2)
        div2.innerHTML = "Show ";
        let tekst = document.createElement("span")
        div.appendChild(tekst)
        tekst.setAttribute("id", i);
        tekst.innerHTML = ""
        let close = document.createElement("button")
        div.appendChild(close)
        close.setAttribute("id", i);
        close.innerHTML = "Close";
        console.log(i)


        let showMenu = () => {

            if (tekst.id == "1") {

                tekst.innerHTML = items.A.order;
            }
            if (tekst.id == "2") {

                tekst.innerHTML = items.B.order;
            } if (tekst.id == "3") {

                tekst.innerHTML = items.C.order;
            } if (tekst.id == "4") {

                tekst.innerHTML = items.D.order;
            }
        }
        let closeDiv = () => {

            if (close.id == 1) {
                div.remove();

            }
            if (close.id == 2) {
                div.remove();

            }
            if (close.id == 3) {
                div.remove();

            }
            if (close.id == 4) {
                div.remove();

            }
            i--;
        }
        close.addEventListener('click', closeDiv);

        let hideMenu = () => {
            if (number1 == 1) {
                tekst.innerHTML = ""

            }


        }

        i++;
        div1.addEventListener("click", hideMenu);
        div2.addEventListener("click", showMenu);

    }
}

btn.addEventListener("click", addTable);



