from flask import (
    Blueprint,
    redirect,
    render_template,
    request,
    url_for,
    current_app,
    flash
)

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
            #return redirect(url_for('events.create_event'))
        else:
            flash('Event name is required.')
    
    return render_template('events/createEvent.html')

@bp.route('/list')
def list_events():
    db = current_app.config['MONGO_DB']
    collection = db['events']  # Replace with your actual collection name
    events = list(collection.find())
    for event in events:
        event['_id'] = str(event['_id'])  # Convert ObjectId to string for JSON serialization
    return render_template('events/viewEditEvent.html', events=events)