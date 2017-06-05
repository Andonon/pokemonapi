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
            var thispokeid = $(this).attr("pokeid");
            alert("detected pokeid"+thispokeid);
            $.get("http://pokeapi.co/api/v1/pokemon/"+thispokeid+"/", function(pokeinfo) {
            $("#pokename").append("<h2>"+pokeinfo.name+"</h2>");
            $("#mainpokeimage").attr("src","http://pokeapi.co/media/img/"+thispokeid+".png");
            for(var i = 0; i < pokeinfo.types.length; i++){
                $("#poketypes").append("<li>"+pokeinfo.types[i].name+"</li>");
            }
            $("#height").append("<p>"+pokeinfo.height+"</p>");
            $("#weight").append("<p>"+pokeinfo.weight+"</p>");
            for(var i = 0; i < pokeinfo.abilities.length; i++){
                console.log(pokeinfo.abilities[i].name);
                $("#abilities").append("<p>"+pokeinfo.abilities[i].name+"</p>");
            }
            $("#attackdefense").append("<p>"+pokeinfo.attack+" | "+pokeinfo.defense+"</p>");
            }, "json");                
        });