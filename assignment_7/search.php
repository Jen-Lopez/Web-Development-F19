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
            .button {
                display: block;
                margin: 20px 0;
                text-align: center;
            }
            
            .head {
                text-align: center;
            }
            .item {
                list-style: none; 
            }
            .card {
                text-align: center;
                margin: 20px;
                display: inline-block;
            }
            .starter-template {
                margin-top: 50px;
            }
        </style>
    </head>
    <body>
        
        <main role="main">
            <div align = 'center' class="starter-template">
            <?php 
            $query = $_GET["query"];
            $query = trim($query);
            $query = strtolower($query);
            
            // open product file to read
            $file = fopen ("product.txt", "r") or die("can't open file");
            
            // items found
            $found = 0;
            
            $currIndex = 0; 
            
            // go through file
            while (!(feof($file))){
                $line = fgets($file);
                $line = trim($line);
                
                $productInfo = explode(":",$line);
                $productArray = explode(" ", $productInfo[0]);
                
                $images = array("images/sweater.jpg","images/shirt.jpg","images/pj.jpeg","images/hat.jpg");
                
                foreach ($productArray as $p){
                    $p = strtolower($p);
                    if ($query == $p){
                        $found += 1;
                        print("<div class = 'card' style='width: 18rem;'>");
                        print ("<img class = 'card-img-top' src = '$images[$currIndex]' alt = 'Card image cap'>");

                        print("<div class = 'card-body'>");
                        print("<p class = 'card-text'> <b>$productInfo[0]</b>");
                        print("<p class = 'card-text'> $productInfo[1]");
                        print("<p class = 'card-text'> Q: $productInfo[2]");
                        print("<p class = 'card-text'>$productInfo[3]");
                        print("</div>");
                        print("</div>");
                        break;
                    }
                }
                $currIndex++;
            }
        
            if ($found == 0){
                print ("<h1>Whoops!");
                print ("<h3>We couldn't find what you were looking for");
                print ("<p class='lead'> But we still have great items!");
            }
            ?>
            </div>
                        
            <a class = "button" href="products.html" data-toggle="modal" data-target="#exampleModal"><button type="button" class="btn btn-dark">Go Shop</button></a>
        </main>
                
    </body>
</html>