const temperatureInput = document.getElementById('temperature-input');
const celsiusOutput = document.getElementById('celsius-output');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const convertBtn = document.getElementById('covert-btn');
const errorOutput = document.getElementById('error');

convertBtn.addEventListener('click', () => {

    const userInputValue = temperatureInput.value
    const length = userInputValue.length

    const temperature = parseFloat(temperatureInput.value);


    let lastLetter = userInputValue[length-1];

    switch (lastLetter) {
        case "C":
            celsiusOutput.value = temperature.toFixed(2);
            let Fc = 32 + ((9 * temperature) / 5);
            fahrenheitOutput.value = Fc.toFixed(2);

            errorOutput.textContent = " ";
            break;
        case "F":
            fahrenheitOutput.value = temperature.toFixed(2);
            let Cf = ((temperature - 32) * 5) / 9;
            celsiusOutput.value = Cf.toFixed(2);


            errorOutput.textContent = " ";
            break;
        default:
            celsiusOutput.value = " ";
            fahrenheitOutput.value = " ";
            errorOutput.textContent = "Invalid Temperature";
            break;
    }


});