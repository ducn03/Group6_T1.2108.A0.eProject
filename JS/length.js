function LengthConverterft(valNum) {
    document.getElementById("outputMeters").value=(valNum/3.2808).toFixed(2);
}

function LengthConverterin(valNum) {
    document.getElementById("outputMillimetre").value=(valNum*25.4).toFixed(2);
};

function LengthConverteryd(valNum) {
    document.getElementById("outputMeters").value=(valNum/1.0936).toFixed(2);
};

function LengthConvertermile(valNum) {
    document.getElementById("outputKilometers").value=(valNum/0.62137).toFixed(6);
};