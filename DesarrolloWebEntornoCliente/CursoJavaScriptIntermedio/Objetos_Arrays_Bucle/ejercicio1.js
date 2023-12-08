var jugador = {
  fuerza: 1,
  incrementarFuerza: function() {
    this.fuerza += 1;
  },
  consultarFuerza: function() {
    console.log('La fuerza del jugador es: ' + this.fuerza); 
  }
}
jugador.consultarFuerza(); 

jugador.incrementarFuerza();

jugador.consultarFuerza();
