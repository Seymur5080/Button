"use strict";

let input = document.querySelector('.input_style'),
   div = document.querySelector('.div'),
   button = document.querySelector('.button_submit'),
   checkbox = document.querySelector('[type="checkbox"]');



button.addEventListener('click', () => {
   // console.log(+prompt("Введите число").split("").reverse().join(""));

   let inputValue = input.value;

   let inputReverse = inputValue.split('').reverse().join('');

   console.log(inputReverse);
   console.log(typeof (inputReverse));

   div.innerHTML = `${inputReverse}`;
   input.value = `${inputReverse}`;
   // input.value = "";

   // for (let i = 0; i < input.length; i++) {
   //    input[i].value = '';
   // }

   console.log(inputValue);
});


// checkbox.addEventListener('click', () => {
//    if (checkbox.checked) {
//       alert('vibran');
//       let two = document.getElementById('two');
//       two.checked;
//    } else {
//       alert('ne vibran')
//    }
// });

// let favorite = checkbox.checked;

// if (favorite) {
//    console.log("Добавляем любимый фильм");
// }


// if (favorite.checked) {
//    alert('Выбран');
// } else {
//    alert('Не выбран');
// }

// function fun1() {
//    let chbox = document.getElementById('one');
//    let twocheck = document.getElementsByClassName('one').checked;
//    if (chbox.checked) {
//       // alert('Выбран');
//       // two.checked;
//       // twocheck;
//       twocheck;
//    }
//    else {
//       // alert('Не выбран');
//    }
// }