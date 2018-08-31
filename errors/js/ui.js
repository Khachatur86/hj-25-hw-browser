
'use strict';

function handleClick() {
  return openMail();
};

const button = document.getElementById('open');

button.onclick = () => handleClick();

//  Зачем нужна такая странная реализация функции?
// Зачем функция возрвщающая функцию?