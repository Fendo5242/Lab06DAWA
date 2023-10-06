function diasHastaNavidad() {
    const fechaActual = new Date();
  
    const navidad = new Date(fechaActual.getFullYear(), 11, 25);
  
    if (fechaActual > navidad) {
      navidad.setFullYear(navidad.getFullYear() + 1);
    }
  
    const diferencia = navidad - fechaActual;
  
    const diasHastaNavidad = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
    return diasHastaNavidad;
  }
  
  console.log(diasHastaNavidad())