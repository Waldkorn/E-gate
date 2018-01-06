
Wil je in settings deze key toevoegen (by ssh)
	
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDxR9toMIvNitN/9xuzlM0IKjz6mKAqm06QnOvWFzxF+tBxm4l0hWxIi6PSblrj1UemVlJYQfQO15bAVdjORDvaRNREnMAHEuHhk2OOJ5TGtTCLt1VORWRYfn2A9X8IFWiWZnNTMJjKdGuoSugaUzRHWgKkIfwrxuY6G44QQhWD9jOktyKdGOWzHUwhjlPfrnU4mkyiBCi+Wi3bFGBoZmVFNdW177D6lN+O89Y4WkScyfWpItMS64gJhFEGAV8c3wJUKjkDoJ+Nhh+1Wm4nFcfd8g6aCIFmkZGsznfqJq2MmYAQnKsIMpBFILlPgwT7PvMYqNfH5sAXoLe9i8yX2dzh Esmeralda@Esmo




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
