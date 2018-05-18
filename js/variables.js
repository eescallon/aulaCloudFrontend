var url = "http://127.0.0.1:8000";
alertify.set('notifier','position', 'bottom-center');

function getUser()
{
	var user = localStorage.getItem("userAulaCloud");
	if(!user){
		return null;
	}
	user = JSON.parse(user);
	return user;
}