var firstName= document.getElementById("fn");
var lastName= document.getElementById("ln");
var address= document.getElementById("adrs");
var email= document.getElementById("email")
var password= document.getElementById("pass");
var comments = document.getElementById("comments");
var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/im;
var regexPass =  /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/m;
	

function handlesubmit() {
if (!firstName.value || !lastName.value || !address.value )
{
 alert("All input fields must be filled first");
}
 if ( !regex.test(email.value))
{
alert("not a valid email address");

}
if (!regexPass.test(password.value)) {
    alert("password must be a combination of charatacters , numbers and at least a capital letter");
  
}




}

function resetform() {
    document.getElementById("myform").reset();
}