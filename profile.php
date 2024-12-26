<?php
// Prüfen, ob der Benutzer eingeloggt ist
if (!isset($_SESSION['user_id'])) {
    echo "Du musst eingeloggt sein, um dein Profil zu sehen.";
    exit; // Verhindert den Zugriff auf die Seite, wenn der Benutzer nicht eingeloggt ist
}

// Verbindung zur SQLite-Datenbank
$db = new PDO('sqlite:my_website.db');
$userId = $_SESSION['user_id']; // Benutzer-ID aus der Sitzung holen

$stmt = $db->prepare('SELECT email FROM users WHERE id = ?');
$stmt->execute([$userId]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo "<h2>Benutzerprofil</h2>";
    echo "<p>E-Mail: " . htmlspecialchars($user['email']) . "</p>";
    echo '<a href="change_password.php">Passwort ändern</a><br>';
    echo '<a href="logout.php">Abmelden</a>';
} else {
    echo "Benutzer nicht gefunden.";
}
?>

