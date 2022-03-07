import os
import json
import pymongo
from flask import Flask
from flask import request, jsonify, session
from bson import json_util

app = Flask(__name__)
app.secret_key = '3be866fd0a41b69ae727f31b28b3c337fb3a640b1957e30d59450d279431a834' 

#client = pymongo.MongoClient('mongodb://192.168.16.2:27017/')
client = pymongo.MongoClient('foodwars-db.com-software.de')

db = client['recipe']

collection = db['recipe']
profile_collection = db['profiles']

document = {"company": "abc One"}


@app.route("/test/<id1>/<id>", methods=['GET'])
def get(id1, id):
    get_item_by_id = collection.find({"{}".format(id1): "{}".format(id)},{"_id": 0, "zutaten": 1})
    list_cur = list(get_item_by_id)
    json_data = json_util.dumps(list_cur)
    return json_data


@app.route('/insert', methods=['POST'])
def insert():
    if request.method == 'POST':
        recipe = request.form['nm']
        jrecipe = json.loads(recipe)
        collection.insert_one(jrecipe).inserted_id
        return "{}".format(jrecipe)


@app.route('/get_all', methods=['GET'])
def get_all():
    documents_in_db = collection.find()
    response = []
    for document_in_db in documents_in_db:
        document_in_db['_id'] = str(document_in_db['_id'])
        response.append(document_in_db)
    return json.dumps(response)


@app.route("/get_by_id/<id1>/<id>", methods=['GET'])
def get_by_id(id1, id):
    response = []
    get_item_by_id = collection.find({"{}".format(id1): "{}".format(id)})
    for document_by_id in get_item_by_id:
        document_by_id['_id'] = str(document_by_id['_id'])
        response.append(document_by_id)
    return json.dumps(response)


@app.route("/create_profile", methods=['POST'])
def create_profile():
    if request.method == 'POST':
        user = request.form['profile']
        juser = json.loads(user)
        profile_collection.insert_one(juser).inserted_id
        return "{}".format(juser)


if __name__ == '__main__':
    app.run()

#ich brauche entweder eine wsdl oder eine openapi spezifikation um es mit Gravitee verbinden zu können damit wir die Abfragen
#über das Gateway laufen lassen können
