<?php
// Datenbankverbindung herstellen
try {
    $pdo = new PDO('sqlite:C:/Users/pucht/Projects/SeniorenWebsite/frontend/my_website.db'); // Pfad zur SQLite-Datenbank
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Datenbankverbindung fehlgeschlagen: " . $e->getMessage());
}

// Daten aus dem search (z. B. einer CSV-Datei) einlesen
$searchDaten = [
    ['problem' => 'Wie richte ich eine E-Mail ein?', 'solution' => '1. Öffne deinen E-Mail-Anbieter (z. B. Gmail oder Outlook). 2. Klicke auf Konto erstellen. 3. Fülle deine persönlichen Daten aus. 4. Wähle einen Benutzernamen und ein Passwort. 5. Folge den weiteren Anweisungen auf dem Bildschirm.'],
    ['problem' => 'Neuronales Netz', 'solution' => 'Ein Modell, das das menschliche Gehirn nachbildet.'],
    // Weitere search-Daten hier hinzufügen
];

// Daten in die Datenbank einfügen
try {
    $stmt = $pdo->prepare("INSERT INTO search (problem, solution) VALUES (:problem, :solution)");

    foreach ($searchDaten as $eintrag) {
        $stmt->execute([
            ':problem' => htmlspecialchars($eintrag['problem']),
            ':solution' => htmlspecialchars($eintrag['solution']),
        ]);
    }

    echo "Daten wurden erfolgreich übertragen!";
} catch (PDOException $e) {
    die("Fehler beim Einfügen der Daten: " . $e->getMessage());
}
?>