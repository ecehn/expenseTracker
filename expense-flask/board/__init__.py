from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

from board import pages, events, expenses

def create_app():
    
    load_dotenv()

    app = Flask(__name__)
    
    CORS(app)

    app.secret_key = os.getenv('SECRET_KEY', 'supersecretkey')

    mongo_uri = os.getenv("MONGO_URI")
    client = MongoClient(mongo_uri)
    db = client['ExpenseTrackerDB']
    
    app.config['MONGO_CLIENT'] = client
    app.config['MONGO_DB'] = db


    app.register_blueprint(pages.bp)
    app.register_blueprint(events.bp)
    app.register_blueprint(expenses.bp)
    return app

app = create_app()