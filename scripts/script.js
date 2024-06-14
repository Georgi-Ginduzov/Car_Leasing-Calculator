document.querySelector('.form__inputs').addEventListener('input', function(event) {
    const target = event.target;
    const value = target.value;
    
    switch (target.id) {
        case 'car_type':
            updateCarType(value);
            break;
        case 'car_text_value':
            syncTextToRange('car_range_value', value);
        case 'car_range_value':
                
            syncRangeToText
            ('car_text_value', value);
            updateCarValue(value);
            break;
        case 'lease_period':
            updateLeasePeriod(value);
            break;
        case 'down_payment_text':
            syncTextToRange('down_range_payment', value);
        case 'down_range_payment':
            updateDownPayment(value);    
            syncRangeToText('down_payment_text', value);
            break;
        default:
            break;
    }

    calculateLeasingDetails();
});
