let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let selection = document.getElementById("select").value

let form = document.getElementById("form")
let alert1 = document.querySelector('[name="alert"]')

form.addEventListener("submit", e => {
    e.preventDefault()

    let nombreU = nombre.value.trim();
    let apellidoU = apellido.value.trim();


    if (nombre == "") {
        showAlert("error", "El campo está vacio", alert1)

    }



})


function guardarTarea() {


}

function showAlert(tipo, mensaje, divElement) {
    divElement.innerHTML = mensaje;
    switch (tipo) {
        case "ok":
            divElement.className = "alert alert-primary";
            break;
        case "error":
            divElement.className = "alert alert-warning";
            break;
        case "info":
            divElement.className = "alert alert-success";
            break;

    }
    divElement.hidden = false;
    setTimeout(function () {
        divElement.hidden = true;
    }, 7000)
};