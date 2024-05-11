function showForm() {
    document.getElementById('login-btn').style.display = "block";
 }

 $("#button1").click(function() {
    location.replace("patients.html");
    });
 $("#button2").click(function() {
    location.replace("patients.html");
    });
 $("#button3").click(function() {
    location.replace("patients.html");
    });
 $("#button4").click(function() {
    location.replace("patients.html");
    });
 $("#button5").click(function() {
    location.replace("patients.html");
    });
 $("#button6").click(function() {
    location.replace("patients.html");
    });
 $("#button6").click(function() {
    location.replace("patients.html");
    });
 $("#button8").click(function() {
    location.replace("patients.html");
    });
 $("#button9").click(function() {
    location.replace("patients.html");
    });
 $("#button10").click(function() {
    location.replace("patients.html");
    });





   //  $("#buttona").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttonb").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttonc").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttond").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttone").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttonf").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttong").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttonh").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttoni").click(function() {
   //      location.replace("patients.html");
   //      });
   //   $("#buttonj").click(function() {
   //      location.replace("patients.html");
   //      });



   //      $("#buttonaa").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttonbb").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttoncc").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttondd").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttonee").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttonff").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttongg").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttonhh").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttonii").click(function() {
   //          location.replace("patients.html");
   //          });
   //       $("#buttonjj").click(function() {
   //          location.replace("patients.html");
   //          });

            




            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://meditech20240428213036.azurewebsites.net/api/Account/Login", true);
            xhr.onload = function(){
                console.log(xhr.response);
            };
            xhr.send();