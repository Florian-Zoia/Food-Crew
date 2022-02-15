from pymongo import MongoClient
import pymongo
from bson.objectid import ObjectId

client = MongoClient('mongodb://foodwars-db.com-software.de:27017/')

db = client['recipe']

collection = db['recipe']

document = {"dibby": "test"}

id = collection.insert_one(document).inserted_id

print("id")

print(id)
