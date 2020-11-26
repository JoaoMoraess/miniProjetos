var numeros = [];
var list = document.querySelector('ul#tableNumbers');
var mostN = document.querySelector('div#infoNumbers');
function addNumero(){
    let inputN = document.querySelector('input[type=number]')
    let numero = Number(document.querySelector('input[type=number]').value);
    if(numero != ''){
        list.insertAdjacentHTML("beforeend",`<li>Numero: ${numero}</li>`);
        numeros.push(numero);
    }else{
        alert('Digite um Numero');
    }
    inputN.value = '';
    inputN.focus();
}
function calcNum(ns){
    let calcs = [];
    let soma = 0;
    ns.sort(function(a,b){return a - b});
    for(c in ns){
            soma += ns[c];
            
        }

    calcs[0] = ns[ns.length - 1];
    calcs[1] = ns[0];
    calcs[2] = ns.length;
    calcs[3] = soma;
    calcs[4] = (calcs[3] / calcs[2]);
    return calcs;
}

function mostrarNs(){
    arrNumeros = [maior='',menor='',total='',soma='',media=''];
    
    arrNumeros = calcNum(numeros);
    
    mostN.innerHTML = `
    <p>Total de Numeros Digitados: ${arrNumeros[2]}</p>
    <p>O menor Numero Digitado foi: ${arrNumeros[1]}</p>
    <p>O maior Numero digitado foi: ${arrNumeros[0]}</p>
    <p>A soma entre eles é: ${arrNumeros[3]}</p>
    <p>A media entre os valores é ${arrNumeros[4]}</p>
    `;
}