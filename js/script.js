const login = document.getElementById("login");
const registro = document.getElementById("registro");
const ingreso = document.getElementById("ingreso");

login.addEventListener('click', function mostrarformlogin() {
    document.getElementById("form-login").style.display = 'block';
    document.getElementById("form-registro").style.display = 'none';
    document.getElementById("form-ingreso").style.display = 'none';
})

registro.addEventListener('click', function mostrarformregistro() {
    document.getElementById("form-login").style.display = 'none';
    document.getElementById("form-registro").style.display = 'block';
    document.getElementById("form-ingreso").style.display = 'none';
})

ingreso.addEventListener('click', function mostrarformingreso() {
    document.getElementById("form-login").style.display = 'none';
    document.getElementById("form-registro").style.display = 'none';
    document.getElementById("form-ingreso").style.display = 'block';
})

function mostrarlogin() {
    const usuario = document.getElementById("usuario");
    const contraseña = document.getElementById("contraseñal");
    if (usuario.value !== "" && contraseña.value !== "") {
        console.log("Usuario: " + usuario.value);
        console.log("Contraseña: " + contraseña.value)

    } else {
        alert("No se lleno correctamente los campos");
    }

}

function mostrarregistro() {
    const correo = document.getElementById("correo");
    const nombre = document.getElementById("nombre");
    const contraseñar = document.getElementById("contraseñar");
    const contraseñar1 = document.getElementById("contraseñar1");
    if (correo.value === "" || nombre.value === "") {
        alert("No se lleno todos los campos");
    } else {
        if (contraseñar.value === "" || contraseñar1.value === "") {
            alert("No se lleno todos los campos");
        } else {
            if (contraseñar.value !== contraseñar1.value) {
                alert("Las contraseñas no coinciden");
            } else {
                console.log("Correo: " + correo.value);
                console.log("Nombre: " + nombre.value);
                console.log("Contraseña: " + contraseñar1.value);
            }
        }
    }
}

function mostrarDatos() {
    const nombrec = document.getElementById("nombrec");
    const apellido = document.getElementById("apellido");
    const CUI = document.getElementById("CUI");
    const departamento = document.getElementById("departamento");
    if (nombrec.value === "" || apellido.value === "") {
        alert("No se lleno todos los campos");
    } else {
        if (CUI.value === "" || departamento.value === "") {
            alert("No se lleno todos los campos");
        } else {

            console.log("Nombre: " + nombrec.value);
            console.log("Apellido: " + apellido.value);
            console.log("CUI: " + CUI.value);
            console.log("Departamento: " + departamento.value);

        }
    }
}
