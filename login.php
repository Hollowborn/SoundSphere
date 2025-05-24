<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    require 'db.php';

    $userEmail = $_POST["email"];
    $userPass = $_POST["password"];

    $sql = "SELECT * FROM users WHERE userEmail = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("s", $userEmail);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($userPass, $user["userPass"])) {
            // Success - user is authenticated
            session_start();
            $_SESSION["userID"] = $user["userID"];
            $_SESSION["userName"] = $user["userName"];
            header("Location: layout.html");
            // Optionally redirect: header("Location: dashboard.php");
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "User not found.";
    }

    $stmt->close();
    $connection->close();
}
?>
