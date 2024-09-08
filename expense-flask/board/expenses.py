from flask import (
    Blueprint,
    render_template,
    request,
    current_app,
    flash, 
    jsonify
)

bp = Blueprint("expenses", __name__)

@bp.route('/createExpenses', methods=['GET', 'POST'])
def create_expense():
    if request.method == 'POST':
        data = request.get_json()
        
        # Extract fields from the data
        item = data.get('item')
        notes = data.get('notes')
        date = data.get('date')
        amount = data.get('amount')
        paid_by = data.get('paidBy')  # Assuming this is a list/array of people who paid

        if item and amount and paid_by:
            # Get the MongoDB database and collection
            db = current_app.config['MONGO_DB']
            collection = db['expenses']  # Assuming you have an 'expenses' collection

            collection.insert_one({
                'item': item,
                'notes': notes,
                'date': date,
                'amount': amount,
                'paidBy': paid_by
            })

            flash('Expense created successfully!')
        else:
            flash('Required fields are missing.')
        return data
    return render_template('expenses/createExpense.html')


@bp.route('/api/expenses', methods=['GET'])
def api_list_expense():
    db = current_app.config['MONGO_DB']
    collection = db['expenses']
    events = list(collection.find())
    for event in events:
        event['_id'] = str(event['_id'])
    response = jsonify(events)
    response.headers['Cache-Control'] = 'no-store'
    return response
