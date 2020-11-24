function contar(){
    var inicio = Number(document.querySelector('#init').value);
    var fim = Number(document.querySelector('#fn').value);
    var passo = Number(document.querySelector('#pss').value);
    var conta = document.querySelector('.contador p');
    
    if(passo != 0){
        if(inicio < fim){
        for(let i=inicio;i<=fim;i+=passo){
            conta.append(` 👉🏻${i} `);
            if(i == fim){
                conta.append(`🏁`);
            }
        }
        }else{
            for(let i=inicio;i>=fim;i-=passo){
                conta.append(` 👉🏻${i} `);
                if(i == fim){
                    conta.append(`🏁`);
                }
            }
        }
    }else{
        alert("O passo não pode ser 0");
    }
    
    
    
}