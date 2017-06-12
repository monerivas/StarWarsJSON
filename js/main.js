var cargarPagina= function(){
cargarPersonajes();
};

var cargarPersonajes= function(){
    $.ajax({
        url:"http://swapi.co/api/people/", /*se puede pasa la url como primer parametro del metogo ajax*/
        method: "GET",
        dataTypr: "json",
        success:function(response){            
            var personajes= response.results; /*Ponemos results xq en esta API en particular esta la info ahi, pero no es asi siempre*/
            $("#total").text(response.count);
            mostrarTotalPersonajes(total);
            mostrarPersonajes(personajes);
            
        },
        error: function(error){
            console.log("error", error);
        }
    });
};

var mostrarTotalPersonajes= function(){
    
}

var mostrarPersonajes= function(personajes){
                var $ul = $("#personajes");
            personajes.forEach(function(personaje){ 
                var $li= $("<li/>");
                    $li.text(personaje.name);
                    $ul.append($li);
                    console.log(personaje.name);
            });
}

$(document).ready(cargarPagina);


