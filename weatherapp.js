// Agarro el buscador
const buscador = document.getElementById("placeholder");
const botonDeFiltro = document.querySelector("button")
const ciudad = document.querySelector("#contenido .ciudad")
const hoy = document.querySelector("#contenido .hoy .dia");
const hoygraf = document.querySelector("#contenido .hoy .grafico");
const hoymin = document.querySelector("#contenido .hoy .temp .min")
const hoymax = document.querySelector("#contenido .hoy .temp .max");
const mañana = document.querySelector("#contenido .mañana .dia");
const mañgraf = document.querySelector("#contenido .mañana .grafico");
const mañmin = document.querySelector("#contenido .mañana .temp .min")
const mañmax = document.querySelector("#contenido .mañana .temp .max");
const dia3 = document.querySelector("#contenido .dia3 .dia");
const graf3 = document.querySelector("#contenido .dia3 .grafico");
const min3 = document.querySelector("#contenido .dia3 .temp .min")
const max3 = document.querySelector("#contenido .dia3 .temp .max");
const dia4 = document.querySelector("#contenido .dia4 .dia");
const graf4 = document.querySelector("#contenido .dia4 .grafico");
const min4 = document.querySelector("#contenido .dia4 .temp .min")
const max4 = document.querySelector("#contenido .dia4 .temp .max");
const dia5 = document.querySelector("#contenido .dia5 .dia");
const graf5 = document.querySelector("#contenido .dia5 .grafico");
const min5 = document.querySelector("#contenido .dia5 .temp .min")
const max5 = document.querySelector("#contenido .dia5 .temp .max");

// Defino los días

const weekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb","Dom"];

var diadehoy = new Date().getDay();
var diade3 = diadehoy + 2;
var diade4 = diadehoy + 3;
var diade5 = diadehoy + 4;


for (let i=0; i<weekdays.length; i++) {
  if (diade3-1 == i) {
    diade3 = (weekdays[i])
  }
}

for (let i=0; i<weekdays.length; i++) {
  if (diade4-1 == i) {
    diade4 = (weekdays[i])
  }
}

for (let i=0; i<weekdays.length; i++) {
  if (diade5-1 == i) {
    diade5 = (weekdays[i])
  }
}

// Miro cuando hace enter
buscador.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      return traerDatos()
}
})

// O cuando presiono el botón

botonDeFiltro.onclick = function (event) {
  traerDatos()
}

const traerDatos = () => {
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
    ciudad.innerHTML = buscador.value
    hoy.innerHTML = "Hoy"
    hoygraf.src = "http:"+ lugar[0].icon;
    hoymin.innerHTML = "Min: " + lugar[0].min;
    hoymax.innerHTML = "| Max: " + lugar[0].max;
    mañana.innerHTML = "Mañana"
    mañgraf.src = "http:"+ lugar[1].icon;
    mañmin.innerHTML = "Min: " + lugar[1].min;
    mañmax.innerHTML = "Max: " + lugar[1].max;
    dia3.innerHTML = diade3
    graf3.src = "http:"+ lugar[2].icon;
    min3.innerHTML = "Min: " + lugar[2].min;
    max3.innerHTML = "Max: " + lugar[2].max;
    dia4.innerHTML = diade4
    graf4.src = "http:"+ lugar[3].icon;
    min4.innerHTML = "Min: " + lugar[3].min;
    max4.innerHTML = "Max: " + lugar[3].max;
    dia5.innerHTML = diade5
    graf5.src = "http:"+ lugar[4].icon;
    min5.innerHTML = "Min: " + lugar[4].min;
    max5.innerHTML = "Max: " + lugar[4].max;
}
})
    }
