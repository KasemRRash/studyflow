function loadKnowledge() {
    fetch('/api/knowledge')
        .then(response => response.text())
        .then(data => {
            document.getElementById('knowledge-container').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('knowledge-container').innerHTML = "Fehler beim Laden: " + error;
        });
}

window.onload = loadKnowledge;
