var btnNuparkeren = document.getElementById('nuParkeren');
var btnAccountB = document.getElementById('accountBedrijven');
var btnOverOns = document.getElementById('overOns');
var btnBedrijfLog = document.getElementById('loginBedrijf');
var btnAccountM = document.getElementById('maakAccount');
var userLogin = document.getElementById('loginUser');

btnNuparkeren.style.cursor = 'pointer';
btnNuparkeren.onclick = function(){
	document.getElementById("loginFormBedrijven").style.display = "none";
	document.getElementById("bedrijven").style.display = "none";
	document.getElementById("loginForm").style.display = "block";
	document.getElementById("btnAccountMaken").style.display = "none";
};

btnAccountB.style.cursor = 'pointer';
btnAccountB.onclick = function(){
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("loginFormBedrijven").style.display = "none";
	document.getElementById("bedrijven").style.display = "block";
	document.getElementById("btnAccountMaken").style.display = "none";
};

btnOverOns.style.cursor = 'pointer';
btnOverOns.onclick = function(){
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("loginFormBedrijven").style.display = "none";
	document.getElementById("bedrijven").style.display = "none";
	document.getElementById("btnAccountMaken").style.display = "none";
};

btnBedrijfLog.style.cursor = 'pointer';
btnBedrijfLog.onclick = function(){
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("loginFormBedrijven").style.display = "block";
	document.getElementById("bedrijven").style.display = "none";
	document.getElementById("btnAccountMaken").style.display = "none";
};

btnAccountM.style.cursor = 'pointer';
btnAccountM.onclick = function(){
	document.getElementById("loginFormBedrijven").style.display = "none";
	document.getElementById("bedrijven").style.display = "none";
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("btnAccountMaken").style.display = "block";
};
/*
userLogin.onclick = function(){
	document.getElementById("loginUser").style. = red;
}
*/