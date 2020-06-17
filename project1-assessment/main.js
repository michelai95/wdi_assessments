let addition = document.querySelector('#addition');
let subtraction = document.querySelector('#subtraction');
let result = document.querySelector('#count');
let input = document.querySelector('#submit');


addition.addEventListener('click', function() {
    input.value = parseInt(input.value) + 1;
    result.textContent = input.value;
})

subtraction.addEventListener('click', function() {
    input.value = parseInt(input.value) - 1;
    result.textContent = input.value;
})


// I tried messing around with increments and decrements
// tried to replace 1 with i and set it's value to 0, didn't have any luck! 
// also tried to include a for loop, which wasn't rendering anything 