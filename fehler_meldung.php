<?php
// Beispiel zur Benutzeranmeldung
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];

    // Benutzer suchen
    $stmt = $db->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        echo "Anmeldung erfolgreich!";
    } else {
        echo "<p class='error'>Ungültige Anmeldedaten. Bitte versuche es erneut.</p>";
    }
}
