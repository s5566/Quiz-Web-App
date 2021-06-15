
function signUpUser()
{
    let email= document.getElementById("email").value;
    
    let password = document.getElementById("password").value;
    if(!email || !password){
        alert("Fill all fields")
        return;
    }
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
     
      alert("Successfully signed up!")
      
       
     
       
    

      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error)
      alert(error.message)
    });

}

function loginUser()
{
    let email= document.getElementById("email").value;
    sessionStorage.setItem("email",email);
    let password = document.getElementById("password").value;
   // console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      
      //console.log("Hello",user);
      window.location.href = "start.html";
    })
    .catch((error) => {
      console.log(error)
      alert(error.message)
    });

}




