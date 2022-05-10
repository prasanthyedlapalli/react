from flask import Flask,jsonify,request,json
from flask_migrate import Migrate
from flask_cors import CORS
from db import db
import hashlib
app = Flask(__name__)
FLASK_DEBUG = 1
# CORS(app, resources = {r'/*': {'origin': 'http://localhost:3000/', 'supports_credentials': 'true'}})
CORS(app)

@app.route('/login' ,methods=['POST'])
def hello_world():
    args = request.form
    email = args.get('email')
    password = args.get('password')
    hash_sha3_512 = hashlib.new("sha3_512", password.encode())
    print(hash_sha3_512.hexdigest())
    client = db.get_database()
    database = client['Users']
    collection = database['Id']
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug = True)