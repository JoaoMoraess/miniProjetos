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
    let calcs = {};
    let soma = 0;
    ns.sort(function(a,b){return a - b});
    for(c in ns){
            soma += ns[c];
            
        }

    calcs.maior = ns[ns.length - 1];
    calcs.menor = ns[0];
    calcs.total = ns.length;
    calcs.soma = soma;
    calcs.media = (calcs.soma / calcs.total);
    return calcs;
}

function mostrarNs(){
    arrNumeros = {maior:'',menor:'',total:'',soma:'',media:''};
    
    arrNumeros = calcNum(numeros);
    
    mostN.innerHTML = `
    <p>Total de Numeros Digitados: ${arrNumeros.total}</p>
    <p>O menor Numero Digitado foi: ${arrNumeros.menor}</p>
    <p>O maior Numero digitado foi: ${arrNumeros.maior}</p>
    <p>A soma entre eles é: ${arrNumeros.soma}</p>
    <p>A media entre os valores é ${arrNumeros.media}</p>
    `;
}