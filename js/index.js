$(document).ready(function(){
	$("#btnLogin").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
		var data = {
			"user": email,
			"pass": password
		}
		$.ajax({
		  url: url+"/login",
		  method: "POST",
		  xhrFields: {
		      withCredentials: true
		  },
		  data: data
		}).done(function(data) {
			if(data.success == "false")
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

var url = "http://localhost:8000";