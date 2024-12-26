<?php
// Verbindung zur Datenbank herstellen
try {
    $pdo = new PDO('sqlite:C:/Users/pucht/Projects/SeniorenWebsite/frontend/my_website.db'); // Pfad zur SQLite-Datenbank anpassen
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Datenbankverbindung fehlgeschlagen: " . $e->getMessage());
}

// POST-Daten verarbeiten
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Benutzereingaben absichern und validieren
    $email = isset($_POST['email']) ? trim($_POST['email']) : null;
    $password = isset($_POST['password']) ? trim($_POST['password']) : null;

    // Eingaben sichern
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    try {
        // Benutzer in die Datenbank einfügen
        $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':password', $hashedPassword, PDO::PARAM_STR);
        $stmt->execute();

        echo "Registrierung erfolgreich!";
    } catch (PDOException $e) {
        // Fehler beim Einfügen behandeln
        die("Datenbankfehler: " . $e->getMessage());
    }
}
?>

 