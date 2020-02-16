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
            }
            
            .heading {
                margin: 20px 0;
            }
            .btn {
                display: block;
                margin: 15px auto;
            }
        </style>
        
    </head>
    <body>
        <main role="main">
            <div class="starter-template content-align">
                <h1 class="heading">Order Summary</h1>
                <h3 class="lead"> Thank you for shopping with us!</h3>
            <?php
                // open shop.txt
                $file = fopen("shop.txt",'a') or die("can't open file");
                
                $line = "";
                
                foreach ($_POST as $key => $value){
                    if ($key != "credit"){
                        $line.= $value;
                        $line.= ':';
                        $keyUpper = ucwords($key);
                        $valUpper = ucwords($value);
                        print("<p>$keyUpper: $valUpper");
                    }
                }
                
                $line = rtrim($line,":");
                $line.= "\n";
                
                // add line to file
                fwrite($file,$line);
            ?>
            <a class = "button" href="products.html" data-toggle="modal" data-target="#exampleModal"><button type="button" class="btn btn-dark">Keep Shopping</button></a>
            </div>
        </main>
    </body>
</html>