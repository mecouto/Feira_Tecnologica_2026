from flask import Flask, jsonify
from flask_cors import CORS
from routes import routes

app = Flask(__name__)

CORS(app)

app.register_blueprint(routes, url_prefix="/api")

@app.route("/")
def inicio():
    return jsonify({
        "mensagem": "API de Cadastro de Pontos de Apoio funcionando!"
    })

if __name__ == "__main__":
    app.run(host="localhost", port=3000, debug=True)