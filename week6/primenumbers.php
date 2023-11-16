<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime number between 1 and 100</title>
</head>
<body>
    <?php
    $x = 100;
    for ($i = 1; $i <= $x; $i++) {
       $counter = 0;
       for ($j = 1; $j <= $i; $j++) {
       if ($i % $j == 0) {
          $counter++;
          }
        }
        if ($counter == 2) {
        echo "$i";
        echo "</br>";
       }
    }
    ?>
</body>
</html>