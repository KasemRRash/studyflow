// -------------------------
// 1. Themenliste
// -------------------------
const begriffe = [
  "Informatik", "Computerwissenschaften", "Softwareentwicklung", "Programmierung",
  "Algorithmen", "Datenstrukturen", "Netzwerktechnologien", "Datenbanken",
  "Webentwicklung", "Cybersecurity", "Cloud-Computing", "DevOps", "Agile Methoden",
  "Scrum", "Abstrakte Klassen", "Objektorientierte Programmierung", "Funktionale Programmierung",
  "Datenanalyse", "Python", "JavaScript", "Künstliche Intelligenz", "Big Data", "Machine Learning",
  "HTML", "CSS", "Bash", "Linux", "SQL"
];

let wirdGeradeGeladen = false;
const fallbackVideoId = "hY7m5jjJ9mM"; // Katze als wirklicher Ausnahme-Fallback

// -------------------------
// 2. Lade-Inhalt-Funktion
// -------------------------
async function ladeInhalt() {
  if (wirdGeradeGeladen) return;
  wirdGeradeGeladen = true;

  const button = document.getElementById("newTopic");
  const originalText = button.textContent;
  button.disabled = true;
  button.classList.add("opacity-50", "cursor-not-allowed");
  button.textContent = "Lädt…";

  // 2.1 Zufälligen Begriff wählen
  const begriff = begriffe[Math.floor(Math.random() * begriffe.length)];

  try {
    // 2.2 Wikipedia-Artikel abrufen
    const searchUrl = `https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(begriff)}&format=json&origin=*`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    const results = searchData.query.search || [];
    const match = results.find(r =>
      /Programmiersprache|Informatik|Computer|IT|Technik/i.test(r.title)
    ) || results[0] || { title: begriff };
    const wikiTitle = match.title;
    const summaryUrl = `https://de.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`;
    const summaryRes = await fetch(summaryUrl);
    const summary = await summaryRes.json();

    document.getElementById("title").textContent = summary.title;
    document.getElementById("summary").textContent = summary.extract;

    // 2.3 YouTube: erstes Ergebnis holen
    let videoId = null;
    try {
      const ytRes = await fetch(`/youtube?query=${encodeURIComponent(summary.title)}`);
      const ytData = await ytRes.json();
      console.log("YouTube-API zurück:", ytData);
      // immer das erste Element verwenden, falls vorhanden
      if (ytData.videoId && typeof ytData.videoId === "string") {
        videoId = ytData.videoId;
      }
    } catch (e) {
      console.warn("YouTube-API-Fehler:", e);
    }
    if (!videoId) {
      console.warn("Kein YouTube-Video gefunden, nutze Fallback:", fallbackVideoId);
      videoId = fallbackVideoId;
    }
    // Achte auf die richtige ID des <iframe>
    document.getElementById("videoFrame").src = `https://www.youtube-nocookie.com/embed/${videoId}`;

    // 2.4 Bilder holen
    ["img1", "img2", "img3"].forEach(id => {
      const img = document.getElementById(id);
      if (img) img.src = "";  // vorher leeren
    });
    const imgRes = await fetch(`/bilder?query=${encodeURIComponent(summary.title)}`);
    const imgData = await imgRes.json();
    const fotos = imgData.bilder || [];
    console.log("Unsplash-API zurück:", fotos);
    if (fotos.length >= 3) {
      document.getElementById("img1").src = fotos[0] + `?rand=${Math.random()}`;
      document.getElementById("img2").src = fotos[1] + `?rand=${Math.random()}`;
      document.getElementById("img3").src = fotos[2] + `?rand=${Math.random()}`;
    } else {
      console.warn("Nicht genug Bilder gefunden für", summary.title);
    }

  } catch (err) {
    console.error("Fehler beim Laden der Inhalte:", err);
  }

  // 2.5 Button zurücksetzen nach 3 Sek.
  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("opacity-50", "cursor-not-allowed");
    button.textContent = originalText;
    wirdGeradeGeladen = false;
  }, 3000);
}

// -------------------------
// 3. PDF-Download (Flask-Redirect)
// -------------------------
document.getElementById("pdfDownload").addEventListener("click", () => {
  window.open("/download-pdf", "_blank");
});

// -------------------------
// 4. Pomodoro-Timer
// -------------------------
let phase = "Fokus", timerIntervall, zeit = 25 * 60;
function updatePomodoroAnzeige() {
  const m = Math.floor(zeit/60).toString().padStart(2,'0'),
        s = (zeit%60).toString().padStart(2,'0');
  document.getElementById("timer").textContent = `${m}:${s}`;
  document.getElementById("phase").textContent = phase;
}
function startPomodoro() {
  clearInterval(timerIntervall);
  timerIntervall = setInterval(() => {
    if (zeit>0) zeit--; 
    else {
      phase = phase==="Fokus"?"Pause":"Fokus";
      zeit = phase==="Fokus"?25*60:5*60;
    }
    updatePomodoroAnzeige();
  },1000);
}
function resetPomodoro() {
  clearInterval(timerIntervall);
  phase="Fokus"; zeit=25*60;
  updatePomodoroAnzeige();
}
updatePomodoroAnzeige();

// -------------------------
// 5. Dark/Light Mode Toggle
// -------------------------
const darkToggle = document.getElementById("toggleDark");
if (localStorage.getItem("darkMode")==="true") {
  document.documentElement.classList.add("dark");
  darkToggle.textContent="☀️ Light Mode";
}
darkToggle.addEventListener("click", ()=>{
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark);
  darkToggle.textContent = isDark?"☀️ Light Mode":"🌙 Dark Mode";
});

// -------------------------
// 6. Initial-Aufruf
// -------------------------
document.addEventListener("DOMContentLoaded", ladeInhalt);
