// capturar o valor da conta


const billInput = document.getElementById('bill-input');
const tipRadios = document.getElementsByName('tip');


function formatarValor(event) {
    let valor = event.target.value;
    valor = valor.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    valor = (valor / 100).toFixed(2) + ''; // Converte para formato monetário com duas casas decimais 
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // Adiciona pontos como separadores de milhar
    event.target.value = valor;
    return valor;
}

billInput.addEventListener('input', formatarValor);



let selectedTipPercentage = 0;
// Capturar a porcentagem da gorjeta



tipRadios.forEach(radio => {

    radio.addEventListener('change', function() {
       desmarcarRadios();
        this.parentNode.classList.toggle('active');
        
        if (this.checked) {
            selectedTipPercentage = parseFloat(this.value);
            console.log(selectedTipPercentage);

        }
    });
});


const tipCustomInput = document.getElementById('tip-custom');


function desmarcarRadios() {
    tipRadios.forEach(radio => {
        radio.checked = false;
        radio.parentNode.classList.remove('active');
    });
}

tipCustomInput.addEventListener('blur', function() {
    desmarcarRadios();
    
    let valor = tipCustomInput.value.replace('%', ''); // Remove o símbolo de porcentagem antes de analisar o valor
    const customTipValue = parseFloat(valor);
    
    if (!isNaN(customTipValue)) {
        selectedTipPercentage = customTipValue;
        console.log(selectedTipPercentage);
    }

    if (!tipCustomInput.value.includes('%')) {
        tipCustomInput.value = valor + '%';
    }
});






// function tipValue()

// Capturar número de pessoas




// Calcular a gorjeta

// Dividir a gorjeta pelo número de pessoas

// Exibir o valor da gorjeta e o valor total da conta

// Exibir o valor da gorjeta por pessoa