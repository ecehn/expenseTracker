from flask import Flask

from board import pages


app = Flask(__name__)

app.register_blueprint(pages.bp)
#return app