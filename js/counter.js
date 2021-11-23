let counterDisplay = document.querySelector('.display');
let counterMinus = document.querySelector('.minus');
let counterPlus = document.querySelector('.plus');
let counterReset = document.querySelector('.reset')

let count = 0;

updateDisplay();

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
});

counterMinus.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

counterReset.addEventListener("click", ()=> {
    count = 0;
    updateDisplay();
});

function updateDisplay(){
    counterDisplay.innerHTML = count;
};