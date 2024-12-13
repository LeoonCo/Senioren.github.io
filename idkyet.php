<?php
// Verbindung zur SQLite-Datenbank
$db = new PDO('sqlite:my_website.db');

// Benutzerinformationen abrufen (Beispiel ohne Sitzung)
$userId = 1; // Ersetze durch die tatsächliche Benutzer-ID aus der Sitzung
$stmt = $db->prepare('SELECT username, email FROM users WHERE id = ?');
$stmt->execute([$userId]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode($user);
} else {
    echo json_encode(['error' => 'Benutzer nicht gefunden.']);
}
?>

<?php
session_start(); // Sitzung starten

// Prüfen, ob der Benutzer eingeloggt ist
if (!isset($_SESSION['user_id'])) {
    echo "Du musst eingeloggt sein, um dein Profil zu sehen.";
    exit; // Verhindert weiteren Code, wenn der Benutzer nicht eingeloggt ist
}

// Verbindung zur SQLite-Datenbank
$db = new PDO('sqlite:my_website.db');
$userId = $_SESSION['user_id']; // Benutzer-ID aus der Sitzung holen

$stmt = $db->prepare('SELECT username, email FROM users WHERE id = ?');
$stmt->execute([$userId]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo "Benutzername: " . $user['username'] . "<br>";
    echo "E-Mail: " . $user['email'] . "<br>";
} else {
    echo "Benutzer nicht gefunden.";
}
?>
