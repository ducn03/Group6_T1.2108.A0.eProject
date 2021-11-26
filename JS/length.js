function LengthConverter(valNum) {
    document.getElementById("outputMeters").value=(valNum/3.2808).toFixed(2);
    document.getElementById("outputInches").value=(valNum*12).toFixed(2);
    document.getElementById("outputcm").value=(valNum/0.032808).toFixed(2);
    document.getElementById("outputYards").value=(valNum*0.33333).toFixed(2);
    document.getElementById("outputKilometers").value=(valNum/3280.8).toFixed(2);
    document.getElementById("outputMiles").value=(valNum*0.00018939).toFixed(2);
}