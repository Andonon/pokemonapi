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
                    
            }

                
                ////////////////////////////////
                //  get the weight            //
                ////////////////////////////////
                
                console.log("Pokemon Weigh:");
                console.log(pokeinfo.weight);
                
                ////////////////////////////////
                //  get the abilities         //
                ////////////////////////////////
                
                console.log("Abilities:")
                for(var i = 0; i < pokeinfo.abilities.length; i++){
                    console.log(pokeinfo.abilities[i].name);
                }

                ////////////////////////////////
                //  get the attack and defence   //
                ////////////////////////////////
                
                console.log("Attack & Defense Numbers:");
                console.log("Attack: "+pokeinfo.attack);
                console.log("Defense: "+pokeinfo.defense);


}, "json");            
        
    
});