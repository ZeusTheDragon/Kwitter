
var firebaseConfig = {
      apiKey: "AIzaSyCdbi_Q2QQUI85H_8Z4u03LCRJWUn0ijlI",
      authDomain: "kwitter-c8ac3.firebaseapp.com",
      databaseURL: "https://kwitter-c8ac3-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8ac3",
      storageBucket: "kwitter-c8ac3.appspot.com",
      messagingSenderId: "445663553631",
      appId: "1:445663553631:web:e2ace76ef43db7954b93ea",
      measurementId: "G-8K094G8GE6"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

   
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -" + Room_names);
row="<div class='room name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function Logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}
