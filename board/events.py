from flask import (
    Blueprint,
    redirect,
    render_template,
    request,
    url_for,
    current_app,
    flash
)

from board.database import get_db

bp = Blueprint("posts", __name__)

@bp.route('/create', methods=['GET', 'POST'])
def create_event():
    if request.method == 'POST':
        event_name = request.form.get('message')
        
        if event_name:
            db = current_app.config['MONGO_DB']
            collection = db['events']  # Replace with your actual collection name
            collection.insert_one({'name': event_name})
            flash('Event created successfully!')
            return redirect(url_for('events.create_event'))
        else:
            flash('Event name is required.')
    
    return render_template('create_event.html')

@bp.route("/posts")
def posts():
    db = get_db()

    posts = db.execute(

        "SELECT message, created FROM post ORDER BY created DESC"

    ).fetchall()
    return render_template("events/viewEditEvent.html", posts=posts)