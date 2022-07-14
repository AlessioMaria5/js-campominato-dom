let campo = document.getElementById('campo');

// LEVELS 
let livello = document.getElementById('diff');

let facile = 'Facile'
let medium = 'Medio'
let difficile = 'Difficile'

// PUNTEGGIO
let punteggio = document.getElementById('punteggio');
let numeroPunteggio = document.createElement('span');
punteggio.append(numeroPunteggio);
let punteggioAttuale = '';
// PUNTEGGIO

// BOMBE 

let bombe = []

// GENERA CELLE e DIFFICOLTA  -----------------------------------

let bottoneStart = document.getElementById('genera');
    bottoneStart.addEventListener('click', 
    function(){

        campo.innerHTML = '';
        
        level(facile,10,100);
        level(medium,9,81);
        level(difficile,7,49)      
})

// LE MIE FUNZIONI ///////////////////////////

function level(x,y,z) {

    if(livello.value == `${x}`){
        for (let i= 1 ;i<=z; i++) { 
            numeroPunteggio.innerHTML = 'il tuo punteggio è 0';

            let cella = document.createElement('div');
            cella.classList.add('cellaBase');
            cella.style.width = `calc(100% /${y})`
            cella.style.height = `calc(100% /${y})`
            campo.append(cella);
            cella.addEventListener('click', 
            function () {
            if(!(cella.classList.contains('clicked')))
            cella.classList.add('clicked');
            console.log(i); 

            if(cella.classList.contains('clicked')){
               
                punteggioAttuale++
            }
            numeroPunteggio.innerHTML = 'il tuo punteggio è '+punteggioAttuale;  
        })
        }
    }
}


//BOMBE



for (i=0 ; i<16 ; i++) {

    bombe.push(i);
    console.log(bombe);    
}





