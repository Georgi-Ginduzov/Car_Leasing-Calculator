function calculateLeasingDetails() {
    // From input data: 
    const interestRate = parseFloat(document.getElementById('interes_rate_output').innerText);
    const totalCarValue = parseFloat(document.getElementById('car_range_value').value);
    const leasePeriodInMonths = document.getElementById('lease_period').value;
    const downPaymentPercentage = document.getElementById('down_range_payment').value;    

    const downPayment = totalCarValue * (downPaymentPercentage / 100);
    const loanAmount = totalCarValue - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = leasePeriodInMonths;
    const monthlyInstallment = (loanAmount * monthlyInterestRate) / (1 - (Math.pow(1 / (1 + monthlyInterestRate), numberOfPayments)));
    const totalLeasingCost = parseFloat(monthlyInstallment * numberOfPayments + downPayment);

    document.getElementById('total_leasing_cost').innerText = totalLeasingCost.toFixed(2);
    document.getElementById('down_payment_output').innerText = downPayment.toFixed(2);
    document.getElementById('monthly_installment').innerText = monthlyInstallment.toFixed(2);
}

calculateLeasingDetails();