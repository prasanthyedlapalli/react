from flask import Flask,jsonify,request,json
from flask_migrate import Migrate
from flask_cors import CORS
from db import db
app = Flask(__name__)
FLASK_DEBUG = 1
# CORS(app, resources = {r'/*': {'origin': 'http://localhost:3000/', 'supports_credentials': 'true'}})
CORS(app)

@app.route('/login' ,methods=['POST'])
def hello_world():
    args = request.form
    email = args.get('email')
    password = args.get('password')
    client = db.get_database()
    print(client.list_database_names())
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug = True)