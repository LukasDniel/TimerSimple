// PEGOU OS SEGUNDOS COM FORMATO GMT E 24HS
function getTimeSeconds(seconds){
    //pega apenas os segundos do Date e multiplica por 1000 paga pegar segundos reais
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio .data');

// VARIAVEL QUE CONTEM O INICIO DOS SEGUNDOS
let segundos = 0;
// FUNÇÃO DE CONTAR
let timer;

relogio.innerHTML = 'Inicie seu timer'

// FUNÇÃO QUE INICIA A CONTAGEM DE SEGUNDOS
function iniciar(){
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = `${getTimeSeconds(segundos)}`
    }, 1000)

}


// FUNÇÃO CRIA UM EVENTO PARA OS ELEMENTOS CUJO A CLASSE EXISTEM
// TARGET = PEGA OS ELEMENTOS QUE FORAM CLICADOS
// CONTAINS = BUSCA OS ELEMENTOS PELA CLASS SUBSTITUINDO O QUERYSELECTOR


document.addEventListener('click', (e) => {
    // e.target pega exatamente onde esta sendo clicado
    const el = e.target;

    if(el.classList.contains('start')){
        clearInterval(timer)
        iniciar()
        relogio.classList.remove('pausado')
    } else if(el.classList.contains('stop')){
        clearInterval(timer)
        relogio.classList.add('pausado')
    } else if(el.classList.contains('clear')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado')
    } else{
        
    }
})