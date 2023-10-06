function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
  
    const fechaNac = new Date(fechaNacimiento);
  
    const edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  
    if (
      fechaNac.getMonth() > fechaActual.getMonth() ||
      (fechaNac.getMonth() === fechaActual.getMonth() &&
        fechaNac.getDate() > fechaActual.getDate())
    ) {
      return edad - 1;
    }
  
    return edad;
  }
  
console.log(calcularEdad("03/07/2004"))