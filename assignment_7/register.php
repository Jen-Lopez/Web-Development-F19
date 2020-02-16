<!doctype html> 
<html> 
    <head>
        <title>Registration</title>
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
            .count-down {
                width: 300px;
            }
            #countdown {
                margin: 10px 0;
            }

        </style>
        
    </head>
    <body>
        
        <main role="main">

            <div class="starter-template content-align">
                <?php 
                $user = $_POST["user"];

                // open users.txt
                $file = fopen("users.txt","a") or die("can't open file");

                // make a line
                $line = "";

                // extract information from form
                foreach ($_POST as $key => $value){
                    $line .= $value; 
                    $line .= ":";
                }
                $line = rtrim($line,":");
                $line .= "\n";

                // add line into file
                fwrite($file, $line);
                fclose($file);

                print ("<h1>Thank you for registering, $user!</h1>");
                ?>      

                <p class="lead">Now, lets get to shopping</p>
                
                <div id = "countdown"></div>
                <div><img class = "count-down" src="images/load.gif" alt="load-feature"></div>

                <script>
                    var timeleft = 10;
                    var downloadTimer = setInterval(function(){
                      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
                      timeleft -= 1;
                      if(timeleft <= 0){
                        clearInterval(downloadTimer);
                        window.location.href = 'http://i6.cims.nyu.edu/~jcl700/webdev/assignment_7/products.html';
                      }
                    }, 1000);
                </script>
            </div>
        </main>

    </body>
</html>