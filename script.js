	var bestelling

        function WelkDrankje(){

        	bestelling = prompt ("Welke bestelling wilt u toevoegen? U kunt kiezen uit fris 1,-, bier 2,- of wijn 3,-");

            if(bestelling == "fris" || bestelling == "bier" || bestelling == "wijn"){
                var hoeveelfris = prompt ("hoeveel "+ bestelling + " wilt u bestellen?");
                var antfris = hoeveelfris * 1
            }

            else{
            	alert ("U heeft een ongeldige invoer gedaan.")
                WelkDrankje();

            }
        }

        WelkDrankje();