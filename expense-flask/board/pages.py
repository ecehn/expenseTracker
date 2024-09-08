from flask import Blueprint, render_template

bp = Blueprint("pages", __name__)

@bp.route("/")
def dashboard():
    return render_template("pages/dashboard.html")

@bp.route("/create")
def createEvent():
    return render_template("events/createEvent.html")

@bp.route("/view")
def viewEvent():
    return render_template("events/viewEditEvent.html")

@bp.route("/account")
def userAccount():
    return render_template("pages/userAccount.html")

@bp.route("/createExpense")
def createExpense():
    return render_template("events/createEvent.html")
