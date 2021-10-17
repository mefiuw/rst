const menu1 = "stolik zielony zamowil : " + "frytki,chesseburger,cola";
const order1 = function () {
    const ul = document.createElement('ul');
    ul.textContent = menu1;
    document.body.appendChild(ul);
    console.log("ok1")
};
const divZielony = document.querySelector("div.zielony")
divZielony.addEventListener("click", order1);

const menu2 = "stolik czerwony zamowil : " + "frytki,chesseburger,cola";
const order2 = function () {
    const ul = document.createElement('ul');
    ul.textContent = menu2;
    document.body.appendChild(ul);
    console.log("ok2")
};
const divCzerwony = document.querySelector("div.czerwony")
divCzerwony.addEventListener("click", order2);

const menu3 = "stolik czarny zamowil : " + "frytki,chesseburger,cola";
const order3 = function () {
    const ul = document.createElement('ul');
    ul.textContent = menu3;
    document.body.appendChild(ul);
    console.log("ok3")
};
const divCzarny = document.querySelector("div.czarny")
divCzarny.addEventListener("click", order3);

const menu4 = "stolik Niebieski zamowil : " + "frytki,chesseburger,cola";
const order4 = function () {
    const ul = document.createElement('ul');
    ul.textContent = menu4;
    document.body.appendChild(ul);
    console.log("ok4")
};
const divNiebieski = document.querySelector("div.niebieski")
divNiebieski.addEventListener("click", order4);




