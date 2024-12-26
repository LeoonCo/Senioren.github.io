<?php
// Verbindung zur SQLite-Datenbank
try {
    $pdo = new PDO('sqlite:C:/Users/pucht/Projects/SeniorenWebsite/frontend/my_website.db'); // Pfad zur SQLite-Datenbank anpassen
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Datenbankverbindung fehlgeschlagen: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];

    // Benutzer suchen
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        // Benutzer in der Sitzung speichern
        $_SESSION['user_id'] = $user['id'];
        
        // Weiterleitung zum Profil
        header('Location: profile.php'); 
        exit; // Verhindert das Weiterlaufen des Skripts nach der Weiterleitung
    } else {
        echo "Ungültige Anmeldedaten.";
    }
}
?>
