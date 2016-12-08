// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");


function checkName(){
      var user = document.getElementById('username').value;
      var password = document.getElementById('password').value;
     
      
        var ref = firebase.database().ref("users");
        ref.once("value")
          .then(function(snapshot) {
            var found = false;
            var correctPassword = false;
            var snap = snapshot.val();
            for(val in snap){
              
                for(var value2 in snap[val]){
                
                  if(value2 == "username"){
                      if(snap[val][value2] === user){
                        found = true;
                    }
                  }
                  if(value2 == "password"){
                    if(snap[val][value2] === password){
                       correctPassword = true;
                    }
                  }
                  
                }
            }

            if(found && correctPassword){
               window.location.href = 'homePage.html';
            }
            else if(!found){
              alert('You are not a registered user, Kindly register to continue');
            }
            else if(!correctPassword){
              alert("Password Incorrect");
            }

            window.sessionStorage.setItem("user", user);

          });
          
     }

function authenticate(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password2').value;
  console.log("I am creating a new user");
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });

}

function getUser(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.email, "email \n", user.uid, "user id");
    } else {
      // No user is signed in.
    }
  });
}

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid;

if (user != null) {
  name = user.displayName;
  email = user.email;
}

