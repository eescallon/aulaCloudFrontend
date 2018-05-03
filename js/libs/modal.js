$(document).ready(function(){
	
	$("#buttonOk").click(function(){
		$("#edit").modal("show");
		var nombre = $("#exampleInputName2").val();
		$("#modalNombre").val(nombre);
		var apellido = $("#exampleInputLastName").val();
		$("#modalApellido").val(apellido);
		var fecha = $("#dp2").val();
		$("#modalFecha").val(fecha);
		var email = $("#exampleInputEmail2").val();
		$("#modalEmail").val(email);
		
	});
	
	$("#btnSubmit").click(function(){
		alert("Envie el formulario");
	});
	
});
	