function showBMICalculator() {
    document.getElementById('tool-section').innerHTML = `
        <h2>BMI Calculator</h2>
        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight"><br><br>
        <label for="height">Height (m):</label>
        <input type="number" id="height"><br><br>
        <button onclick="calculateBMI()">Calculate BMI</button>
        <p id="bmi-result"></p>
    `;
}
function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    if (weight && height) {
        let bmi = (weight / (height * height)).toFixed(2);
        let status;

        if (bmi < 18.5) {
            status = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            status = "Overweight";
        } else {
            status = "Obese";
        }
        document.getElementById('bmi-result').innerHTML = `
            Your BMI is <strong>${bmi}</strong>.<br>
            You are classified as <strong>${status}</strong>.
        `;
    } else {
        alert("Please enter valid weight and height");
    }
}
function showNumberConverter() {
    document.getElementById('tool-section').innerHTML = `
        <h2>Number System Converter</h2>
        <label for="number">Enter Number:</label>
        <input type="number" id="number"><br><br>
        <label for="from-base">From Base:</label>
        <select id="from-base">
            <option value="2">Binary</option>
            <option value="8">Octal</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
        </select><br><br>
        <label for="to-base">To Base:</label>
        <select id="to-base">
            <option value="2">Binary</option>
            <option value="8">Octal</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
        </select><br><br>
        <button onclick="convertNumber()">Convert</button>
        <p id="number-result"></p>
    `;
}
function convertNumber() {
    let number = document.getElementById('number').value;
    let fromBase = parseInt(document.getElementById('from-base').value);
    let toBase = parseInt(document.getElementById('to-base').value);
    
    if (number) {
        let convertedNumber = parseInt(number, fromBase).toString(toBase).toUpperCase();
        document.getElementById('number-result').innerHTML = `Converted Number: ${convertedNumber}`;
    } else {
        alert("Please enter a valid number.");
    }
}

function showUnitConverter() {
    document.getElementById('tool-section').innerHTML = `
        <h2>Unit Converter</h2>
        <label for="value">Value:</label>
        <input type="number" id="value"><br><br>
        <label for="from-unit">From Unit:</label>
        <select id="from-unit">
            <option value="km">Kilometers</option>
            <option value="m">Meters</option>
            <option value="cm">Centimeters</option>
            <option value="mm">Millimeters</option>
        </select><br><br>
        <label for="to-unit">To Unit:</label>
        <select id="to-unit">
            <option value="km">Kilometers</option>
            <option value="m">Meters</option>
            <option value="cm">Centimeters</option>
            <option value="mm">Millimeters</option>
        </select><br><br>
        <button onclick="convertUnit()">Convert</button>
        <p id="unit-result"></p>
    `;
}
function convertUnit() {
    let value = parseFloat(document.getElementById('value').value);
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;

    const conversionRates = {
        "km": 1,
        "m": 1000,
        "cm": 100000,
        "mm": 1000000
    };

    if (!isNaN(value)) {
        let convertedValue = (value * conversionRates[toUnit]) / conversionRates[fromUnit];
        document.getElementById('unit-result').innerHTML = `Converted Value: ${convertedValue}`;
    } else {
        alert("Please enter a valid value.");
    }
}
function showCurrencyConverter() {
    document.getElementById('tool-section').innerHTML = `
        <h2>Currency Converter</h2>
        <label for="amount">Amount:</label>
        <input type="number" id="amount"><br><br>
        <label for="from-currency">From Currency:</label>
        <select id="from-currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
        </select><br><br>
        <label for="to-currency">To Currency:</label>
        <select id="to-currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
        </select><br><br>
        <button onclick="convertCurrency()">Convert</button>
        <p id="currency-result"></p>
    `;
}
function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('from-currency').value;
    let toCurrency = document.getElementById('to-currency').value;
    const conversionRates = {
        "USD": { "EUR": 0.85, "INR": 74.15, "GBP": 0.76 },
        "EUR": { "USD": 1.18, "INR": 87.15, "GBP": 0.89 },
        "INR": { "USD": 0.013, "EUR": 0.011, "GBP": 0.010 },
        "GBP": { "USD": 1.32, "EUR": 1.12, "INR": 99.15 }
    };
    if (!isNaN(amount) && conversionRates[fromCurrency][toCurrency]) {
        let convertedAmount = (amount * conversionRates[fromCurrency][toCurrency]).toFixed(2);
        document.getElementById('currency-result').innerHTML = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    } else {
        alert("Please enter a valid amount.");
    }
}
function showInterestCalculator() {
    document.getElementById('tool-section').innerHTML = `
        <h2>Interest Calculator</h2>
        <label for="principal">Principal Amount:</label>
        <input type="number" id="principal"><br><br>
        <label for="rate">Interest Rate (% per year):</label>
        <input type="number" id="rate"><br><br>
        <label for="time">Time (years):</label>
        <input type="number" id="time"><br><br>
        <button onclick="calculateInterest()">Calculate Interest</button>
        <p id="interest-result"></p>
    `;
}
function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);
    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
        let interest = ((principal * rate * time) / 100).toFixed(2);
        document.getElementById('interest-result').innerHTML = `Calculated Interest: ${interest}`;
    } else {
        alert("Please enter valid values for principal, rate, and time.");
    }
}

function showDoodleDrawing() {
    document.getElementById('tool-section').innerHTML = `
        <h2>Doodle Drawing</h2>
        <canvas id="doodleCanvas" width="600" height="400"></canvas><br><br>
        <button onclick="clearCanvas()">Clear</button>
        <button onclick="downloadDoodle()">Download</button>
    `;

    const canvas = document.getElementById('doodleCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    // Start drawing on mousedown
    canvas.addEventListener('mousedown', (event) => {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
    });

    // Stop drawing on mouseup
    canvas.addEventListener('mouseup', () => {
        drawing = false;
    });

    // Draw while mouse is moving
    canvas.addEventListener('mousemove', (event) => {
        if (drawing) {
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        }
    });
}

function clearCanvas() {
    const canvas = document.getElementById('doodleCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function downloadDoodle() {
    const canvas = document.getElementById('doodleCanvas');
    const link = document.createElement('a');
    link.download = 'doodle.png';
    link.href = canvas.toDataURL();
    link.click();
}
// Existing functions...

function showAdvancedCalculator() {
    document.getElementById('tool-section').innerHTML = `
        <h2>Advanced Calculator</h2>
        <div class="calculator">
            <input type="text" id="calc-input" placeholder="Enter expression" readonly><br>
            <div class="calc-buttons">
                <button onclick="appendToCalc('7')">7</button>
                <button onclick="appendToCalc('8')">8</button>
                <button onclick="appendToCalc('9')">9</button>
                <button onclick="appendToCalc('/')">÷</button><br>

                <button onclick="appendToCalc('4')">4</button>
                <button onclick="appendToCalc('5')">5</button>
                <button onclick="appendToCalc('6')">6</button>
                <button onclick="appendToCalc('*')">×</button><br>

                <button onclick="appendToCalc('1')">1</button>
                <button onclick="appendToCalc('2')">2</button>
                <button onclick="appendToCalc('3')">3</button>
                <button onclick="appendToCalc('-')">−</button><br>

                <button onclick="appendToCalc('0')">0</button>
                <button onclick="appendToCalc('.')">.</button>
                <button onclick="clearCalc()">C</button>
                <button onclick="appendToCalc('+')">+</button><br>

                <button onclick="calculateAdvanced()">=</button>
            </div>
            <p id="calc-advanced-result"></p>
        </div>
    `;
}

function appendToCalc(value) {
    let input = document.getElementById('calc-input');
    input.value += value;
}

function clearCalc() {
    document.getElementById('calc-input').value = '';
    document.getElementById('calc-advanced-result').innerHTML = '';
}

function calculateAdvanced() {
    let expression = document.getElementById('calc-input').value;
    try {
        let result = eval(expression); // Evaluates the entered expression
        document.getElementById('calc-advanced-result').innerHTML = `Result: ${result}`;
    } catch (error) {
        document.getElementById('calc-advanced-result').innerHTML = "Error: Invalid expression!";
    }
}

