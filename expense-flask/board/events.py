from flask import (
    Blueprint,
    render_template,
    request,
    current_app,
    flash, 
    jsonify
)

bp = Blueprint("events", __name__)

@bp.route('/create', methods=['GET', 'POST'])
def create_event():
    if request.method == 'POST':
        data = request.get_json()
        event_name = data.get('name')
        
        if event_name:
            db = current_app.config['MONGO_DB']
            collection = db['test']  
            collection.insert_one({'name': event_name})
            flash('Event created successfully!')
        else:
            flash('Event name is required.')
        return data
    
    return render_template('events/createEvent.html')

@bp.route('/view', methods=['GET'])
def view_events():
    try:
        print("Accessing list_events route...")
        db = current_app.config['MONGO_DB']
        collection = db['test']
        events = list(collection.find())
        for event in events:
            event['_id'] = str(event['_id'])
        events_json = jsonify(event)
        return render_template('events/viewEditEvent.html', events_json=events_json)
    except ValueError:
        print(ValueError)

@bp.route('/api/events', methods=['GET'])
def api_list_events():
    db = current_app.config['MONGO_DB']
    collection = db['test']
    events = list(collection.find())
    for event in events:
        event['_id'] = str(event['_id'])
    response = jsonify(events)
    response.headers['Cache-Control'] = 'no-store'
    return response
