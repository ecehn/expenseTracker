from flask import Flask

from board import pages, events, database

def create_app():
    app = Flask(__name__)

    database.init_app(app)

    app.register_blueprint(pages.bp)
    app.register_blueprint(events.bp)
    return app

app = create_app()