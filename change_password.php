<?php
session_start(); // Sitzung starten

// Prüfen, ob der Benutzer eingeloggt ist
if (!isset($_SESSION['user_id'])) {
    echo "Du musst eingeloggt sein, um dein Passwort zu ändern.";
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $currentPassword = $_POST['currentPassword'];
    $newPassword = $_POST['newPassword'];
    $confirmPassword = $_POST['confirmPassword'];

    // Prüfen, ob die Passwörter übereinstimmen
    if ($newPassword !== $confirmPassword) {
        echo "Die neuen Passwörter stimmen nicht überein.";
        exit;
    }

    // Verbindung zur SQLite-Datenbank
    $db = new PDO('sqlite:my_website.db');
    $stmt = $db->prepare('SELECT password FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Überprüfen des alten Passworts
    if ($user && password_verify($currentPassword, $user['password'])) {
        // Neues Passwort speichern
        $newPasswordHash = password_hash($newPassword, PASSWORD_DEFAULT);
        $stmt = $db->prepare('UPDATE profiles SET password = ? WHERE id = ?');
        $stmt->execute([$newPasswordHash, $_SESSION['user_id']]);

        echo "Passwort erfolgreich geändert.";
    } else {
        echo "Das aktuelle Passwort ist falsch.";
    }
}
?>
