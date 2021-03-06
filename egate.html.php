<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<title>E-gate</title>
	<link href="https://fonts.googleapis.com/css?family=Hind+Siliguri|Play" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./css//styleMobile.css">

</head>
<body>
	<div class="container">

		<div class="title">
			<h1>E-Gate</h1>
		</div>
		
		<nav class="buttonGroup">
			<ul>
				<li><button id="nuParkeren" class="menu"><span>Park Now!</span></button></li>
				<li><button id="accountBedrijven" class="menu"><span>Companies</span></button></li>
				<li class="dropmenu"><button id="overOns" class="menu" style="width:90px;"><span>Over ons</span></button>
					<ul>
						<li class="drop">
						<button id="products" class="menu drop"><span>Tutorial</span></button>
						</li>
						<li class="drop">
						<button id="contact" class="menu drop"><span>Contact</span></button>
						
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		
		<!-- MAKE AN ACOUNT FOR CARUSER  -->
		<div id="btnAccountMaken">
			<h1> Please fill out your information</h1>
			<label for="User_usersname">User name</label><input type="text" id="bedrijfsnaam" class="formFields">
			</br>
			<label for="User_firstname">First name</label><input type="text" id="User_firstname" class="formFields">
			</br>
			<label for="User_lasttname">Last name</label><input type="text" id="User_lasttname" class="formFields">
			</br>
			<label for="User_email">Email address</label><input type="text" id="User_email" class="formFields">
			</br>
			<label for="User_address">Address</label><input type="text" id="User_address" class="formFields">
			</br>
			<label for="User_zipcode">Zipcode</label><input type="text" id="User_zipcode" class="formFields">
			</br>
			<label for="User_city">City</label><input type="text" id="User_city" class="formFields">
			</br>
			<label for="User_Password"></label><input type="text" id="User_Password" class="formFields">
			</br>
			<button id="newUser" class="btnLogin buttonForm">Make my account</button><button id="cancelNewUser" class="buttonForm">Cancel</button>
		</div>

		<!-- LOGIN PAGE FOR CAR USERS  -->
		<div id="loginCarUser class="content">
			<div id="loginForm" class="form">
				<h1>Login automobilisten</h1>
				<label for="fullname" class="label">Username</label><input type="text" id="fullname" class="formFields">
				<label for="phone" class="label">Password</label><input type="password" id="phone" class="formFields">
				<button id="cancelUser" class="buttonForm">Cancel</button>
				<button id="loginUser" class="buttonForm">Log in</button>
			</div>


		<!-- SHOW PARKINGSPACED FOR CARUSERS -->

		<div id="freeSpaces" class="freespacesTable">
			<h1>Parkingspaces in your vicinity</h1>

		</div>
			
		<!-- WELCOME PAGE FOR COMPANIES  -->	
			<div id="bedrijven">
				<h1>Join us!</h1>
				<div class="text">
					<p>Happy employees deliver a better job. Join us today to enhance the comfort and parking ease for your guests and co-workers!</p>
					<p>Start earning by renting out your empty parking spaces any time you want!</p>
				</div>
				<button id="loginBedrijf" class="buttonContent">Log in</button>
				<button id="newCompany" class="buttonContent">Make an account</button>
			</div>
			
		<!-- LOGIN PAGE FOR COMPAGNIES  -->
			<div id="loginFormBedrijven">
				<h1>Login Companies</h1>
				<label for="fullname">Username</label><input type="text" id="fullname" class="formFields">
				<label for="phone">Password</label><input type="text" id="phone" class="formFields">
				<button id="cancelUser" class="buttonForm">Cancel</button>
				<button id="loginUser" class="buttonForm">Add</button>
			</div>
		


		<!-- MAKE AN ACOUNT FOR COMPAGNIES  -->
		<div id="btnAccountMaken" class="contentElements">
			<h1> Please fill out your information</h1>
			<label for="bedrijfsnaam">Company name</label><input type="text" id="bedrijfsnaam" class="formFields">
			</br>
			<label for="parkeerSysteem">Parkingsystem</label><input type="text" id="parkeerSysteem" class="formFields">
			</br>
			<label for="companyPassword">Password</label><input type="text" class="formFields">
			</br>
			<button id="loginUser" class="btnLogin buttonForm">OK</button><button id="cancelUser" class="buttonForm">Cancel</button>
		</div>

		


		<div id="about">
			<h1>About us!</h1>
			<div class="text">
				<p>E-Gate is a Tech-Team that specialises in the development of modern web Applications used in the regulation of access into restricted spaces and environments such as public garages and buildings. The team came together in January 2018 under the auspices of CodeGorilla at the Big Building in Groningen. With the technical supervision and institutional support of CodeGorilla, this multipurpose web application was first developed to resolve the common problems of congestion and uncertainty faced by most modern garages.
				</p>
			</div>
		</div>

		<div id="tutorial">
			<h1>How the E-Gate Application Works</h1>
			<div class="text">
				<p>You first have to login at the website of E-Gate with your details and a password. After logging in, you will receive a code on your mobile telephone together with information on the garage and the number of parking spaces that are available. With this code in your mobile telephone you can get access to the restricted garage and the automatic opening of the gate.
				</p>
			</div>
		</div>

		<div id="contact">
			<h1>Contact us</h1>
	
				<p>E-Gate is located in Groningen, the Netherlands. For any information or comments, please contact us at:
					<!-- Contact formulier  -->
 
                <form name="contactform" enctype="multipart/form-data" method="post" action="./include/sendMail.php">
                  <label for="firstname">First Name</label>
                  <input type="text" id="firstname" name="firstname" class="formFields" placeholder="Your first name"/>
                  <label for="lastname">Last Name</label>
                  <input type="text" id="lastname" name="lastname" class="formFields" placeholder="Your last name"/>
                  <label for="email">E-mail address</label>
                  <input type="text" id="email" name="email" class="formFields"placeholder="Your e-mail adress"/>      
                  <label for="message">Your message</label>
                  <textarea id="message" name="message" placeholder="Your message" style="height:200px;"></textarea>
                  <input type="submit" name="submit" value="submit">
                </form>
				</p>
		</div>


</body>
<script>
		var btnNuparkeren = document.getElementById('nuParkeren');
		var btnAccountB = document.getElementById('accountBedrijven');
		var btnOverOns = document.getElementById('overOns');
		var btnBedrijfLog = document.getElementById('loginBedrijf');
		var btnAccountM = document.getElementById('newCompany');
		var userLogin = document.getElementById('loginUser');
		var btnAccountUser = document.getElementById('overOns');

		btnNuparkeren.style.cursor = 'pointer';
		btnNuparkeren.onclick = function(){
			document.getElementById("loginFormBedrijven").style.display = "none";
			document.getElementById("bedrijven").style.display = "none";
			document.getElementById("loginForm").style.display = "block";
			document.getElementById("btnAccountMaken").style.display = "none";
			document.getElementById("about").style.display = "none";
		};
		
		btnAccountB.style.cursor = 'pointer';
		btnAccountB.onclick = function(){
			document.getElementById("loginForm").style.display = "none";
			document.getElementById("loginFormBedrijven").style.display = "none";
			document.getElementById("bedrijven").style.display = "block";
			document.getElementById("btnAccountMaken").style.display = "none";
			document.getElementById("about").style.display = "none";
		};
		
		btnOverOns.style.cursor = 'pointer';
		btnOverOns.onclick = function(){
			document.getElementById("loginForm").style.display = "none";
			document.getElementById("loginFormBedrijven").style.display = "none";
			document.getElementById("bedrijven").style.display = "none";
			document.getElementById("btnAccountMaken").style.display = "none";
			document.getElementById("about").style.display = "block";
		};
		
		btnBedrijfLog.style.cursor = 'pointer';
		btnBedrijfLog.onclick = function(){
			document.getElementById("loginForm").style.display = "none";
			document.getElementById("loginFormBedrijven").style.display = "block";
			document.getElementById("bedrijven").style.display = "none";
			document.getElementById("btnAccountMaken").style.display = "none";
			document.getElementById("about").style.display = "none";
		};
		
		btnAccountM.style.cursor = 'pointer';
		btnAccountM.onclick = function(){
			document.getElementById("loginFormBedrijven").style.display = "none";
			document.getElementById("bedrijven").style.display = "none";
			document.getElementById("loginForm").style.display = "none";
			document.getElementById("about").style.display = "block";
			document.getElementById("about").style.display = "none";
		};

		btnAccountM.style.cursor = 'pointer';
		btnAccountUser.onclick = function(){
			document.getElementById("loginFormBedrijven").style.display = "none";
			document.getElementById("bedrijven").style.display = "none";
			document.getElementById("loginForm").style.display = "none";
			document.getElementById("btnAccountMaken").style.display = "none";
			document.getElementById("about").style.display = "block";
		};
		/*
		userLogin.onclick = function(){
			document.getElementById("loginUser").style. = red;
		}
		*/
</script>

</html>