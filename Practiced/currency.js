let amount = prompt('amount');
let currency = prompt('currency');

if(amount == '' || currency == '') {
    alert('all fields are required');
} else {
    if(currency == 'dollar') {
        document.write(`${amount} ${currency} = ${amount *5} BDT`);
    } else if (currency == 'euro') {
        document.write(`${amount} ${currency} = ${amount *115.2} BDT`);
    } else if (currency =='lira' || 'LIRA') {
        document.write(`${amount} ${currency} = ${amount *5} BDT`);
    }
}