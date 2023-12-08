var persona = {
  nombre: 'Jhon',
  edad: 30,
  saludar: function() {
    console.log('Hola, soy ' + this.nombre);
    console.log('Tengo ' + this.edad + ' anios');
  }
};
console.log(persona);
persona.saludar();

var persona2 = {
  nombre: 'Santiago',
  apellidos: 'Lopez',
  dni: 12345678
}
console.log(persona2);