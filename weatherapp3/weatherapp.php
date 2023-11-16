<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Weather data of past 7 days</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: rgb(2, 91, 69);
       
        padding: 0;
        color:rgb(2, 91, 69);
        
    }
    
    h1 {
    text-align: center;
    margin-top: 90px; 
    color: yellow;
}
    
    table {
        width: 55%;
        margin: 2% auto;
        border-collapse: collapse;
        border: 1px solid #ddd;
        background-color: rgb(7, 190, 178);
        border-radius:20px;
        overflow: hidden;
        color:black;
    }
    
    th, td {
        padding: 10px;
        text-align: center;
        border: 1px solid black;
        
    }
    
    th {
        background-color:lightblue; 
        font-weight: bold; 
    }
</style>
</head>
<body>
<?php
include "weatherconnect.php";
// Create the connection
$conn = mysqli_connect("localhost", "root", "", "weatherdata");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$query = "SELECT * FROM weatherdata";
$result = mysqli_query($conn, $query);

// Check if any data was retrieved
if (mysqli_num_rows($result) > 0) {
    // Fetch all rows and store them in an array
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // Output an HTML table
    echo "<h1>Past 7 Days Weather Data of Damak</h1>";
    echo "<table>";
    echo "<tr><th>Description</th><th>Date</th><th>Temperature</th><th>Humidity</th><th>Pressure</th><th>Speed</th></tr>";
    
    foreach ($rows as $row) {
        echo "<tr>";
        echo "<td>" . $row['description'] . "</td>";
        echo "<td>" . $row['date'] . "</td>";
        echo "<td>" . $row['temperature'] . "</td>";
        echo "<td>" . $row['humidity'] . "</td>";
        echo "<td>" . $row['pressure'] . "</td>";
        echo "<td>" . $row['wind'] . "</td>";
        echo "</tr>";
    }
    
    echo "</table>";
} else {
    echo "No data found";
}

// Close the database connection
mysqli_close($conn);
?>
</body>
</html>