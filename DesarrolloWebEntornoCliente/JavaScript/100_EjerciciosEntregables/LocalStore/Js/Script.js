//ZONA DE VARIABLES
const contenido = document.querySelector(".contenido");



//FUNCIÓN MAIN


//ZONA DE EVENTOS


//ZONA DE FUNCIONES

function escribirLS(){
    const nombreProfesora = " rocío";
    localStorage.setItem("nombreProfesora", nombreProfesora);

    //Array

    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    localStorage.setItem("meses", JSON.stringify(meses));

    const alumno = {
      nombre: "Santi",
      ciclo: "DAW"
    }

    localStorage.setItem(" objeto alumnos", JSON.stringify(alumno));
 
}

function getLS(){
    const nombreProfesora = localStorage.getItem("nombreProfesora");
    const meses = JSON.parse(localStorage.getItem("meses"));
    const alumno = JSON.parse(localStorage.getItem("objeto alumnos"));
    const texto = document.createElement("p");
    texto.innerHTML = `
    nombreProfesora: ${nombreProfesora}
    meses: ${meses.join(", ")} 
    alumnos: ${alumno.nombre} ${alumno.ciclo} 
`

contenido.appendChild(texto);

    console.log(nombreProfesora);
    console.log(meses);
    console.log(alumno);
}