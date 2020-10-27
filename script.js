	var bestelling

        function WelkDrankje(){

        	bestelling = prompt ("Welke bestelling wilt u toevoegen? U kunt kiezen uit fris 1,-, bier 2,- of wijn 3,-");

            if(bestelling == "fris"){
                var hoeveelfris = prompt ("hoeveel fris wilt u bestellen?");
                var antfris = hoeveelfris * 1
            }

            else if(bestelling == "bier"){
                var hoeveelbier = prompt ("Hoeveel bier wilt u bestellen?");
            }
            else if(bestelling == "wijn"){
                var hoeveelwijn = prompt ("Hoeveel wijn wilt u bestellen?");
            }
            else{
            	alert ("U heeft een ongeldige invoer gedaan.")
                WelkDrankje();

            }
        }

        WelkDrankje();