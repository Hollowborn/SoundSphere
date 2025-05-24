<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    require 'db.php';

    $userName = $_POST["username"];
    $userEmail = $_POST["email"];
    $userPass = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hashed password

    $sql = "INSERT INTO users (userName, userEmail, userPass) VALUES (?, ?, ?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("sss", $userName, $userEmail, $userPass);

    if ($stmt->execute()) {
        header("Location: login.html");
        // Optionally redirect: header("Location: login.html");
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $connection->close();
}
?>
