<?php
$name=$_POST["Name"];
$email=$_POST["Email"];
$password=$_POST["Password"];
$cpassword=$_POST["confirmPassword"];
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

if (file_exists("users.json")){
$current_data=file_get_contents("users.json");
$array_data=json_decode($current_data, true);

    if ($password===$cpassword){
         $newData=array(
             'Name'=> $name,
             'Email'=> $email,
             'Password'=> $hashedPassword,

        );
    $array_data[]=$newData;
    if(file_put_contents("users.json",json_encode($array_data))){
        echo "post succesfully";
    }
}
else{
    echo "password do not match";
}
}
?>