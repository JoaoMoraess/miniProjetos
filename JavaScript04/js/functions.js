function calcular(){
    var produto = Number(document.querySelector('#nmr').value);
    var tabuada = document.querySelector('.tab');
    var btn = document.querySelector('button');

    if(!document.querySelector('.tab h1')){
        for(let i=0;i<=10;i++){
            tabuada.insertAdjacentHTML("beforeend",`<h1>${produto} X ${i} = ${produto * i}</h1>`);
        }
        btn.innerText = 'Atualizar'
    }else{
        location.reload();
    }
    

}