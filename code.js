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