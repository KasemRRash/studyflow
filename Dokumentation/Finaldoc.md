# Projektdokumentation: StudyFlow

## 1. Einleitung

StudyFlow ist ein interaktiver Webservice, der es Nutzerinnen und Nutzern ermöglicht, auf unterhaltsame Weise IT-Wissenshappen zu konsumieren. Die Idee entstand aus dem Bedarf, Lernen, Fokus und Technologie auf einer Plattform zu verbinden. Unsere Plattform zielt darauf ab, IT-Begriffe verständlich aufzubereiten und gleichzeitig mit Videos, Bildern, Musik und weiteren Elementen anzureichern, um den sogenannten "Flow"-Zustand beim Lernen zu unterstützen.

---

## 2. Zielsetzung und Motivation

Das Ziel unseres Projekts besteht darin, eine Webanwendung zu entwickeln, die auf einfache, visuell unterstützte Weise IT-Wissen vermittelt. Dabei steht die Kombination aus kompakter Wissensdarstellung, multimedialer Präsentation und lernfördernden Funktionen wie Timer oder Dark Mode im Mittelpunkt. Die Anwendung richtet sich insbesondere an Studierende und IT-Interessierte, die beim Lernen gezielt unterstützt werden möchten, ohne dabei von Werbung oder überladener Informationsdichte abgelenkt zu werden.

---

## 3. Technische Umsetzung

### 3.1 Verwendete Technologien

Für die Entwicklung des Frontends kommen HTML, CSS und JavaScript zum Einsatz. Zusätzlich nutzen wir Elemente aus dem Tailwind CSS-Framework, um ein modernes und responsives Design zu gewährleisten. Die Daten werden im JSON-Format verarbeitet und strukturiert dargestellt.

Das Backend befindet sich aktuell noch in der Planungsphase. Derzeit arbeiten wir mit Python, um zentrale Funktionen wie API-Zugriffe zu steuern. In der weiteren Entwicklung sind Bash-Skripte zur Automatisierung sowie Docker-Container für den stabilen Betrieb der Anwendung vorgesehen. Die gesamte Anwendung läuft aktuell in einer lokalen Entwicklungsumgebung.

---

## 4. API-Anbindungen

### 4.1 Eingesetzte APIs

Wir haben mehrere APIs integriert, um die Inhalte für StudyFlow dynamisch zu generieren. Die Wikipedia API ermöglicht es uns, themenbezogene Texte und Definitionen automatisiert abzurufen. Die YouTube Data API dient zur Einbindung passender Lernvideos. Zusätzlich verwenden wir die Unsplash API, um zum jeweiligen IT-Begriff passende Bilder anzuzeigen. Für die Konvertierung der Seite in PDF-Format wurde die HTML2PDF API eingebunden.

### 4.2 Getestete, aber nicht dauerhaft integrierte APIs

Im Laufe der Entwicklung haben wir verschiedene APIs evaluiert. Die Runaware API zur Bildgenerierung wurde verworfen, da die erzeugten Inhalte teilweise ungeeignet waren. Die OpenAI API wurde für automatisierte Begriffserklärungen getestet, jedoch aufgrund von Kosten und Komplexität zunächst nicht weiterverfolgt. Auch Pexels als alternative Bildquelle wurde getestet, jedoch wegen Limitierungen in der freien Version ausgeschlossen. Verschiedene Musik-APIs (z. B. Deezer, Spotify) wurden ebenfalls ausprobiert, um Hintergrundmusik zu integrieren.

---

## 5. Funktionale Anforderungen

Unsere Anwendung erfüllt bereits eine Vielzahl der geplanten Funktionen. Nutzerinnen und Nutzer können Wikipedia-Artikel zu IT-Begriffen abrufen, Themen zufällig oder gezielt auswählen, Titel und Kurzbeschreibungen einsehen sowie passende Videos und Bilder betrachten. Zusätzlich lassen sich neue Themen per Knopfdruck generieren. Ein Dark Mode sowie erste Ansätze zur Mehrsprachigkeit, Timerfunktionen und Filteroptionen sind integriert oder in Vorbereitung. Die Inhalte können über die PDF-Funktion exportiert werden. Weiterhin arbeitet das System mit einem lokalen Cache, um wiederholte API-Abfragen zu minimieren.

---

## 6. Nicht-funktionale Anforderungen

Die Ladezeiten sollen unter zwei Sekunden bleiben, was durch optimierte API-Aufrufe und lokales Caching unterstützt wird. Die Oberfläche ist vollständig responsiv gestaltet und passt sich automatisch an verschiedene Bildschirmgrößen an. Das Design orientiert sich an modernen UI/UX-Standards und richtet sich optisch insbesondere an eine jüngere Zielgruppe. Darüber hinaus haben wir eine einfache Fehlerbehandlung implementiert, um bei API-Ausfällen sinnvolle Rückmeldungen zu geben. Die Codebasis ist modular aufgebaut, was die Wartung und Erweiterung erleichtert. Eine Offline-Vorschau bereits geladener Inhalte ist als zukünftige Option vorgesehen.

---

## 7. Arbeitsweise im Team

Unsere Teamarbeit orientiert sich an agilen Prinzipien. Die Planung und Aufgabenverteilung erfolgt über Jira, während wir unsere Entwürfe und Layouts in Figma entwickeln. Die Zuständigkeiten sind klar zwischen Frontend, Backend und API-Anbindung aufgeteilt. Der Entwicklungsprozess ist in kurze Iterationen untergliedert, wobei regelmäßig kleine, funktionierende Zwischenschritte umgesetzt werden. Zusätzlich haben wir ChatGPT genutzt, um geeignete APIs zu recherchieren, Prototypen zu entwerfen und technische Probleme zu lösen. Funktionen werden regelmäßig im Team überprüft, um Qualität und Konsistenz zu sichern.


**Wireframes:**
![studyflow](https://github.com/user-attachments/assets/153f3a29-2136-418c-8559-f203ba37630a)

Die grafischen Wireframes wurden mit Figma erstellt und zeigen das visuelle Konzept von StudyFlow in verschiedenen Darstellungsformen. Dabei liegt der Fokus auf einer klaren Benutzerführung: In der Desktop-Ansicht steht das aktuelle IT-Thema mit eingebettetem Video, Kurzbeschreibung und drei passenden Bildern im Zentrum. Ein Button ermöglicht es, ein neues Thema zu laden. Darunter befindet sich ein erklärender Abschnitt zur Idee hinter StudyFlow. Ergänzt wird das Layout durch eine integrierte Musiksteuerung sowie eine visuelle Timeranzeige im Pomodoro-Stil. Diese Gestaltungsideen wurden im späteren Design iterativ umgesetzt.



**Meilensteine**:

![image](https://github.com/user-attachments/assets/5c473db1-5b42-43bd-9eeb-2c291fdac8e8)

Im Rahmen unseres Projekts haben wir gemeinsam einen Zeitplan mit den wichtigsten Meilensteinen definiert. Die erste Phase bestand aus Ideensammlung, Recherche und Entwurf (inkl. Wireframes), die innerhalb der ersten zwei Wochen abgeschlossen war. Danach folgte die technische Umsetzung des Frontends und der ersten API-Anbindungen, die wir bis Mitte der Projektlaufzeit realisieren konnten. Die zweite Hälfte des Projekts widmete sich der Optimierung, der Integration zusätzlicher APIs sowie der Vorbereitung auf die Präsentation und Dokumentation. Abschließend stehen Tests, das Feinschliff-Design sowie mögliche Zusatzfunktionen (z. B. PDF-Export, Musiksteuerung, Benutzeroberfläche für mobile Geräte) im Fokus.

---

## 8. Business-Voraussetzungen und Zielgruppe

Unsere primäre Zielgruppe besteht aus Studierenden und Selbstlernenden mit IT-Bezug. Die Plattform soll dauerhaft kostenlos und möglichst als Open-Source-Projekt zur Verfügung stehen. Der Betrieb ist lokal oder über einfache Hostinglösungen wie Docker möglich. Perspektivisch möchten wir zusätzliche Funktionen wie Benutzerkonten, Kalender, Notizen und persönliche Empfehlungen einführen. Eine spätere Monetarisierung durch Premium-Funktionen oder Community-Support ist denkbar, steht jedoch aktuell nicht im Fokus.

---

## 9. Ausblick und geplante Erweiterungen

Für die Zukunft planen wir, die Exportfunktion weiter auszubauen, sodass Nutzer Lerninhalte als PDF speichern und teilen können. Die Anwendung soll vollständig mehrsprachig nutzbar sein. Außerdem möchten wir ein Quiz-Modul implementieren, das zu jedem Thema Fragen zur Lernkontrolle stellt. Ein Adminbereich für das Einpflegen eigener Inhalte ist ebenfalls in Planung. Weiterhin sollen KI-Dienste eingesetzt werden, um Themen automatisch zu erstellen und visuell aufzubereiten. Weitere Ideen umfassen die Einführung von Favoritenlisten, Lesezeichen, einem persönlichen Dashboard sowie einer Fortschrittsanzeige.

---

## 10. Fazit

StudyFlow ist ein modernes und vielseitiges Werkzeug, das IT-Wissen auf kreative und strukturierte Weise vermittelt. Die Verknüpfung von APIs, mediengestützter Präsentation und Fokus-Tools schafft eine positive Lernumgebung. Unser Team hat gemeinsam eine stabile Basis geschaffen, die sich flexibel erweitern lässt. Besonders hervorzuheben ist die offene Architektur, die sowohl Weiterentwicklung durch uns selbst als auch durch eine Community langfristig ermöglicht.

---

**Stand:** Mai 2025
**Version:** 0.7.2 (lokaler Entwicklungsstand)
