function calculateLeasingDetails() {
    const carValue = Number(document.getElementById('car_value').value);
    const leasePeriod = document.getElementById('lease_period').value;
    const downPaymentPercentage = document.getElementById('down_payment').value;
    
    const downPayment = Number(carValue * (1 + (downPaymentPercentage / 100)));
    
    
    const interestRate = parseFloat(document.getElementById('interes_rate_output').innerText);
    const loanAmount = Number(carValue - downPayment);
    const monthlyInterestRate = Number(interestRate / 100 / 12);
    const numberOfPayments = Number(leasePeriod);

    const monthlyInstallment = loanAmount * monthlyInterestRate / (1 - (Math.pow(1 / (1 + monthlyInterestRate), numberOfPayments)));
    const totalLeasingCost = Number(monthlyInstallment * numberOfPayments + downPayment);

    document.getElementById('total_leasing_cost').innerText = totalLeasingCost.toFixed(2);
    document.getElementById('down_payment_output').innerText = downPayment.toFixed(2);
    document.getElementById('monthly_installment').innerText = 1940.12;//monthlyInstallment.toFixed(2);
}

calculateLeasingDetails();