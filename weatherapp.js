// Agarro el buscador
const buscador = document.getElementById("placeholder");
const hoy = document.querySelector("#arriba .hoy .dia");
const hoygraf = document.querySelector("#arriba .hoy .grafico");
const hoymin = document.querySelector("#arriba .hoy .temp .min")
const hoymax = document.querySelector("#arriba .hoy .temp .max");
const mañana = document.querySelector("#arriba .mañana .dia");
const mañgraf = document.querySelector("#arriba .mañana .grafico");
const mañmin = document.querySelector("#arriba .mañana .temp .min")
const mañmax = document.querySelector("#arriba .mañana .temp .max");
const dia3 = document.querySelector("#arriba .dia3 .dia");
const graf3 = document.querySelector("#arriba .dia3 .grafico");
const min3 = document.querySelector("#arriba .dia3 .temp .min")
const max3 = document.querySelector("#arriba .dia3 .temp .max");
const dia4 = document.querySelector("#arriba .dia4 .dia");
const graf4 = document.querySelector("#arriba .dia4 .grafico");
const min4 = document.querySelector("#arriba .dia4 .temp .min")
const max4 = document.querySelector("#arriba .dia4 .temp .max");
const dia5 = document.querySelector("#arriba .dia5 .dia");
const graf5 = document.querySelector("#arriba .dia5 .grafico");
const min5 = document.querySelector("#arriba .dia5 .temp .min")
const max5 = document.querySelector("#arriba .dia5 .temp .max");

console.log(hoygraf.src)



// Miro cuando hace enter
buscador.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {

// Saco el valor elegido
  const elegido = buscador.value;
  console.log(elegido);

// Lo filtro en la API y lo traigo
  const prom = fetch("https://clima-api-ada-glveejbhrd.now.sh/api/weather?q=" + elegido);
console.log(prom);
prom.then(res => res.json())
    .then (lugar => {
    console.log(lugar);
    console.log(lugar[0].icon)
    if(lugar) {
    hoy.innerHTML = "Hoy"
    hoygraf.src = "http:"+ lugar[0].icon;
    hoymin.innerHTML = "Min: " + lugar[0].min;
    hoymax.innerHTML = "| Max: " + lugar[0].max;
    mañana.innerHTML = "Mañana"
    mañgraf.src = "http:"+ lugar[1].icon;
    mañmin.innerHTML = "Min: " + lugar[1].min;
    mañmax.innerHTML = "| Max: " + lugar[1].max;
    dia3.innerHTML = "Fecha: " + lugar[2].date;
    graf3.src = "http:"+ lugar[2].icon;
    min3.innerHTML = "Min: " + lugar[2].min;
    max3.innerHTML = "| Max: " + lugar[2].max;
    dia4.innerHTML = "Fecha: " + lugar[3].date;
    graf4.src = "http:"+ lugar[3].icon;
    min4.innerHTML = "Min: " + lugar[3].min;
    max4.innerHTML = "| Max: " + lugar[3].max;
    dia5.innerHTML = "Fecha: " + lugar[4].date;
    graf5.src = "http:"+ lugar[4].icon;
    min5.innerHTML = "Min: " + lugar[4].min;
    max5.innerHTML = "| Max: " + lugar[4].max;
}
})
    }
})


