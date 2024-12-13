<?php
session_start(); // Sitzung starten

// Verbindung zur SQLite-Datenbank
$db = new PDO('sqlite:my_website.db');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];

    // Benutzer suchen
    $stmt = $db->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo "Benutzer mit dieser E-Mail nicht gefunden.";
    } else {
        // Passwort prüfen
        if (password_verify($password, $user['password'])) {
            // Benutzer in der Sitzung speichern
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            
            // Weiterleitung zum Profil
            header('Location: profile.php');
            exit; // Verhindert das Weiterlaufen des Skripts nach der Weiterleitung
        } else {
            echo "Falsches Passwort.";
        }
    }
}
?>
