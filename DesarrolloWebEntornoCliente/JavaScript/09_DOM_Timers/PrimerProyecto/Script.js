let tiempoRestante;
let intervalId;

document.getElementById("encenderAlarma").addEventListener("click", function () {
    const inputTiempo = document.getElementById("tiempoSegundos").value;
    if (isNaN(inputTiempo) || inputTiempo <= 0) {
        alert("Por favor, ingresa un valor válido en segundos.");
        return;
    }
    tiempoRestante = inputTiempo;
    startCountdown();
});

document.getElementById("apagarAlarma").addEventListener("click", function () {
    clearInterval(intervalId);
    document.getElementById("alarma").pause();
    document.getElementById("estadoAlarma").textContent = "Alarma apagada...";
    document.getElementById("estadoAlarma").style.color = "red";
    document.getElementById("encenderAlarma").style.display = "inline";
    document.getElementById("apagarAlarma").style.display = "none";
    document.getElementById("apagarAlarma").style.color = "red";
});

function startCountdown() {
    document.getElementById("encenderAlarma").style.display = "none";
    document.getElementById("encenderAlarma").style.color = "green";
    document.getElementById("apagarAlarma").style.display = "inline";
    document.getElementById("estadoAlarma").outerHTML = "<h1 id='estadoAlarma' style='color: green;'>¡Alarma encendida!</h1";

    intervalId = setInterval(function () {
        tiempoRestante--;
        if (tiempoRestante <= 0) {
            clearInterval(intervalId);
            document.getElementById("alarma").play();
            document.getElementById("estadoAlarma").textContent = "¡Alarma sonando!";
            document.getElementById("estadoAlarma").style.color = "purple";
            document.getElementById("apagarAlarma").style.display = "inline";
            document.getElementById("apagarAlarma").style.color = "orange";
        }
    }, 1000);
}
