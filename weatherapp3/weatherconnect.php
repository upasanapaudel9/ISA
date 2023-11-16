<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Weather Application</title>
</head>
<body>
<?php
//create the connection
$conn = mysqli_connect("localhost", "root", "", "weatherdata");
//fetch from api
//$json_data = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=damak&appid=858303e799e39182ae2a2ad9567829a8&units=metric");
//converting into json format
//$data = json_decode($json_data, true);
//access the data 
$date = date("y:m:d");
$description = $data['weather'][0]['description'];
$temperature = $data['main']['temp'];
$pressure = $data['main']['pressure'];
$humidity = $data['main']['humidity'];
$wind_speed = $data['wind']['speed'];
//query 
$sql = "INSERT INTO weatherdata(`description`, `date`, `temperature`, `humidity`, `pressure`, `wind`) VALUES('$description', '$date', '$temperature', '$humidity', '$pressure', '$wind_speed')";
//run the query
mysqli_query($conn, $sql);
echo "success";
?>
</body>
</html>
