const campos =[
    {name: 'nombre', label: 'Ingresa tu nombre', type:'text'},
    {name: 'email', label: 'Ingresa tu correo', type:'email'},
    {name: 'password', label: 'Ingresa tu contraseña', type:'password'},
    {name: 'edad', label: 'Ingresa tu edad', type:'number'},
    {name: 'rol', label: 'Ingresa tu rol', type:'number'}
]

const contenedor = document.getElementById('contenedorInputs');

campos.forEach((campo) => {
    const label = document.createElement('label');
    label.textContent = campo.label;

    const input = document.createElement('input');
    input.type=campo.type;
    input.name=campo.name;
    input.id=campo.name;

    input.classList.add('entradaTexto');

    contenedor.appendChild(label);
    contenedor.appendChild(input);
})