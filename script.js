function calculateTip(){
    const bill = parseFloat(document.getElementById('bill').value)
    const tip_percentage = parseFloat(document.getElementById('tip').value)

    if(isNaN(bill) || bill <= 0){
        document.getElementById('result').innerText="Please enter valid amount.";
        return;
    }

    const tip = bill * tip_percentage
    const total = bill + tip

    document.getElementById('result').innerText=
    `Tip: ₹${tip.toFixed(2)} | Total: ₹${total.toFixed(2)}`;

}