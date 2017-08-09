function checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged(function(user){
        if ( user ) {
            console.log( 'User signed in' )
            console.log( user )
            // do logged in stuff
            document.getElementById('google-signin')
            .setAttribute('style', 'display: none; visibility: hidden')                    
            document.getElementById('signout')
            .setAttribute('style', 'display: inline-block; visibility: visible')                
        } else {
            console.log( 'User not signed in.' )
            // do not logged in stuff
            document.getElementById('google-signin')
            .setAttribute('style', 'display: inline-block; visibility: visible')
            document.getElementById('signout')
            .setAttribute('style', 'display: none; visibility: hidden')                
        }
    })

}

function loginWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });   
}

window.onload = function(){
    checkIfLoggedIn()
}

function signOut(){
    firebase.auth().signOut()
    
    checkIfLoggedIn()
}

