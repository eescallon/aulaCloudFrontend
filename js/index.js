$(document).ready(function(){
	$("#btnLogin").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
		var data = {
			"user": email,
			"password": password
		}
		$.ajax({
		  url: url+"/login",
		  method: "POST",
		  header: {"Authorization": "true"},
		  data: JSON.stringify(data)
		}).done(function(respuesta) {
			if(respuesta.success == false)
		  	{
		  		alert("Usuario o contraseña incorrecta");
		  	}
		  	else
		  	{
			  	window.location.href = "main.html";
		  	}
		}).fail(function(error){
			alert("error");
		});
	})
})

var url = "http://127.0.0.1:8000";