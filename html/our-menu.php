<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable: no">
    <link rel="stylesheet" href="../css/stylesheet.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Kuchnia Polska | Our menu</title>
</head>
<body>
    <?php include '../html/menu.html';?>
    <?php include '../html/sidebar-menu.html'; ?>

    <div id="body-container">
        <div id="image-container" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/kitchen.jpg'); background-repeat: no-repeat; background-size: cover; background-position:center;">
            <div class="centered">
                <p>OUR<br>MENU</p>
            </div>
        </div>
        
        <div id="content" style="padding-top: 0px;">
            <div id="categories-container" class="width-ignore">
                <div id="categories-selection">

                </div>
                
            </div>

            <div id="category-details">
                <h1 id="category-name"></h1>
                <p id="category-description" style="color: rgb(240, 240, 240);"></p>
            </div>

            <div id="products-container">

            </div>
        </div>

        <?php include '../html/footer.html';?>
    </div>
    <script src="../js/navigation.js"></script>
    <script src="../js/products.js"></script>
</body>
</html>