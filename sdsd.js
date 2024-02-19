var miBtn = document.getElementById("boton");
miBtn.addEventListener('click',function(){
var texto1 = document.querySelector(".nombre");
var texto2 = document.querySelector(".asunto");
var texto3 = document.querySelector(".mensaje");
document.querySelector(".resultado1").innerHTML = ""
document.querySelector(".resultado2").innerHTML = ""
document.querySelector(".resultado3").innerHTML = ""
if (texto1.value == "" || !/^[A-Za-z\s]+$/.test(texto1.value)) {
    document.querySelector(".resultado1").innerHTML = "El nombre completo es requerido.";
    }
    
    if (texto2.value == "" || !/^[A-Za-z\s]+$/.test(texto2.value)) {
        document.querySelector(".resultado2").innerHTML = "El asunto es requerido.";
        }

        if (texto3.value == "" || !/^[A-Za-z\s]+$/.test(texto3.value)) {
            document.querySelector(".resultado3").innerHTML = "El mensaje es requerido.";
            } 
    
            if ((texto1.value !== "" && /^[A-Za-z\s]+$/.test(texto1.value)) && (texto2.value !== "" && /^[A-Za-z\s]+$/.test(texto2.value)) && (texto3.value !== "" && /^[A-Za-z\s]+$/.test(texto3.value))) {
                document.querySelector(".resultado4").innerHTML = "Mensaje enviado con éxito!!";
                }        
});

var miBtn = document.getElementById("boton2");
miBtn.addEventListener('click',function(){
    var t1 = document.querySelector(".num1");
var t2 = document.querySelector(".num2");

document.querySelector(".resu").innerHTML = "El resultado es " + (t1.value*t2.value);
});

function cambiarColor() {
    var colorSeleccionado = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = colorSeleccionado + " !important";

    // Mostrar el color seleccionado
    var muestraColor = document.getElementById("muestraColor");
    muestraColor.style.backgroundColor = colorSeleccionado;
    muestraColor.innerText = colorSeleccionado;
  }