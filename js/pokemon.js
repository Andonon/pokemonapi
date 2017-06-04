"use strict";
    
    $(document).ready(function(){ 
        getPokes();                

    }); 

        function getPokes(){
            // Get the pokemon by adding HTML to the div pokearea.
            for(var pokeid = 1; pokeid <= 151; pokeid++){
                $("#pokearea").append("<img id=pokeID'"+pokeid+"' src='http://pokeapi.co/media/img/"+pokeid+".png' alt='Pokemon # "+pokeid+" from pokeapi.com'>");
            }
        }



    