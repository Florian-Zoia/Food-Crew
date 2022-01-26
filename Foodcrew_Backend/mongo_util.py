from pymongo import MongoClient 

client = MongoClient('mongodb://foodwars-db.com-software.de:27017/')

db = client['recipe']

collection = db['recipe']

document = {"test": "test"}

id = collection.insert_one(document).inserted_id

print("id")

print(id)
