from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index2.html")

@app.route("/bilder")
def bilder():
    query = request.args.get("query", "Python")
    url   = "https://api.openverse.engineering/v1/images"
    params = {
        "q": query,
        "page_size": 3
        # "license": "cc0|cc_by"  # entferne das erstmal oder benutze nur "cc0"
    }
    res = requests.get(url, params=params)
    data = res.json()
    print("🔍 Openverse-Response:", data)  # Logging im Terminal

    bilder = []
    for img in data.get("results", []):
        # Thumbnail zuerst, sonst die Original-URL
        link = img.get("thumbnail") or img.get("url")
        if link:
            bilder.append(link)

    return jsonify({"bilder": bilder})

if __name__ == "__main__":
    app.run(debug=True)
