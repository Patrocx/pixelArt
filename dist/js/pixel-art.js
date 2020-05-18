var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

//Variables Globales
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicador = document.getElementById("indicador-de-color");
var longitudGrilla = 1750;
var i = 0;
var mouseStatus;


colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    var colorActual = colorPersonalizado.value;
    indicador.style.backgroundColor = colorActual;
  })
);

//funcion que recorre y ejecuta las funciones principales
function recorredor(longitud, fn, paramExtra1, paramExtra2){
  for(i; i<longitud; i++){
    fn(paramExtra1, paramExtra2);
  }
  i = 0;
};

//Funcion agregar click
function agregarClick(aQuien, queHace){
  aQuien[i].onclick = queHace;
}

//Funcion mostrar paleta de colores
function paletaColores(){
  var newDiv = document.createElement("div");
  newDiv.className = "color-paleta";
  newDiv.style.backgroundColor = nombreColores[i];
  newDiv.onclick = function(){
    indicador.style.backgroundColor = this.style.backgroundColor;
  };
  paleta.appendChild(newDiv);
}


function grilla2(){
  var grilla = document.createElement("div");
    grilla.onclick = function(){
      this.style.backgroundColor = indicador.style.backgroundColor;
    }
    grilla.onmouseover = function(){
      if(mouseStatus == 1){
        this.style.backgroundColor = indicador.style.backgroundColor;
      }
    }
  grillaPixeles.appendChild(grilla);
};

//Estado de mouse
grillaPixeles.onmousedown = function(){
  mouseStatus = 1;
};
grillaPixeles.onmouseup = function(){
  mouseStatus = 0;
};

//Boton borrar todo
var botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click", borrarTodo);

function borrarTodo(){
  var $cuadraditos = $("#grilla-pixeles").find("div"); 
  $cuadraditos.fadeOut(10);
  for(var i = 0; i<1750; i++){
    $cuadraditos[i].style.backgroundColor="white";
  }
  $cuadraditos.fadeIn(1000);
}

//Funcion cargar heroes
var $heroes = $(".imgs").find("img");
function mostraHeroe(){
  seleccionarHeroe(this.id);
}
function seleccionarHeroe(nombreHeroe){
  switch (nombreHeroe){
    case "batman":
      cargarSuperheroe(batman)
    break;
    case "wonder":
      cargarSuperheroe(wonder)
    break;
    case "flash":
      cargarSuperheroe(flash)
    break;
    default:
      cargarSuperheroe(invisible)
    break;
  }
}
//Funcion de descargar imagen creada
var guardar = document.getElementById("guardar");
guardar.addEventListener("click", guardarPixelArt);

//Ejecutador del programa
$(document).ready(function(){
  recorredor(longitudGrilla, grilla2);
  recorredor(nombreColores.length, paletaColores);
  recorredor($heroes.length, agregarClick, $heroes, mostraHeroe);
});