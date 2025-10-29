const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const myH3 = document.getElementById("myH3");

function viewPassword(){
    if(usernameInput.value != ""){
        myH3.textContent = `Your username is ${usernameInput.value} and your password is ${passwordInput.value}`;
    }
}
