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
              document.getElementById('in').innerHTML = "You are not a registered user, Kindly register to continue";
              //alert("You are not a registered user, Kindly register to continue");
            }
            else if(!correctPassword){
              document.getElementById('in').innerHTML = "Incorrect Password";
            }

            window.sessionStorage.setItem("user", user);

          });
          
     }



