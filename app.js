var firebaseConfig = {
    apiKey: "AIzaSyAPxmAi2diLQeRonpMHy2aKtqddx-SlUWI",
    authDomain: "giffy-4bbd5.firebaseapp.com",
    databaseURL: "https://giffy-4bbd5.firebaseio.com",
    projectId: "giffy-4bbd5",
    storageBucket: "giffy-4bbd5.appspot.com",
    messagingSenderId: "867110631855",
    appId: "1:867110631855:web:b8dcf84009420f02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
 
  

  database.ref().on("child_added",function(snapshot){
     var tnamed=snapshot.val().tname;
     var destd=snapshot.val().dest;
     var firstd=snapshot.val().first;
     var freqd=snapshot.val().frequency;
     var firstConverted = moment(firstd, "HH:mm").subtract(1, "years");
     var timeDiff = moment().diff(moment(firstConverted), "minutes");
    var timeRemain = timeDiff % freqd;
    var minToArrival = freqd - timeRemain;
    var nextTrain = moment().add(minToArrival, "minutes");
    nextTrain = moment(nextTrain).format("hh:mm");
    

     var tr=$("<tr>");
     var td1=$("<td>");
     td1.text(tnamed);
     tr.append(td1);

     var td2=$("<td>");
     td2.text(destd);
     tr.append(td2);

     
     var td3=$("<td>");
     td3.text(freqd);
     tr.append(td3);

     
     

     
     var td4=$("<td>");
     td4.text(nextTrain);
     tr.append(td4);

     var td5=$("<td>");
     td5.text(minToArrival);
     tr.append(td5);
     
     $("#show").append(tr);

     
   } );


 $("#submit").on("click",function(){
  var tname=$("#tname").val().trim();
  var dest=$("#dest").val().trim();
  var first=$("#first").val().trim();
  var frequency=$("#frequency").val().trim();

  database.ref().push({
      tname: tname,
      dest: dest,
      first: first,
      frequency:frequency,
    //   dateAdded:database.ref.ServerValue.TIMESTAMP,



  })
 });

 setInterval(function() {
    window.location.reload();
}, 60000);




