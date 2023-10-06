function validarFormulario(datosFormulario, camposObligatorios, camposOpcionales) {
    const errores = {};
  
    camposObligatorios.forEach((campo) => {
      if (!datosFormulario[campo] || datosFormulario[campo].trim() === '') {
        errores[campo] = 'Este campo es obligatorio.';
      }
    });
  
    camposOpcionales.forEach((campo) => {
      if (campo === 'email') {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (
          datosFormulario[campo] &&
          !emailRegex.test(datosFormulario[campo])
        ) {
          errores[campo] = 'El formato del correo electrónico no es válido.';
        }
      }
    });
  
    return errores;
  }
  

const formulario = {
    nombre: 'Juan',
    email: 'juan@example.com',
    telefono: '123456789',
};
  
const camposObligatorios = ['nombre', 'email'];
const camposOpcionales = ['telefono'];
  
const errores = validarFormulario(formulario, camposObligatorios, camposOpcionales);
  
console.log(errores);
  
if (Object.keys(errores).length === 0) {
    console.log('El formulario es válido.');
} else {
    console.log('El formulario contiene errores.');
}