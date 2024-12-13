<?php
session_start();

// Verbindung zur SQLite-Datenbank herstellen
$db = new PDO('sqlite:my_website.db');

// Prüfen, ob das Formular abgeschickt wurde
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    // Überprüfen, ob die Passwörter übereinstimmen
    if ($password !== $confirmPassword) {
        echo "Die Passwörter stimmen nicht überein.";
        exit;
    }

    // Überprüfen, ob der Benutzer bereits existiert
    $stmt = $db->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        echo "Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.";
        exit;
    }

    // Passwort verschlüsseln
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Benutzer in die Datenbank einfügen
    $stmt = $db->prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    $stmt->execute([$username, $email, $passwordHash]);

    // Benutzer in die Sitzung setzen (damit er sofort eingeloggt ist)
    $_SESSION['user_id'] = $db->lastInsertId();
    $_SESSION['username'] = $username;

    // Weiterleitung zur Profilseite
    header('Location: profile.php');
    exit;
}
?>
