function captudadatos() {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const cedula = document.getElementById('cedula').value;
    const edad = document.getElementById('edad').value;
    const selectElement = document.querySelector('select');
    const selectElement = selectElement.value;

}



const informacion = `
    <><strong>Nombre:</strong>${nombre}<hr></p>
    <><strong>Apellido:</strong>${apellido}<hr></p>
    <><strong>Correo:</strong>${correo}<hr></p>
    <><strong>Cédula:</strong>${cedula}<hr></p>
    <><strong>Edad:</strong>${edad}<hr></p>
    <><strong>Género</strong>${genero}<hr></p>
`;
