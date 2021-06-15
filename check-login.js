
function checkLogin(){
    document.getElementById("loader").style.display = "block";
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            return user;
        } else {
            window.location.href = "index.html"
        }
        });
    document.getElementById("loader").style.display = "none";
}
checkLogin();

  