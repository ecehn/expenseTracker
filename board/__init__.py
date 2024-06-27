from flask import Flask
from pymongo import MongoClient

from board import pages, events, database

def create_app():
    app = Flask(__name__)

    mongo_uri = "mongodb+srv://echen05:pAX1KRmj2rZIT3nu@cluster0.pebmlvv.mongodb.net/?appName=Cluster0"
    client = MongoClient(mongo_uri)
    db = client['ExpenseTrackerDB']
    
    app.config['MONGO_CLIENT'] = client
    app.config['MONGO_DB'] = db


    app.register_blueprint(pages.bp)
    app.register_blueprint(events.bp)
    return app

app = create_app()


