let campo = document.getElementById('campo');

// LEVELS 
let livello = document.getElementById('diff');


// PUNTEGGIO
let punteggio = document.getElementById('punteggio');
let numeroPunteggio = document.createElement('span');
punteggio.append(numeroPunteggio);
let punteggioAttuale = '';

// GENERA CELLE e DIFFICOLTA  -----------------------------------

let bottoneStart = document.getElementById('genera');
    bottoneStart.addEventListener('click', 
    function(){
        campo.innerHTML = '';
        let livelloInterno = parseInt(document.getElementById('diff').value);
   
        switch(livelloInterno) {

            case 1:
                console.log('sono nel case 1');
                    level(1,10,100);
                break;
                  
                    
            case 2:
                console.log('sono nel case 2');
                        
                    level(2,9,81);
                break;
                    
                   
            case 3:
                console.log('sono nel case 3');           
                    level(3,7,49);
                break;
                    
        }    
})

// LE MIE FUNZIONI ///////////////////////////

function generaBombe(numeroCelle) {
    let bombe = [];

    for (bmb=0 ; bombe.length<16 ; bmb++) {
        let generatorePosizione = Math.floor(Math.random()* numeroCelle);
        console.log(generatorePosizione)
        while (!(bombe.includes(generatorePosizione))){
            bombe.push(generatorePosizione);
            console.log(bombe);
        }
    }
    return bombe;
}

function level(x,y,z) {

    let finalBombe = generaBombe(z)

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

            if(finalBombe.includes(i)){
                cella.classList.remove('clicked')
                cella.classList.add('bomb');
                console.log(finalBombe);
                alert('Partita Finita! Hai realizzato '+punteggioAttuale+' punti');

                campo.innerHTML = '';
                punteggioAttuale = 0;
            }

            if(cella.classList.contains('clicked')){ 
                punteggioAttuale++
            }
            numeroPunteggio.innerHTML = 'il tuo punteggio è '+punteggioAttuale;  
        })
        }
    }
}