
var nb_random = Math.floor(Math.random()*100);
console.log(nb_random);

var bouton = document.getElementById('clickme');

bouton.addEventListener('click', function()
{
    var saisie = document.getElementById('saisie').value ;  /*valeur saisie */

        if (saisie<nb_random){
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').innerHTML = "C'est plus :-)";
        }

        else if(saisie>nb_random){
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').innerHTML ="C'est moins :-(";
        }
        else if(saisie==nb_random){
            document.getElementById('result').innerHTML = "";
            document.getElementById('result').innerHTML ="Bravo tu as réussi en + nb_essais + essais !";
        }      
}
);

