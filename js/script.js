async function login() {
    let divMensaje = document.querySelector('#mensaje');
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;
    // Buscar usuario y contraseña en la base de datos de Supabase
    const { data, error } = await db
        .from('usuario')
        .select('*')
        .eq('correo', usuario)
        .eq('password', contra);
    // Error de conexión o consulta desde supabase
    if (error) {
        divMensaje.innerHTML = error.message;
        divMensaje.style.color = "darkred";
        return;
    }
    // Si encontró al menos un usuario...
    if (data.length > 0) {
        localStorage.setItem("usuario", data[0].nombre);
        divMensaje.innerHTML = "Login correcto";
        divMensaje.style.color = "green";
        window.location.href = "pages/principal.html";
    } else {
        divMensaje.innerHTML = "Credenciales incorrectas";
        divMensaje.style.color = "darkred";
    }
}


const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click", login)


