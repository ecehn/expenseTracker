from flask import (
    Blueprint,
    redirect,
    render_template,
    request,
    url_for,
    current_app,
    flash, 
    jsonify
)

bp = Blueprint("posts", __name__)

@bp.route('/create', methods=['GET', 'POST'])
def create_event():
    if request.method == 'POST':
        event_name = request.form.get('message')
        
        if event_name:
            db = current_app.config['MONGO_DB']
            collection = db['test']  
            collection.insert_one({'name': event_name})
            flash('Event created successfully!')
        else:
            flash('Event name is required.')
    
    return render_template('events/createEvent.html')

@bp.route('/viewdd', methods=['GET'])
def view_events():
    db = current_app.config['MONGO_DB']
    collection = db['test']
    events = list(collection.find())
    for event in events:
        event['_id'] = str(event['_id'])
    return render_template('events/viewEditEvent.html', events=events)

@bp.route('/api/events', methods=['GET'])
def api_list_events():
    db = current_app.config['MONGO_DB']
    collection = db['test']
    events = list(collection.find())
    for event in events:
        event['_id'] = str(event['_id'])
    print(events)  # Debugging print statement
    return jsonify(events)