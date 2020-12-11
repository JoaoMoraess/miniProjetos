//declarando o objeto alarm
class Alarms {
    constructor(hora,dia){
        this.active = true;
        this.hora = hora;
        this.dia = dia;
    }
    tocarAlarm(){
        alert('Tocando');
    }
}



//adicionar alarme
const plus = document.querySelector('.header__config--add');
var sectionPrincipal = document.querySelector('.alarmes');
var sectionAdd = document.querySelector('.adicionarAlarme');
plus.addEventListener("click", () => {
    sectionPrincipal.style.display = 'none';
    sectionAdd.style.top = '0';
});
function back(){
    sectionAdd.style.top = '100%';
    sectionPrincipal.style.display = 'block';
}



const alarms = document.querySelectorAll('.principal_alarmWraper__date__togle');



//ativar/desativar
alarms.forEach(alarm => {
    var activate = false;
    alarm.addEventListener('click', () => {
        let circle = alarm.firstElementChild;
        if(!activate){
            circle.style.left = '50%';
            activate = true;
        }else{
            circle.style.left = '0';
            activate = false;
        }
    });
});

