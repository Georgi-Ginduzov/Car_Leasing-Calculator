const carRangeInput = document.getElementById('car_range_value');
const carMinValue = Number(carRangeInput.min);
const carMaxValue = Number(carRangeInput.max);

const downPaymentInput = document.getElementById('down_range_payment');
const downPaymentMinValue = Number(downPaymentInput.min);
const downPaymentMaxValue = Number(downPaymentInput.max);

function updateCarType(carType) {
    const interestRate = carType === 'new' ? 2.99 : 3.7;
    document.getElementById('interes_rate_output').innerText = `${interestRate}%`;
}

function updateCarValue(value){
    if(isNaN(value) || /[^0-9]/.test(value)){

        document.getElementById('car_text_value').value = value.replace(value[value.length - 1], '')
    }

    if (value > carMaxValue) {

        console.log('is out of bounds');
        document.getElementById('car_text_value').value = Math.floor(value/10);   
    }
    else if (value < carMinValue) {
        document.getElementById('car_text_value').value = carMinValue;
    }
}

function updateLeasePeriod(value){
    
}

function updateDownPayment(value){
    if(isNaN(value) || /[^0-9]/.test(value)){

        document.getElementById('down_payment_text').value = value.replace(value[value.length - 1], '')
    }
    
    if (value > downPaymentMaxValue) {
        document.getElementById('down_payment_text').value = Math.floor(value/10);
    }
    else if (value < downPaymentMinValue) {
        document.getElementById('down_payment_text').value = downPaymentMinValue;
    }
}

function syncTextToRange(rangeElement, value){
    document.getElementById(rangeElement).value = value;
}

function syncRangeToText(textElement, value){
    document.getElementById(textElement).value = value;
}


const carType = document.getElementById('car_type');
const carValue = document.getElementById('car_text_value');
const leasePeriod = document.getElementById('lease_period');
const downPayment = document.getElementById('down_payment_text');

updateCarType(carType.value);
updateLeasePeriod(leasePeriod.value);
updateCarValue(carValue.value);
syncTextToRange('car_range_value', carValue.value);
updateDownPayment(downPayment.value);
syncTextToRange('down_range_payment', downPayment.value);
