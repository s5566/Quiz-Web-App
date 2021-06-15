
let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let Ans = sessionStorage.getItem("Answers");
//document.querySelector("span.name").innerHTML = user_name;


function logout()
{
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
  
   sessionStorage.clear();
   document.location.href="index.html";
}
function getit()
{
    sessionStorage.setItem("points",0);
    document.location.href="start.html";
}

document.querySelector("span.points").innerHTML = user_points;
var db = firebase.firestore();
  email=sessionStorage.getItem("email");
  db.collection("users").add({
    email: email,
    points: user_points,
    answers: Ans
   
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});


//   var db = firebase.firestore();
//   db.collection("users").add({

//   Username: user_name
// }).then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });
