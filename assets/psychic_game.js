

    




      // initializing scores and guess values
      var win = 0;
      var loss = 0;
      var roundsToplay = 2;
      var roundsPlayed = 0;
      var suggestLetter = [];
      var computerSelection = null;
      var guessAllowed = 4;
      var index = 0;
      var temp;
      var smallLetter;
      var isDone = true;
      var alphabets = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
      
              //Computer generates a random letter

                  var computerSelection = alphabets[Math.floor(Math.random()* alphabets.length)];
                  

               //Testing isDone
                           
        document.onkeyup = function(event) 
        {
          // will use this loop to control the number of guesses

          if (isDone) 
          { 
              

                smallLetter = String.fromCharCode(event.keyCode).toLowerCase();
                                
                suggestLetter.push(smallLetter);
                                                                 
                document.getElementById("demo1").innerHTML = "Your guesses so far: " + suggestLetter;

                if (smallLetter === computerSelection)
                   {
                      win++; 
                   } else {
                      loss ++;
                   }

                document.getElementById("demo2").innerHTML = "Wins: " + win;
                document.getElementById("demo3").innerHTML = "Losses: " + loss;
                
                guessAllowed--;

                document.getElementById("demo4").innerHTML = " Guesses Left: " + guessAllowed;
                         

                if (guessAllowed === 0) {
                  document.getElementById("demo5").innerHTML = " <h2> Game Over </h2>" ;

                       isDone = false;
                }

            }
               
        }


  

  