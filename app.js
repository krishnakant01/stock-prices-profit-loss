const purchasePrice = document.querySelector("#purchase-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#btn-check");
const message = document.querySelector("#message");


function calculateProftAndLoss(purchase, quantity, current) {

    if (current > purchase) {
        let profit = (current - purchase) * quantity;
        let profitPercentage = (profit / (purchase*quantity)) * 100;
        message.style.color = "#26c40e";
        showMessage("You gained "+profitPercentage.toFixed(2)+"%. Your total profit is ₹"+profit.toFixed(2));
    } else if (purchase > current) {
        let loss = (purchase - current) * quantity;
        let lossPercentage = (loss / (purchase*quantity)) * 100;
        message.style.color = "#f50a16";
        showMessage("You lost "+lossPercentage.toFixed(2)+"%. Your total loss is ₹"+loss.toFixed(2));
    } else {
        message.style.color = "#FBBF24";
        showMessage("Neither profit nor loss. Have Patience!");
    }
    errorHandler();

}

function showMessage(msg) {
    message.innerText = msg;
}

function errorHandler() {
    let p = purchasePrice.value;
    let q = stockQuantity.value;
    let c = currentPrice.value;
    let msg = "Please fill out all Fields!!"
    if (p === '') {
        showMessage(msg);
    }
    if (q === '') {
        showMessage(msg);
    }
    if (c === '') {
        showMessage(msg);
    }
    if (p < 0 || q < 0 || c < 0) {
        showMessage("Please enter a valid number!!");
    }
}

function clickHandler() {
    pp = Number(purchasePrice.value);
    quant = Number(stockQuantity.value);
    curr = Number(currentPrice.value);
    calculateProftAndLoss(pp, quant, curr);
}

checkButton.addEventListener("click", clickHandler);