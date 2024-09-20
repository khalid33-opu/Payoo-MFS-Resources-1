document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(balance);
        const pinNumber = document.getElementById('input-pin-number').value;

        if (pinNumber === '1234') {
            const balance= document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber + addMoneyNumber ;
        }
        else {
            alert(faild to add money! please try again)
        }

    })