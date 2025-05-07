# Projektdokumentation: StudyFlow

## 1. Einleitung

StudyFlow ist ein interaktiver Webservice, der es Nutzerinnen und Nutzern ermöglicht, auf unterhaltsame Weise IT-Wissenshappen zu konsumieren. Die Idee entstand aus dem Bedarf, Lernen, Fokus und Technologie auf einer Plattform zu verbinden. Unsere Plattform zielt darauf ab, IT-Begriffe verständlich aufzubereiten und gleichzeitig mit Videos, Bildern, Musik und weiteren Elementen anzureichern, um den sogenannten "Flow"-Zustand beim Lernen zu unterstützen.

---

## 2. Zielsetzung und Motivation

Ziel des Projekts ist die Entwicklung einer Webanwendung, die:

* IT-Wissen anschaulich und kurz darstellt
* multimediale Unterstützung bietet (Video, Bilder, Musik)
* nutzerfreundlich, schnell und modern gestaltet ist
* Tools zur Fokussierung wie Timer oder Dark Mode bereitstellt

Wir wollten eine Anwendung schaffen, die Studierende beim Lernen unterstützt, ohne sie zu überladen oder durch Werbung oder ähnliche Elemente zu stören.

---

## 3. Technische Umsetzung

### 3.1 Technologien

**Frontend:**

* HTML, CSS, JavaScript
* Tailwind CSS Elemente (responsive + modern)

**Backend (in Planung):**

* Python (aktuell aktiv verwendet)
* Bash-Skripte (zur Automatisierung geplant)
* Docker-Container (für Deployment)

**Sonstiges:**

* JSON als Datentransferformat
* Lokale Entwicklungsumgebung

---

## 4. API-Anbindungen

### 4.1 Integriert:

* **Wikipedia API**: Automatischer Abruf von Definition + Einleitungstext für einen IT-Begriff (z. B. "Python")
* **YouTube Data API**: Videoeinbettung auf Basis des Begriffs (passendes Erklärvideo)
* **Unsplash API**: 3 passende Bilder zum Begriff (z. B. bei "Python": Code, Schlange, Editor)
* **HTML2PDF API**: 

### 4.2 Versuche und Tests:

* **Runaware API**: getestet für Bilder generieren (nicht integriert, da der Inhalt dieser Bilder nicht immer nutzerfreundlich war).
* **OpenAI API**: getestet für automatisierte Begriffserklärungen (nicht final integriert wegen Kosten/Leistung)
* **Pexels API**: getestet als Bildquelle (nicht integriert wegen Limitierungen im Free-Tier)
* **Hintergrundmusik-API**: verschiedene freie Player wie (Deezer-API & Spotify API) und Sounds getestet (z. B. Musik im Loop bei Timerstart)

---

## 5. Funktionale Anforderungen

* ✅ Wikipedia-Artikel abrufen und darstellen
* ✅ Zufällige oder gezielte Auswahl eines IT-Themas
* ✅ Anzeige von Titel + Kurzbeschreibung
* ✅ Integration von 1 YouTube-Video
* ✅ Anzeige von 3 passenden Bildern
* ✅ Dark Mode (umschaltbar)
* ✅ Button "Neues Thema laden"
* ☑️ Sprache umschalten (Deutsch/Englisch)
* ☑️ Timerfunktion (z. B. 25-Minuten-Fokus)
* ☑️ Thematische Filterung
* ☑️ Hintergrundmusik bei Fokusmodus
* ☑️ PDF-Export (per [https://html2pdf.app](https://html2pdf.app) getestet)

---

## 6. Nicht-funktionale Anforderungen

* Ladezeiten unter 2 Sekunden (optimierte API-Calls)
* Responsives Design für Handy, Tablet und Desktop
* Modernes, cleanes Design mit jugendlichem Charakter
* Fehlertoleranz bei API-Ausfällen (Fallback-Meldungen)

---

## 7. Arbeitsweise im Team

* Gemeinsame Planung via Jira: [https://studyflow.atlassian.net/jira/core/projects/STUD/board](https://studyflow.atlassian.net/jira/core/projects/STUD/board)
* Visuelle Entwürfe per Figma: [https://www.figma.com/board/SNvGnrRe5fQ1FU1IlCuyBF/](https://www.figma.com/board/SNvGnrRe5fQ1FU1IlCuyBF/)
* Aufgabenverteilung nach Frontend/Backend/API
* Agile Entwicklung mit kurzen Zyklen
* Fokus auf Machbarkeit und Erweiterbarkeit
* Suchmaschine für die Findung kostenloser APIs - ChatGPT

---

## 8. Business-Voraussetzungen / Zielgruppe

* Zielgruppe: IT-Interessierte, Studierende, Selbstlernende
* Der Dienst soll frei nutzbar sein (Open Source geplant)
* Hosting lokal oder über einfache Cloud-Lösungen (Docker)
* Später mögliche Erweiterung mit Accountsystem (Kalendar option sowie Notizen...)

---

## 9. Ausblick und geplante Erweiterungen

* PDF-Export der Seite als "Lernzettel"
* Mehrsprachigkeit (Deutsch/Englisch)
* Quiz-Funktion pro Thema (interaktive Lernüberprüfung)
* Admin-Bereich für eigene Wissenshappen
* KI-generierte Begriffe, Zusammenfassungen und Bilder

---

## 10. Fazit

StudyFlow ist eine moderne, kreative Lösung zur Darstellung von IT-Wissen. Durch die Anbindung mehrerer APIs und die einfache, aber durchdachte Benutzeroberfläche bietet das Projekt eine gute Basis für weiteres Wachstum. Das Team hat gemeinsam eine solide Grundlage geschaffen, auf der weitere Ideen leicht umgesetzt werden können.

---

**Stand:** Mai 2025
**Version:** 0.7 (lokaler Entwicklungsstand)
