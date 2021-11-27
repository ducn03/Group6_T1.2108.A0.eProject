function LengthConverterAUD(valNum) {
    document.getElementById("outputUSD").value=(valNum*0.72).toFixed(2);
    document.getElementById("outputEuro").value=(valNum*0.64).toFixed(2);
    document.getElementById("outputRupi").value=(valNum*53.64).toFixed(2);
    document.getElementById("outputVND").value=(valNum*16154.21).toFixed(2);
}
function LengthConverterUSD(valNum) {
    document.getElementById("outputAUD").value=(valNum*1.39).toFixed(2);
    document.getElementById("outputEuro").value=(valNum*0.89).toFixed(2);
    document.getElementById("outputRupi").value=(valNum*74.41).toFixed(2);
    document.getElementById("outputVND").value=(valNum*22678.95).toFixed(2);
}
function LengthConverterEUR(valNum) {
    document.getElementById("outputAUD").value=(valNum*1.55).toFixed(2);
    document.getElementById("outputUSD").value=(valNum*1.12).toFixed(2);
    document.getElementById("outputRupi").value=(valNum*83.38).toFixed(2);
    document.getElementById("outputVND").value=(valNum*25669.48).toFixed(2);
};
function LengthConverterINR(valNum) {
    document.getElementById("outputAUD").value=(valNum*0.02).toFixed(2);
    document.getElementById("outputUSD").value=(valNum*0.0113).toFixed(2);
    document.getElementById("outputEUR").value=(valNum*0.0118).toFixed(2);
    document.getElementById("outputVND").value=(valNum*302.17).toFixed(2);
};
function LengthConverterVND(valNum) {
    document.getElementById("outputAUD").value=(valNum*0.0000619).toFixed(9);
    document.getElementById("outputUSD").value=(valNum*0.000041).toFixed(9);
    document.getElementById("outputEUR").value=(valNum*0.0331).toFixed(9);
    document.getElementById("outputRupi").value=(valNum*0.000039).toFixed(9);
};
