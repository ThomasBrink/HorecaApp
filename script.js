	var bestelling 
	var linebreak = "<br>";
	var totaal
	var antfris
	var antbier
	var antwijn
	var bitterbal
	var antacht
	var antzestien
	var totaalbitter

 
        function WelkDrankje(){ 
 
        	bestelling = prompt ("Welke bestelling wilt u toevoegen? U kunt kiezen uit fris 1,-, bier 2,- of wijn 3,- Vul snack in als u ook nog bitterballen wilt bestellen"); 
 
            if(bestelling == "fris"){ 
                var hoeveelfris = prompt ("hoeveel fris wilt u bestellen?"); 
                	antfris = hoeveelfris * 1 
		            document.write("U heeft " + antfris + ",- aan fris");
		            document.write(linebreak);
		            WelkDrankje();         	
            } 
 
            else if(bestelling == "bier"){ 
                var hoeveelbier = prompt ("Hoeveel bier wilt u bestellen?"); 
                antbier = hoeveelbier * 2
	            document.write("U heeft " + antbier + ",- aan bier");
	            document.write(linebreak);
	            WelkDrankje();	            	
            }

            else if(bestelling == "wijn"){ 
                var hoeveelwijn = prompt ("Hoeveel wijn wilt u bestellen?"); 
                antwijn = hoeveelwijn * 3
	            document.write("U heeft " + antwijn + ",- aan wijn");
	            document.write(linebreak);
	            WelkDrankje();

            } 

            else if(bestelling == "stop"){

            	while(antfris == null){
            		antfris = 0;
            	}

            	while(antbier == null){
            		antbier = 0;
            	}

            	while(antwijn == null){
            		antwijn = 0;
            	}

            	while(antacht == null){
            		antacht = 0;
            	}

            	while(antzestien == null){
            		antzestien = 0;
            	}

            	totaal = antfris + antbier + antwijn + antacht + antzestien
            	document.write("Uw totaal bedrag is " + totaal +",- aan drankjes");
            }

            else if(bestelling == "snack"){
            	bitterbestel();
            }

            else{ 
            	alert ("U heeft een ongeldige invoer gedaan.");
                WelkDrankje(); 
 
            }

        } 

        function bitterbestel(){
	            	bitterbal = prompt ("Hoeveel bitterballen wilt u bestellen 8 (4,-) of 16 (8,-)");

	            		if(bitterbal == "8"){
	            			var hoeveelacht = prompt ("Hoeveel bitterbalschalen van 8 wilt u bestellen?");
                            antacht = hoeveelacht * 4
	                        document.write("U heeft " + antacht +",- aan bitterbalschalen (8) besteed");
	                        document.write(linebreak);
	                        WelkDrankje();
	            		}

	            		else if(bitterbal == "16"){
	            			var hoeveelzestien = prompt ("Hoeveel bitterbalschalen van 16 wilt u bestellen?");
                            antzestien = hoeveelzestien * 8
	                        document.write("U heeft " + antzestien + ",- aan bitterbalschalen (16) besteed");
	                      	document.write(linebreak);
	                        WelkDrankje();
	            		}

	            		else{
	            			alert ("Dit is een ongeldige invoer probeer opnieuw.");
	            			bitterbestel();
	            		}

	        	}
 
        WelkDrankje();