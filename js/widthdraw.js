//step-1: add event listener to the widthdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2: get the withdraw amount from the withdraw input field
    const widthdrawField = document.getElementById('withdraw-field');
    const newWidthdrawAmountString = widthdrawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);
    //step-3;
    const widthdrawTotalElement = document.getElementById('widthdraw-total');
    const previousWidthdreawTotalString = widthdrawTotalElement.innerText;
    const previousWidthdrawTotal = parseFloat(previousWidthdreawTotalString);
    //step-4:
    const currentWidthdrawTotal = previousWidthdrawTotal + newWidthdrawAmount;
    widthdrawTotalElement.innerText = currentWidthdrawTotal;
    //step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step-6: calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWidthdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step-7: clear the deposit field
    widthdrawField.value = '';
})











