/*var nb_random = Math.floor(Math.random()*100) + 1;*/
var max = 100 ;
var min = 1
var nb_random = Math.floor(Math.random() * (max - min) + min);
console.log(nb_random);
var coups = 0;


var bouton = document.getElementById('clickme');

bouton.addEventListener('click', function(){
    
    var saisie = document.getElementById('saisie').value ;  /*valeur saisie */
        coups++
    
        console.log(coups)
        if (saisie>max){
            document.getElementById('result').innerHTML ="Attention ce nombre n'est pas compris entre 1 et 100";
        }
        else {
            if (saisie<nb_random){
                document.getElementById('result').innerHTML = "";
                document.getElementById('result').innerHTML = "Cherhe plus grand !";
            }

            else if(saisie>nb_random){
                document.getElementById('result').innerHTML = "";
                document.getElementById('result').innerHTML ="Cherche plus petit";
            }
            else if(saisie==nb_random){
                document.getElementById('result').innerHTML = "";
                document.getElementById('result').innerHTML ="Bravo tu as réussi en "+coups+" essais !";
            }  
        }    
});

