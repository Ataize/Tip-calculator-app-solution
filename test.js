let tip = 0;
let total = 0;
let totalPerPerson = 0;


// Capturar número de pessoas

const peopleInput = document.getElementById('people-input');
let people = 0;

peopleInput.addEventListener('input', function() {
    let people = peopleInput.value;
    people = people.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    
    peopleInput.value = people;
    people = parseInt(people);
// Precisa de validação de valor mínimo
    console.log("my people number is " + people);
  
});

function calculate() {

    let tip = billValue * (selectedTipPercentage / 100);
    console.log("My tip is " + tip);
    

    let total = billValue + tip;
    localStorage.setItem('total', total);
    console.log("My total is " + total);    
    let totalPerPerson = total / people;
    totalPerPerson = totalPerPerson.toFixed(2); 
    people = parseInt(people);
    
    
    document.getElementById('person-value').value = totalPerPerson;


    console.log("My total per person " + totalPerPerson);
    console.log("My total is " + total);
    // return tip;
}

peopleInput.addEventListener('blur', calculate);






