
numbersList = document.querySelector('.numbers-list');
const gluckszahlList = document.querySelector('.gluckszahl-list');
const tippContainer = document.querySelector('.tipp-container');
const addTippButton = document.getElementById('add-tipp');
const totalCost = document.getElementById('total-cost');
const payButton = document.getElementById('pay');

// Generate numbers (1-42)
for (let i = 1; i <= 42; i++) {
    const number = document.createElement('div');
    number.textContent = i;
    number.addEventListener('click', () => addNumberToTipp(i));
    numbersList.appendChild(number);
}

// Generate Glückszahl options (1-6)
for (let i = 1; i <= 6; i++) {
    const gluckszahl = document.createElement('div');
    gluckszahl.textContent = i;
    gluckszahl.addEventListener('click', () => addGluckszahlToTipp(i));
    gluckszahlList.appendChild(gluckszahl);
}

let currentTipp = [];
let tippCount = 0;
const tippCost = 2.5;

// Add number to current tipp
function addNumberToTipp(number) {
    if (currentTipp.length < 6) {
        currentTipp.push(number);
        displayTipp();
    }
}

// Add Glückszahl to current tipp
function addGluckszahlToTipp(gluckszahl) {
    if (currentTipp.length === 6 && !currentTipp.includes(gluckszahl)) {
        currentTipp.push(gluckszahl);
        displayTipp();
    }
}

// Display current tipp
function displayTipp() {
    tippContainer.innerHTML = '';
    currentTipp.forEach(item => {
        const tippElement = document.createElement('div');
        tippElement.textContent = item;
        tippContainer.appendChild(tippElement);
    });
}

// Add Tipp button click event
addTippButton.addEventListener('click', () => {
    if (currentTipp.length === 7) {
        tippCount++;
        totalCost.textContent = `Total Cost: ${tippCount * tippCost}€`;
        currentTipp = [];
        displayTipp();
    }
});

// Pay button click event
payButton.addEventListener('click', () => {
    alert(`Payment Successful! Total Cost: ${tippCount * tippCost}€`);
    tippCount = 0;
    totalCost.textContent = 'Total Cost: 0€';
});