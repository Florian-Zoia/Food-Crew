import os
import json
from bson.json_util import loads, dumps
import pymongo
from flask import Flask
from flask import request, jsonify
from bson.objectid import ObjectId

app = Flask(__name__)

client = pymongo.MongoClient('mongodb://foodwars-db.com-software.de:27017/')

db = client['recipe']

collection = db['recipe']

document = {"company": "abc One"}


@app.route("/test", methods=['GET'])
def get():
    get_item_by_id = collection.find_one({"_id": ObjectId("61aca9e32e287bdef525315b")})
    print(get_item_by_id)
    return get_item_by_id


@app.route('/insert', methods=['POST'])
def login():
    if request.method == 'POST':
        user = request.form['nm']
        juser = json.loads(user)
        collection.insert_one(juser).inserted_id
        return "{}".format(juser)


if __name__ == '__main__':
    app.run()

#ich brauche entweder eine wsdl oder eine openapi spezifikation um es mit Gravitee verbinden zu können damit wir die Abfragen
#über das Gateway laufen lassen können
