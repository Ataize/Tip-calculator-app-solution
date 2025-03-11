
// capturando o valor da conta


const billInput = document.getElementById('bill-input');
let billValue = 0;

billInput.addEventListener('input', formatBill);
billInput.addEventListener('blur', handleBlur);
billInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    billInput.blur();
  }
});

function formatBill(event) {
  let myValue = event.target.value.replace(/\D/g, '');
  if (myValue) {
    myValue = (myValue / 100).toFixed(2); // Divide por 100 e mantém duas casas decimais
    event.target.value = parseFloat(myValue).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  } else {
    event.target.value = '';
  }
}

function handleBlur() {
  const rawValue = billInput.value.replace(/[^\d,]/g, '').replace(',', '.');
  billValue = parseFloat(rawValue) || 0;
  console.log("My bill is " + billValue);
}

// Capturar o valor da gorjeta

const tipRadios = Array.from(document.getElementsByName('tip'));
const tipCustomInput = document.getElementById('tip-custom');
const tipCustomeLabel = document.getElementById('custom');
let selectedTipPercentage = 0;

// Captura a porcentagem ao selecionar um botão de gorjeta fixa
tipRadios.forEach((radio) => {
    radio.addEventListener('change', function() {
       changeActive.call(radio);
        desmarcarCustom();
    });
});
  
 
  function changeActive() {
    desmarcarRadios();
    this.parentNode.classList.toggle('active');
    this.parentNode.classList.add('active');
    selectedTipPercentage = parseFloat(this.value) || 0;
    console.log("My percent is " + selectedTipPercentage + "%");
    tipCustomInput.value = '';
  }
  
  tipCustomInput.addEventListener('input', function(event) {
    const customTipValue = event.target.value.replace(/\D/g, '');
    
    if (customTipValue === '') {
      selectedTipPercentage = 0;
      return;
    }
  
    selectedTipPercentage = parseInt(customTipValue) || 0;
    console.log("Custom tip: " + selectedTipPercentage);
  
    desmarcarRadios();
    tipCustomInput.parentNode.id = 'custom-selected';
  });
 
  tipCustomInput.addEventListener('blur', function() {
    if (selectedTipPercentage > 0) {
      tipCustomInput.parentNode.id = 'custom-selected';
      tipCustomInput.value = selectedTipPercentage + "%";
    } else {
      tipCustomInput.value = '';
      tipCustomInput.parentNode.id = '';
    }
  });
  
  function desmarcarRadios() {
    tipRadios.forEach(radio => {
      radio.checked = false;
      radio.parentNode.classList.remove('active');
    });
  }
  
  function desmarcarCustom() {
    tipCustomInput.parentNode.id = '';
    tipCustomInput.value = '';
  }

  // Capturar o número de pessoas:
  const peopleInput = document.getElementById('people-input');
  let numberOfPeople = 1;
  
  peopleInput.addEventListener('input', function(event) {
    const peopleValue = event.target.value.replace(/\D/g, '');
  
    if (peopleValue === '0') {
      alert('O número de pessoas não pode ser zero!');
    //  mostrar mensagem de erro no span de pessoas
    // document.getElementById('error-msg').textContent = 'Número de pessoas não pode ser zero!'; 
      peopleInput.value = '';
      numberOfPeople = 1;
    } else {
      numberOfPeople = parseInt(peopleValue) || 1;
      console.log("Number of people: " + numberOfPeople);
    }
  });
  
  // Garantir que o input aceite apenas números
  peopleInput.setAttribute('inputmode', 'numeric');
  peopleInput.setAttribute('pattern', '\\d*');



// Calcular a gorjeta

// Dividir a gorjeta pelo número de pessoas

// Exibir o valor da gorjeta e o valor total da conta

// Exibir o valor da gorjeta por pessoa