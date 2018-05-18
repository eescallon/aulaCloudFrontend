$(document).ready(function(){
	var user = getUser();
	if(user != null)
	{
		window.location.href = "main.html";
	}
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
		  		alertify.error("Usuario o contraseña incorrecta");
		  	}
		  	else
		  	{
		  		localStorage.setItem("userAulaCloud", JSON.stringify(respuesta.data));
			  	window.location.href = "main.html";
		  	}
		}).fail(function(error){
			alert("error");
		});
	})
})

