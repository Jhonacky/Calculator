const form = document.getElementById("formulario");
window.onload = () => {
    const listaCuotas = document.getElementById('cuotas');
    form.onsubmit = (e) =>{
        e.preventDefault();
        let amountMoney = document.getElementById('moneyAmount').value;
        let moneyType = document.getElementById('moneyType').value;
        listaCuotas.innerHTML = '';
        const cuotas = [];
        cuotas.push(amountMoney);
        cuotas.push((amountMoney/2)*1.25)
        cuotas.push((amountMoney/3)*1.4)
        let counter= 0;
        cuotas.forEach(c => {
            counter++
            listaCuotas.innerHTML += '<option value="'+ counter + ' cuotas de '  + c + '  ' + moneyType +'"></option>';
        });
    }

    const inputCuotas = document.getElementById('inputCuotas');
    inputCuotas.addEventListener('click', (e) => {
        inputCuotas.value = '';
        return true;
    })

}