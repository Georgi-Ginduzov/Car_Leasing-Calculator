updateCarType('new');
updateLeasePeriod(12);
updateCarValue(10000);
updateDownPayment(10);

function updateCarType(carType) {
    const interestRate = carType === 'new' ? 2.99 : 3.7;
    document.getElementById('interes_rate_output').innerText = `${interestRate}%`;
}

function updateCarValue(value){
 console.log(value);   
}

function updateLeasePeriod(value){
    console.log(value);
}

function updateDownPayment(value){
    console.log(value);
}
