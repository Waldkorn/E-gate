
window.onload function(){
	
	var usernameForm = esmeralda;  // document.getElementByID(username);
	var passwordForm = wachtwoord;  // document.getElementByID(password);

	var usernameDB = esmeralda; // get from MySql acountinformation
	var passwordDB = wachtwoord; // get password from MySql 


	if (var usernameForm === var usernameDB && var passwordForm === passwordDB){

		}
		else if (var usernameForm === var usernameDB){
			message.innerHTML = "";
			message.innerHTML = "Password not correct"
		} 
		else {
			var message = document.getElementByID(content);
			message.innerHTML = "";
			message.innerHTML = "Username unknownt<br /><a href="./forgotpassword.html">Get a new password.</a>"
		}

	}
