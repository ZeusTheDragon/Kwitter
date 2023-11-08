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
    user_name=localStorage.getItem("user_name") 
   room_name=localStorage.getItem("room_name")
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
