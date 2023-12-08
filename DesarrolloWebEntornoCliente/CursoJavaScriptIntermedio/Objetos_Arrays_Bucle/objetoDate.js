var date = new Date();

console.log(date);

var year = date.getFullYear();
var month = date.getMonth()+1; //hay que sumarle 1 porque el objeto date inicializa el mes en 0
var day = date.getDate();



console.log("Hola! hoy es el día " + day + " del mes " + month + " del anio " + year);
