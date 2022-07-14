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
                    level(10,100);
                break;
                          
            case 2:             
                    level(9,81);
                break;
            
            case 3:          
                    level(7,49);
                break;
            case 4:
                level(20,400)         
        }    
})

// LE MIE FUNZIONI ///////////////////////////

function generaBombe(numeroCelle) {
    let bombe = [];

    for (bmb=0 ; bombe.length<16 ; bmb++) {
        let generatorePosizione = Math.floor(Math.random()* numeroCelle);
        while (!(bombe.includes(generatorePosizione))){
            bombe.push(generatorePosizione); 
        }
    }
   
    return bombe;
}

function level(y,z) {
    let finalBombe = generaBombe(z)
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
            if(finalBombe.includes(i)){
                cella.classList.add('bomb');
                alert('Partita Finita! Hai realizzato '+punteggioAttuale+' punti')
                const allCell = document.querySelectorAll('.cellaBase');
                    for(const campo of allCell) {
                        campo.classList.add('pointereve')
                    }
                    for(let i = 0; i < finalBombe.length; i++){
                        
                        cella.innerHTML = '<p>BOMBA</p>'
                    }
             
                punteggioAttuale = 0;
            }

            else if (cella)

            if(cella.classList.contains('clicked')){ 
                punteggioAttuale++
            }
            numeroPunteggio.innerHTML = 'il tuo punteggio è '+punteggioAttuale;  
        })
    }
}