let propiedades_alquiler = [
  {
    nombre: "Maitencillo1",
    src: "assets/img/propiedad1.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Maitencillo2",
    src: "assets/img/propiedad2.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Maitencillo3",
    src: "assets/img/propiedad3.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Maitencillo3",
    src: "assets/img/propiedad3.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoke: true,
  },
];

let propiedades_ventas = [
  {
    nombre: "Zapallar1",
    src: "assets/img/propiedad1.avif",
    desc: "Elegante casa con vista al mar, ubicada en un exclusivo sector de Zapallar. Incluye piscina y amplio jardín.",
    ubicación: "Zapallar",
    habitaciones: "5",
    costos: "25.500 UF",
    pets: false,
    smoke: false,
  },
  {
    nombre: "Concón2",
    src: "assets/img/propiedad2.avif",
    desc: "Moderno departamento en la playa con excelentes terminaciones, perfecto para disfrutar todo el año.",
    ubicación: "Concón",
    habitaciones: "3",
    costos: "18.200 UF",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Reñaca3",
    src: "assets/img/propiedad3.avif",
    desc: "Espaciosa casa familiar en un sector tranquilo de Reñaca. Cuenta con quincho y terraza con vista panorámica.",
    ubicación: "Reñaca",
    habitaciones: "4",
    costos: "22.300 UF",
    pets: true,
    smoke: false,
  },
  {
    nombre: "Viña del Mar4",
    src: "assets/img/propiedad4.avif",
    desc: "Penthouse de lujo en el corazón de Viña del Mar. Con acceso directo a servicios y espacios comunes premium.",
    ubicación: "Viña del Mar",
    habitaciones: "3",
    costos: "30.000 UF",
    pets: true,
    smoke: false,
  },
];

const ventas = document.getElementById("ventas");
const arriendos = document.getElementById("arriendos");

let inyeccion_ventas = "";
let inyeccion_alquiler = "";

let smoker = `<p class="green">Se puede Fumar</p>`;
let noSmoker = `<p class="red">No se permite Fumar</p>`;

let pets = `<p class="green">Se permiten Mascotas</p>`;
let noPets = `<p class="red">No se permiten Mascotas</p>`;



for (let edif of propiedades_alquiler.slice(0,3)) {
  inyeccion_alquiler += `
    <div class="card">
    <h3>${edif.nombre}</h3>
    <div>
    <p class="ubi">${edif.ubicación}</p>
    <img src="${edif.src}" alt="Card image cap">
    <span>${edif.costos}</span>
    </div>
      <p>${edif.desc}</p>
    ${edif.pets?pets:noPets}
    ${edif.smoke?smoker:noSmoker}
    </div>
    `;
  }


  
  arriendos.innerHTML = inyeccion_alquiler;
  
  for (let edif of propiedades_ventas.slice(0,3)) {
    inyeccion_ventas += `
    <div class="card">
    <h3>${edif.nombre}</h3>
    <div>
    <p class="ubi">${edif.ubicación}</p>
    <img src="${edif.src}" alt="Card image cap">
    <span>${edif.costos}</span>
    </div>
    <p>${edif.desc}</p>
    ${edif.pets?pets:noPets}
    ${edif.smoke?smoker:noSmoker}
    </div>
    `;
}
ventas.innerHTML = inyeccion_ventas;
