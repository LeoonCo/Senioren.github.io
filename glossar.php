<?php
// Datenbankverbindung herstellen
try {
    $pdo = new PDO('sqlite:C:/Users/pucht/Projects/SeniorenWebsite/frontend/my_website.db'); // Pfad zur SQLite-Datenbank
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Datenbankverbindung fehlgeschlagen: " . $e->getMessage());
}

// Daten aus dem Glossar (z. B. einer CSV-Datei) einlesen
$glossarDaten = [
    ['Begriff' => 'Algorithmus', 'Definition' => 'Eine Folge von Anweisungen zur Lösung eines Problems.', 'Kategorie' => 'Informatik'],
    ['Begriff' => 'Neuronales Netz', 'Definition' => 'Ein Modell, das das menschliche Gehirn nachbildet.', 'Kategorie' => 'Künstliche Intelligenz'],
    // Weitere Glossar-Daten hier hinzufügen
];

// Daten in die Datenbank einfügen
try {
    $stmt = $pdo->prepare("INSERT INTO glossar (begriff, definition, kategorie) VALUES (:begriff, :definition, :kategorie)");

    foreach ($glossarDaten as $eintrag) {
        $stmt->execute([
            ':begriff' => htmlspecialchars($eintrag['Begriff']),
            ':definition' => htmlspecialchars($eintrag['Definition']),
            ':kategorie' => htmlspecialchars($eintrag['Kategorie']),
        ]);
    }

    echo "Daten wurden erfolgreich übertragen!";
} catch (PDOException $e) {
    die("Fehler beim Einfügen der Daten: " . $e->getMessage());
}
?>
