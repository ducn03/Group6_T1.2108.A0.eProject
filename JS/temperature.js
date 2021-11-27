function LengthConverterF(valNum) {
    document.getElementById("outputF").value=((valNum-32)/1.8).toFixed(2);
}

function LengthConverterC(valNum) {
    document.getElementById("outputC").value=((valNum*1.8)+32).toFixed(3);
};
