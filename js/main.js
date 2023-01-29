//1) Declaración de Variables
let valor_escrito = document.getElementById("valor");
let btn_buscar = document.getElementById("btn_buscar");
let btn_con_suerte = document.getElementById("btn_con_suerte");
let url = "https://www.google.com/search?q=";
let btn_apps = document.getElementById("btn_apps");
let mostrar = false;

//2) Abrir la dirección almacenada cuando se presione el botón "Buscar con Google"
btn_buscar.onclick = () => {
    alert("Revisaste el Url! \nAutor--> Thezero")
    window.navigator.vibrate([200, 100, 200]);
    //window.open(url+valor_escrito.value,"_self");
    html2canvas(document.body, {
        onrendered (canvas) {
          var link = document.getElementById('download');;
          var image = canvas.toDataURL();
          link.href = image;
          link.download = 'screenshot.png';
        }
    });
}

//3) Abrir la dirección almacenada cuando se presione la tecla "ENTER"
valor_escrito.onkeyup = (event) => {
    let keycode = event.keyCode;
    if(keycode == "13"){
        alert("Revisaste el Url! \nAutor--> Thezero")
        window.navigator.vibrate([200, 100, 200]);
        //window.open(url+valor_escrito.value,"_self")
        html2canvas(document.body, {
            onrendered (canvas) {
              var link = document.getElementById('download');;
              var image = canvas.toDataURL();
              link.href = image;
              link.download = 'screenshot.png';
            }
        });
    }
}

//4) Abrir el url de Google Doodles al presionar "Me siento con suerte"
btn_con_suerte.onclick = () => {
    window.open("https://www.google.com/doodles","_self");
}

//5) Mostrar y ocultar el panel de aplicaciones de Google
btn_apps.onclick = () => {
    let google_panel = document.getElementById("google_panel");
    if(mostrar == false){
        google_panel.style.display = "block";
        mostrar = true;
    }else{
        google_panel.style.display = "none";
        mostrar = false;
    }
}

//XD
