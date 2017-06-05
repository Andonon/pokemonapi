"use strict";
    
    $(document).ready(function(){ 
        getPokes();                

    }); 

        function getPokes(){
            // Get the pokemon by adding HTML to the div pokearea.
            for(var pokeid = 1; pokeid <= 151; pokeid++){
                $("#pokearea").append("<img id=pokeID"+pokeid+" pokeID='"+pokeid+"' src='http://pokeapi.co/media/img/"+pokeid+".png' alt='Pokemon # "+pokeid+" from pokeapi.com'>");
            }
        }

        $(document).on("click", "img", function(){
            
            var selectedpokemon = $(this).attr("pokeid");
            $.get("http://pokeapi.co/api/v1/pokemon/"+selectedpokemon+"/", function(pokeinfo) {
                
                ////////////////////////////////
                //  console log testing area  //
                ////////////////////////////////

                console.log("Data Dump of API return:");
                console.log(pokeinfo);

                ////////////////////////////////
                //  get the types             //
                ////////////////////////////////

                console.log("Types Name from Array:");
                for(var i = 0; i < pokeinfo.types.length; i++){
                    console.log(pokeinfo.types[i].name);
                    $("#poketypes").append("<li>"+pokeinfo.types[i].name+"</li>");
                }
                

                ////////////////////////////////
                //  get the Height            //
                ////////////////////////////////
                
                console.log("Pokemon Height:");
                console.log(pokeinfo.height);
                $("#height").append("<p>"+pokeinfo.height+"</p>");


                ////////////////////////////////
                //  get the weight            //
                ////////////////////////////////
                
                console.log("Pokemon Weigh:");
                console.log(pokeinfo.weight);
                $("#weight").append("<p>"+pokeinfo.weight+"</p>");

                ////////////////////////////////
                //  get the abilities         //
                ////////////////////////////////
                
                console.log("Abilities:");
                for(var i = 0; i < pokeinfo.abilities.length; i++){
                    console.log(pokeinfo.abilities[i].name);
                    $("#abilities").append("<p>"+pokeinfo.abilities[i].name+"</p>");
                }

                ////////////////////////////////
                //  get the attack and defence   //
                ////////////////////////////////
                
                console.log("Attack & Defense Numbers:");
                console.log("Attack: "+pokeinfo.attack);
                console.log("Defense: "+pokeinfo.defense);
                $("#attackdefense").append("<p>"+pokeinfo.attack+" | "+pokeinfo.defense+"</p>");

}, "json");            
        
    
});