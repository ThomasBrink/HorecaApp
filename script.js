	var bestelling // globale variabelen
	var linebreak = "<br>";
	var totaal
	var antfris
	var antbier
	var antwijn
	var bitterbal
	var antacht
	var antzestien

 
        function WelkDrankje(){ //vraag om drankje en berekend van ingevoerde drankjes de kosten
 
        	bestelling = prompt ("Welke bestelling wilt u toevoegen? U kunt kiezen uit fris 1,-, bier 2,- of wijn 3,- Vul snack in als u ook nog bitterballen wilt bestellen"); 
 
            if(bestelling == "fris"){ 
                var hoeveelfris = prompt ("hoeveel fris wilt u bestellen?"); 
                	antfris = hoeveelfris * 1 // berekend de totaal prijs van bestelde fris
		            document.write("U heeft " + antfris + ",- aan fris");
		            document.write(linebreak);
		            WelkDrankje();         	
            } 
 
            else if(bestelling == "bier"){ 
                var hoeveelbier = prompt ("Hoeveel bier wilt u bestellen?"); 
                antbier = hoeveelbier * 2 // berekend de totaal prijs van bestelde bier
	            document.write("U heeft " + antbier + ",- aan bier");
	            document.write(linebreak);
	            WelkDrankje();	            	
            }

            else if(bestelling == "wijn"){ 
                var hoeveelwijn = prompt ("Hoeveel wijn wilt u bestellen?"); 
                antwijn = hoeveelwijn * 3 // berekend de totaal prijs van bestelde wijn
	            document.write("U heeft " + antwijn + ",- aan wijn");
	            document.write(linebreak);
	            WelkDrankje();

            } 

            else if(bestelling == "stop"){

            	while(antfris == null){ //Voor als de waarde niet is ingevuld wordt de waarde 0 om totaal bedrag te berekenen om NaN tevoorkomen
            		antfris = 0;
            	}

            	while(antbier == null){ // zelfde als hier boven aangegeven
            		antbier = 0;
            	}

            	while(antwijn == null){ // zelfde als hier boven aangegeven
            		antwijn = 0;
            	}

            	while(antacht == null){ // zelfde als hier boven aangegeven
            		antacht = 0;
            	}

            	while(antzestien == null){ // zelfde als hier boven aangegeven
            		antzestien = 0;
            	}

            	totaal = antfris + antbier + antwijn + antacht + antzestien // berekend totaal bedrag
            	document.write("Uw totaal bedrag is " + totaal +",-"); // laat totaal bedrag zien op het scherm
            }

            else if(bestelling == "snack"){
            	bitterbestel();
            }

            else{ 
            	alert ("U heeft een ongeldige invoer gedaan.");
                WelkDrankje(); 
 
            }

        } 

        function bitterbestel(){ // voor als bij bestelling snack in is gevuld dan wordt deze functie uitgevoerd om bitterballen te bestellen
	            	bitterbal = prompt ("Hoeveel bitterballen wilt u bestellen 8 (4,-) of 16 (8,-)");

	            		if(bitterbal == "8"){
	            			var hoeveelacht = prompt ("Hoeveel bitterbalschalen van 8 wilt u bestellen?");
                            antacht = hoeveelacht * 4// berekend totaal prijs aan bitterballen schalen 8
	                        document.write("U heeft " + antacht +",- aan bitterbalschalen (8) besteed");
	                        document.write(linebreak);
	                        WelkDrankje();
	            		}

	            		else if(bitterbal == "16"){
	            			var hoeveelzestien = prompt ("Hoeveel bitterbalschalen van 16 wilt u bestellen?");
                            antzestien = hoeveelzestien * 8 // berekend totaal prijs aan bitterbalen schalen 16
	                        document.write("U heeft " + antzestien + ",- aan bitterbalschalen (16) besteed");
	                      	document.write(linebreak);
	                        WelkDrankje();
	            		}

	            		else{
	            			alert ("Dit is een ongeldige invoer probeer opnieuw.");
	            			bitterbestel(); // als iets anders dat 8 of 16 wordt ingevoerd krijg je een melding en wordt je terug gestuurd dit zorgt er voor dat de functie opnieuw afspeelt
	            		}

	        	}
 
        WelkDrankje();