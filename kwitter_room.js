ocument.getElementById("name").innerHTML = "Welcome " + localStorage.getItem("user_name");
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCDjRbupv3juuM6zRXAWtDskN2KIXfCnWQ",
    authDomain: "greetingbot-ueol.firebaseapp.com",
    projectId: "greetingbot-ueol",
    storageBucket: "greetingbot-ueol.appspot.com",
    messagingSenderId: "52911188880",
    appId: "1:52911188880:web:b2e174ce1fe7eba3206115",
    measurementId: "G-2J2XQRH6BS"
};
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room_name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addUser() {
      username = localStorage.getItem("username");
      firebase.database().ref("/").child(username).update({
            purpose: "adding user",
            food: "biryani"

      })
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
