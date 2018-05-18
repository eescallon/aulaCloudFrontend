$(document).ready(function(){
	var user = getUser();
	if(user == null)
	{
		window.location.href = "index.html";
	}

	$("#spanNombreUsuario").html(user.person.name);

	$.ajax({
		url: url+"/misreservaciones/"+user.id,
	  	method: "GET",
	  	header: {"Authorization": "true"},
	  	success: function(respuesta){
	  		var tbody = $("#tbodyMisReservaciones");
	  		$.each(respuesta.data, function(key, value){
	  			var tr = $("<tr></tr>");

	  			var tdFecha = $("<td></td>").html(value.initialDate + " " + value.finalDate);
	  			var tdHoras = $("<td></td>").html(value.initialHour);
	  			var tdSala = $("<td></td>").html(value.room.name);
	  			var tdAllDay = $("<td></td>");
	  			if(value.allDay)
	  			{
	  				tdAllDay.html("Si");
	  			}
	  			else
	  			{
	  				tdAllDay.html("No");
	  			}
	  			var tdAcciones = $("<td></td>");
	  			var buttonEdit = $("<button></button>").addClass("btn btn-default").attr({
	  				"onclick": "editarReservacion("+value.id+")"
	  			});
	  			var spanEdit = $("<span></span>").addClass("oi oi-pencil").attr({
	  				"title": "pencil",
	  				"aria-hidden": "true"
	  			})
	  			var buttonDelete = $("<button></button>").addClass("btn btn-default").css("margin-left", "5px").attr({
	  				"onclick": "borrarReservacion("+value.id+")"
	  			});
	  			var spanDelete = $("<span></span>").addClass("oi oi-delete").attr({
	  				"title": "delete",
	  				"aria-hidden": "true"
	  			})
	  			tdAcciones.append(buttonEdit.append(spanEdit)).append(buttonDelete.append(spanDelete));
	  			tr.append(tdFecha).append(tdHoras).append(tdSala).append(tdAllDay).append(tdAcciones);
	  			tbody.append(tr);
	  		})
	  	},
	  	error: function(xhr){

	  	}
	})
})

function editarReservacion(idReservacion){
	alertify.success("entre a editar con id "+ idReservacion);	
}

function borrarReservacion(idReservacion){
	alertify.success("entre a eliminar con id "+ idReservacion);	
}