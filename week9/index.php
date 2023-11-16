<?php
$servername="localhost";
$username="root";
$password="";
$database="week9";

//Create a connection
$conn = mysqli_connect($servername,$username,$password,$database,"3307");

//Die if connection was not successful
if (!$conn){
    echo "Sorry we failed to connect:";
}else {
    //$sql="INSERT INTO customer(customerName,Address)VALUES ('upasana','ktm')";
    $sql ="SELECT * FROM customer";
    $result=mysqli_query($conn,$sql);
    if ($result){
        echo "<table>";
        echo "<tr><th>CustomerId</th><th>customerName</th><th>Address</th></tr>";
        while ($row=mysqli_fetch_assoc($result)){
            echo "<tr>";
            echo "<td>" . $row['customerId']."</td>";
            echo "<td>" . $row['customerName']."</td>";
            echo "<td>" . $row['Address']."</td>";
            echo "<tr>";
        }
        echo "</table>";
    }
}


/*     echo"connection successful";
   }
  $sql = "DELETE FROM customer";
  if ($conn){
       mysqli_query($conn,$sql);
   }else{
       echo "HELLOWWW";
   }
   ?>*/

