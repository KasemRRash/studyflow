from flask import Flask, request, jsonify, render_template
import requests, os, random
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
UNSPLASH_KEY = os.getenv("UNSPLASH_KEY")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/youtube")
def youtube():
    query = request.args.get("query", "Python Programmierung")
    params = {
        "part": "snippet",
        "q": query,              # ggf. + " tutorial deutsch"
        "type": "video",
        "maxResults": 5,
        "videoEmbeddable": "true",
        "key": YOUTUBE_API_KEY
    }
    data = requests.get("https://www.googleapis.com/youtube/v3/search", params=params).json()

    # Debug: alles ausgeben
    print("\n=== YouTube RAW Response ===")
    print(data)
    print("=== Items ===", len(data.get("items", [])))
    for i, itm in enumerate(data.get("items", [])):
        kind = itm.get("id", {}).get("kind")
        vid  = itm.get("id", {}).get("videoId")
        title = itm.get("snippet", {}).get("title")
        print(f"  #{i} kind={kind} videoId={vid} title={title}")
    print("=============================\n")

    # dann deine Auswahl-Logik…
    items = data.get("items", [])
    video_id = ""
    for itm in items:
        if itm.get("id", {}).get("kind") == "youtube#video":
            vid = itm["id"].get("videoId","")
            if vid:
                video_id = vid
                break

    print("Gewählte videoId:", video_id)
    return jsonify({"videoId": video_id})




@app.route("/bilder")
def bilder():
    query = request.args.get("query", "Python")
    url = "https://api.unsplash.com/search/photos"
    params = {
        "query": query,
        "per_page": 3,
        "client_id": UNSPLASH_KEY
    }
    res = requests.get(url, params=params).json()
    results = res.get("results", [])
    bilder = [img["urls"]["regular"] for img in results]
    return jsonify({"bilder": bilder})

@app.route("/download-pdf")
def download_pdf():
    from flask import redirect
    public_url = "https://kasem-rashrash.com"  # öffentliche Seite
    api_key = os.getenv("HTML2PDF_API_KEY")
    
    pdf_url = f"https://api.html2pdf.app/v1/generate?url={public_url}&apiKey={api_key}&filename=studyflow.pdf"
    
    return redirect(pdf_url)



if __name__ == "__main__":
    app.run(debug=True)
