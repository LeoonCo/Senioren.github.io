//App-Version
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker erfolgreich registriert:', registration);
            })
            .catch((error) => {
                console.log('Service Worker Registrierung fehlgeschlagen:', error);
            });
    });
}


//index.html
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentLocation.split("/").pop()) {
            item.classList.add("active");
        }
    });
});


//grundlagen.html
document.addEventListener("DOMContentLoaded", () => {
    // Browser-Simulation
    const openWebsiteButton = document.getElementById("openWebsite");
    const browserWindow = document.getElementById("browserWindow");

    openWebsiteButton.addEventListener("click", () => {
        browserWindow.style.display = "block";
    });

    // Suchmaschinen-Simulation
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");
    const searchQuery = document.getElementById("searchQuery");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            searchQuery.textContent = query;
            searchResult.style.display = "block";
        } else {
            alert("Bitte gib einen Suchbegriff ein.");
        }
    });
});


//sicherheit.html
document.addEventListener("DOMContentLoaded", () => {
    // Passwort-Generator
    const generatePasswordButton = document.getElementById("generatePassword");
    const passwordDisplay = document.getElementById("passwordDisplay");

    generatePasswordButton.addEventListener("click", () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordDisplay.textContent = `Dein sicheres Passwort: ${password}`;
    });

    // Phishing-Simulation
    const checkPhishingButton = document.getElementById("checkPhishing");
    const phishingExample = document.getElementById("phishingExample");
    const BaitButton = document.getElementById("LinkBait");

    checkPhishingButton.addEventListener("click", () => {
        phishingExample.style.display = "block";
    });

    BaitButton.addEventListener("click", () => {
        BaitExample.style.display = "block";
    });

    // Sichere Websites anzeigen
    const checkWebsiteSecurityButton = document.getElementById("checkWebsiteSecurity");
    const websiteSecurity = document.getElementById("websiteSecurity");

    checkWebsiteSecurityButton.addEventListener("click", () => {
        websiteSecurity.style.display = "block";
    });
});


//kommunikation.html
document.addEventListener("DOMContentLoaded", () => {
    // Tipps zur Messenger-Nutzung
    const messengerTipsButton = document.getElementById("messengerTips");
    const messengerTipsBox = document.getElementById("messengerTipsBox");

    messengerTipsButton.addEventListener("click", () => {
        if (messengerTipsBox.style.display === "none") {
            messengerTipsBox.style.display = "block";
        } else {
            messengerTipsBox.style.display = "none";
        }
    });
});
// Alle Abschnitte standardmäßig ausblenden
const tutorials = document.querySelectorAll('.app-tutorial');
tutorials.forEach(tutorial => tutorial.style.display = 'none');
// Navigation anklickbar machen
document.querySelectorAll('.app-navigation li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Alle anderen Tutorials ausblenden
        tutorials.forEach(tutorial => tutorial.style.display = 'none');
        
        // Gewünschten Abschnitt anzeigen
        document.getElementById(targetId).style.display = 'block';
    });
});


//services.html
document.addEventListener("DOMContentLoaded", () => {
    // Tipps für die Online-Suche
    const searchTipsButton = document.getElementById("searchTips");
    const searchTipsBox = document.getElementById("searchTipsBox");

    searchTipsButton.addEventListener("click", () => {
        if (searchTipsBox.style.display === "none") {
            searchTipsBox.style.display = "block";
        } else {
            searchTipsBox.style.display = "none";
        }
    });

    // Sicherheitsmaßnahmen im Online-Banking
    const bankingSecurityButton = document.getElementById("bankingSecurity");
    const bankingSecurityBox = document.getElementById("bankingSecurityBox");

    bankingSecurityButton.addEventListener("click", () => {
        if (bankingSecurityBox.style.display === "none") {
            bankingSecurityBox.style.display = "block";
        } else {
            bankingSecurityBox.style.display = "none";
        }
    });
});


//glossar.html
function filterGlossary() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const glossaryList = document.getElementById("glossaryList");
    const terms = glossaryList.getElementsByTagName("li");

    for (let i = 0; i < terms.length; i++) {
        const term = terms[i].getAttribute("data-term").toLowerCase();
        if (term.includes(filter)) {
            terms[i].style.display = ""; // Zeigen
        } else {
            terms[i].style.display = "none"; // Verbergen
        }
    }
}


//suche.html
document.addEventListener("DOMContentLoaded", function() {
    // Problemdaten (dieser Bereich könnte später mit einer Datenbank ersetzt werden)
    const problemData = [
        {
            problem: "Wie richte ich eine E-Mail ein?",
            solution: "1. Öffne deinen E-Mail-Anbieter (z. B. Gmail oder Outlook).",
            solution2: "2. Klicke auf 'Konto erstellen'.",
            solution3: "3. Fülle deine persönlichen Daten aus.",
            solution4: "4. Wähle einen Benutzernamen und ein Passwort.",
            solution5: "5. Folge den weiteren Anweisungen auf dem Bildschirm.",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie installiere ich eine App?",
            solution: "1. Öffne den App-Store auf deinem Gerät (Google Play für Android, App Store für iOS).",
            solution2: "2. Suche nach der gewünschten App.",
            solution3: "3. Klicke auf 'Installieren'.",
            solution4: "4. Warte, bis die App heruntergeladen ist.",
            solution5: "5. Öffne die App, nachdem die Installation abgeschlossen ist.",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie kann ich sicher im Internet surfen?",
            solution: "1. Verwende immer einen aktuellen Browser.",
            solution2: "2. Besuche nur sichere Websites (erkennbar an 'https').",
            solution3: "3. Verwende starke Passwörter und ändere sie regelmäßig.",
            solution4: "4. Öffne keine unbekannten E-Mails oder Anhänge.",
            solution5: "5. Installiere ein Antivirusprogramm.",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie richte ich mein WLAN ein?",
            solution: "1. Schließe den Router an den Strom und das Internet an.",
            solution2: "2. Verbinde dein Gerät mit dem WLAN (siehe Rückseite des Routers für den Standardnamen und das Passwort).",
            solution3: "3. Öffne den Browser und gehe zu '192.168.0.1' oder '192.168.1.1'.",
            solution4: "4. Melde dich mit den Router-Zugangsdaten an.", 
            solution5: "5. Folge den Anweisungen, um dein WLAN einzurichten.",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie mache ich ein Videoanruf?",
            solution: "1. Öffne eine App wie Skype oder Zoom.",
            solution2: "2. Melde dich an oder erstelle ein Konto.",
            solution3: "3. Wähle einen Kontakt aus der Liste.",
            solution4: "4. Klicke auf das Kamera-Symbol, um einen Videoanruf zu starten.",
            solution5: "5. Stelle sicher, dass Kamera und Mikrofon eingeschaltet sind.",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie verschicke ich Nachrichten auf Whatsapp?",
            solution: "1. Öffnen Sie die App und tippen Sie auf einen Kontakt.",
            solution2: "2. Geben Sie Ihre Nachricht unten im Eingabefeld ein.",
            solution3: "3. Tippen Sie auf das Papierflieger-Symbol, um die Nachricht zu senden.",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie kann ich eine Gruppe auf Whatsapp aufmachen?",
            solution: "1. Tippen Sie auf das Menü (drei Punkte oben rechts).",
            solution2: "2. Wählen Sie 'Neue Gruppe' und fügen Sie Kontakte hinzu.",
            solution3: "3. Geben Sie einen Namen für die Gruppe ein und bestätigen Sie.",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie kann ich Nachrichten auf Facebook verschicken?",
            solution: "1. Öffnen Sie den Messenger und tippen Sie auf den Namen eines Kontakts.",
            solution2: "2. Geben Sie Ihre Nachricht in das Textfeld unten ein.",
            solution3: "3. Tippen Sie auf das Papierflieger-Symbol, um die Nachricht zu senden.",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie kann ich eine Sprachnachricht auf Facebook aufnehmen?",
            solution: "1. Öffnen Sie einen Chat und halten Sie das Mikrofon-Symbol gedrückt.",
            solution2: "2. Sprechen Sie Ihre Nachricht ein.",
            solution3: "3. Heben Sie Ihren Finger, um die Nachricht zu senden.",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie kann ich ein Videogespräch auf Facebook starten?",
            solution: "1. Wählen Sie einen Kontakt aus.",
            solution2: "2. Tippen Sie oben rechts auf das Kamera-Symbol.",
            solution3: "3. Warten Sie, bis Ihr Kontakt den Anruf annimmt.",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie verschicke ich eine Nachricht auf Telegram?",
            solution: "1. Öffnen Sie Telegram und tippen Sie auf einen Chat.",
            solution2: "2. Geben Sie Ihre Nachricht ein und drücken Sie auf das Senden-Symbol.",
            solution3: "",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "Wie kann ich Kanälen auf Telegam beitreten?",
            solution: "1. Suchen Sie nach einem Kanalnamen über die Suchleiste.",
            solution2: "2. Tippen Sie auf den gewünschten Kanal und wählen Sie 'Beitreten'.",
            solution3: "",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "",
            solution: "",
            solution2: "",
            solution3: "",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "",
            solution: "",
            solution2: "",
            solution3: "",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },
        {
            problem: "",
            solution: "",
            solution2: "",
            solution3: "",
            solution4: "",
            solution5: "",
            solution6: "PDF_ANLEITUNG"
        },

    ];

    // Elemente aus dem HTML auswählen
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsDiv = document.getElementById("results");

    // Suchfunktion
    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim().toLowerCase();  // Eingabe normalisieren
        resultsDiv.innerHTML = "";  // Vorherige Ergebnisse löschen

        if (query) {
            let found = false;

            // Problemdaten durchsuchen
            for (const entry of problemData) {
                if (entry.problem.toLowerCase().includes(query)) {
                    found = true;
                    const resultHTML = `
                        <h3>${entry.problem}</h3>
                        <p>${entry.solution}<br>${entry.solution2}<br>${entry.solution3}<br>${entry.solution4}<br>${entry.solution5}<br>${entry.solution6}</p>
                    `;
                    resultsDiv.innerHTML += resultHTML;
                }
            }

            if (!found) {
                resultsDiv.innerHTML = "<p>Es wurde kein passendes Problem gefunden. Bitte versuche es mit einem anderen Suchbegriff.</p>";
            }
        } else {
            resultsDiv.innerHTML = "<p>Bitte gib ein Problem ein, um eine Lösung zu finden.</p>";
        }
    });
});