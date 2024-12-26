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

