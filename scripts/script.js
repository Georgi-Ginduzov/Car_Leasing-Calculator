document.querySelector('.form__inputs').addEventListener('input', function(event) {
    const target = event.target;
    const value = target.value;
    
    switch (target.id) {
        case 'car_type':
            updateCarType(value);
            break;
        case 'car_text_value':
        case 'car_value':
            updateCarValue(value);
            break;
        case 'lease_period':
            updateLeasePeriod(value);
            break;
        case 'down_payment_text':
        case 'down_payment':
            updateDownPayment(value);
            break;
        default:
            break;
    }

    calculateLeasingDetails();
});
