/*
  
    Mellowie 2021 - All Rights Reserved 

    <!DISCLAIMER!>
    This is a school project and is not to be copied
    for commercial or redistribution. You may learn,
    edit for your personal use or admire my work as
    much as you possibly want, but no copying ;)
    - Mellowie <3

*/

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// Verdi input variabel
const inputField = document.getElementById('input');

// Sett inn nummer i input feltet
const insertNum = num => inputField.textContent += num;

// Regn ut stykke med eval()
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// Fjern 1 val(verdi) i samtid
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// Fjern alt i feltet
const clearInput = () => inputField.textContent = '';

/*  Preloader  */
$(window).on('load', function() { 
    // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(1000).css({'overflow':'visible'});
})