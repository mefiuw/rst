let items = {
    A: { order: ["sałatka A", "Zupa A", "Deser A"] },
    B: { order: ["sałatka B", "Zupa B", "Deser B"] },
    C: { order: ["sałatka C", "Zupa C", "Deser C"] },
    D: { order: ["sałatka D", "Zupa D", "Deser D"] },
}
let a = 1;

let number = 1;
let number1 = 1;
let restauracja = document.querySelector('#root')
let btn = document.querySelector('#addTable')

let i = 1;




let addTable = () => {


    if (i <= 4) {
        if (a > 4) {
            alert('osiągnieto max ilosc stolikow')
            a = 4;
            i = 4;
            return;
        }
        let div = document.createElement("div")
        div.setAttribute("id", i, a);
        restauracja.appendChild(div)
        let div1 = document.createElement("button")
        div1.setAttribute("id", i, a);
        div1.innerHTML = "Hide";
        div.appendChild(div1)
        let div2 = document.createElement("button")
        div2.setAttribute("id", i, a);
        div.appendChild(div2)
        div2.innerHTML = "Show ";
        let tekst = document.createElement("span")
        div.appendChild(tekst)
        tekst.setAttribute("id", i, a);
        tekst.innerHTML = ""
        let close = document.createElement("button")
        div.appendChild(close)
        close.setAttribute("id", i, a);
        close.innerHTML = "Close";
        console.log(i, a)


        let showMenu = () => {

            if (tekst.id == 1) {

                tekst.innerHTML = items.A.order;
            }
            if (tekst.id == 2) {

                tekst.innerHTML = items.B.order;
            } if (tekst.id == 3) {

                tekst.innerHTML = items.C.order;
            } if (tekst.id == 4) {

                tekst.innerHTML = items.D.order;
            }
        }
        let closeDiv = (e) => {

            if (close.id == 1) {
                div.remove(1);
                i = 1;



            }
            if (close.id == 2) {
                div.remove(2);
                i = 2;


            }
            if (close.id == 3) {
                div.remove(3);
                i = 3;
            }
            if (close.id == 4) {
                div.remove(4);
                i = 4;

            }

            a--;
        }
        close.addEventListener('click', closeDiv);

        let hideMenu = () => {
            if (number1 == 1) {
                tekst.innerHTML = ""

            }


        }

        i++;
        a++;
        div1.addEventListener("click", hideMenu);
        div2.addEventListener("click", showMenu);

    }

}
btn.addEventListener("click", addTable);
a = i;














