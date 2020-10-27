	var bestelling 
	var linebreak = "<br>";
	var totaal

		function som(){
        	totaal = antfris + antbier + antwijn
        }
 
        function WelkDrankje(){ 
 
        	bestelling = prompt ("Welke bestelling wilt u toevoegen? U kunt kiezen uit fris 1,-, bier 2,- of wijn 3,-"); 
 
            if(bestelling == "fris"){ 
                var hoeveelfris = prompt ("hoeveel fris wilt u bestellen?"); 
                var antfris = hoeveelfris * 1 
                document.write("U heeft " + antfris + ",- aan fris")
                document.write(linebreak);
                WelkDrankje();
            } 
 
            else if(bestelling == "bier"){ 
                var hoeveelbier = prompt ("Hoeveel bier wilt u bestellen?"); 
                var antbier = hoeveelbier * 2
                document.write("U heeft " + antbier + ",- aan bier")
                document.write(linebreak);
                WelkDrankje();
            } 
            else if(bestelling == "wijn"){ 
                var hoeveelwijn = prompt ("Hoeveel wijn wilt u bestellen?"); 
                var antwijn = hoeveelwijn * 3
                document.write("U heeft " + antwijn + ",- aan wijn")
                document.write(linebreak);
                WelkDrankje();
            } 

            else if(bestelling == "stop"){
            	som();
            	document.write("Uw totaal bedrag is " + totaal +",-")
            }

            else{ 
            	alert ("U heeft een ongeldige invoer gedaan.") 
                WelkDrankje(); 
 
            }

        } 

 
        WelkDrankje();