<!doctype html> 
<html> 
    <head>
        <title>Login</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        
        <style>
            .content-align {
                text-align: center;
                margin-top: 100px;
            }
            
            body {
                background-color: #fbfbfb;
            }
            .fix-img {
                margin-bottom: 5px;
            }
            
            button {
                margin: 20px 0;
            }

            #countdown {
                margin: 10px 0;
            }
            
            .lead, h1 {
                margin-left: 10px;
                margin-right: 10px;
            }
            
            @media (max-width: 500px) {
                .fix-img {
                    width: 300px;
                }
                .lead {
                    font-size: 1rem;
                }
                h1 {
                    font-size: 2rem;
                }
            }
            
        </style>
        
    </head>
    <body>
        
        <main role="main">
            <div class="starter-template content-align">
            <?php
            // extract values user, pass
            $user = $_POST["user"];
            $pass = $_POST["pass"];

            // open up file to read
            $file = fopen("users.txt","r");
            
            // boolean that is true if user is found
            $flag = false; 

            // iterate through file data to see if there is a match
            while (!(feof($file))){
                $line = fgets($file);
                $line = trim($line);
                $array = explode(":",$line);
                if ( ($array[2] == $user) && ($array[3] == $pass)){
                    $flag = true;
                    break;
                }
            }
            
            // if there is a match, show successful login 
            if ($flag) {
                echo '<div><img class = "fix-img" src="images/login.gif" alt="load-feature" width = "350"></div>';
                print ("<h1>Hey $user, welcome back!</h1>");
                print("<p class='lead'>Now, lets go shopping</p>");
                echo  '<div id = "countdown"></div>';
            }
            else {
                // if no match, say unsuccess, try again
                echo '<img class = "fix-img" src = "images/bark.gif">';
                print("<h1>Yikes! We couldn't find you...</h1>"); 
                print("<p class='lead'>Make sure your login information is correct or if you're not registered with us, make an account!</p>");
                echo '<a href="products.html" data-toggle="modal" data-target="#exampleModal"><button type="button" class="btn btn-dark" >Try Again</button></a>';
            }
            ?>
            </div>
        </main>
                
        <script>
            var timeleft = 10;
            var obj = document.getElementById("countdown");
            var downloadTimer = setInterval(function(){
              obj.innerHTML = timeleft + " seconds remaining";
              timeleft -= 1;
              if(timeleft <= 0){
                clearInterval(downloadTimer);
                window.location.href = 'http://i6.cims.nyu.edu/~jcl700/webdev/assignment_7/products.html';
              }
            }, 1000);  
            
        </script>
    </body>
</html>