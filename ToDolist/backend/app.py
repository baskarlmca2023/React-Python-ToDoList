# python -m venv venv
# pip install Flask flask-cors pymongo
# pip install -r requirements.txt
# pip install Flask flask-cors pymongo
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from models import TodoModel
# import traceback  # Added for detailed error logging

# # Initialize Flask App
# app = Flask(__name__)
# CORS(app)  # Enable CORS for cross-origin requests

# # Initialize Todo Model
# todo_model = TodoModel()

# # Default Route
# @app.route('/')
# def home():
#     return jsonify({'message': 'Welcome to the To-Do API!'})

# # Get All Todos
# @app.route('/todos', methods=['GET'])
# def get_todos():
#     try:
#         todos = todo_model.get_all_todos()
#         return jsonify(todos), 200
#     except Exception as e:
#         traceback.print_exc()  # Print full traceback
#         return jsonify({'error': str(e)}), 500

# # Add a New Todo
# @app.route('/todos', methods=['POST'])
# def add_todo():
#     data = request.get_json()
#     if not data or 'title' not in data:
#         return jsonify({'error': 'Title is required!'}), 400
    
#     try:
#         todo_model.add_todo(data)
#         return jsonify({'msg': 'Todo added successfully!'}), 201
#     except Exception as e:
#         traceback.print_exc()  # Print full traceback
#         return jsonify({'error': str(e)}), 500

# # Delete a Todo by Title
# @app.route('/todos/<string:title>', methods=['DELETE'])
# def delete_todo(title):
#     try:
#         print(f"Attempting to delete todo with title: {title}")  # Debugging print

#         result = todo_model.delete_todo(title)
#         print(f"Delete result: {result.deleted_count}")  # Debugging print

#         if result.deleted_count == 0:
#             return jsonify({'error': f'Todo with title "{title}" not found!'}), 404

#         return jsonify({'msg': f'Todo "{title}" deleted successfully!'}), 200
#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)




from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import traceback  # Added for detailed error logging

# Initialize Flask App
app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# MongoDB Configuration
class Config:
    MONGO_URI = 'mongodb://localhost:27017/todo_db'

# Initialize MongoDB Connection
client = MongoClient(Config.MONGO_URI)
db = client.get_database()

class TodoModel:
    def __init__(self):
        self.collection = db['todos']

    def get_all_todos(self):
        return list(self.collection.find({}, {'_id': 0}))

    def add_todo(self, data):
        self.collection.insert_one(data)

    def update_todo(self, title, updated_data):
        return self.collection.update_one({'title': title}, {'$set': updated_data})

    def delete_todo(self, title):
        return self.collection.delete_one({'title': title})

# Initialize Todo Model
todo_model = TodoModel()

# Default Route
@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the To-Do API!'})

# Get All Todos
@app.route('/todos', methods=['GET'])
def get_todos():
    try:
        todos = todo_model.get_all_todos()
        return jsonify(todos), 200
    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

# Add a New Todo
@app.route('/todos', methods=['POST'])
def add_todo():
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({'error': 'Title is required!'}), 400
    
    try:
        todo_model.add_todo(data)
        return jsonify({'msg': 'Todo added successfully!'}), 201
    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

# Update a Todo by Title
@app.route('/todos/<string:title>', methods=['PUT'])
def update_todo(title):
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Updated data is required!'}), 400
    
    try:
        result = todo_model.update_todo(title, data)
        if result.modified_count == 0:
            return jsonify({'error': f'Todo with title "{title}" not found or no changes made!'}), 404
        return jsonify({'msg': f'Todo "{title}" updated successfully!'}), 200
    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

# Delete a Todo by Title
@app.route('/todos/<string:title>', methods=['DELETE'])
def delete_todo(title):
    try:
        result = todo_model.delete_todo(title)
        if result.deleted_count == 0:
            return jsonify({'error': f'Todo with title "{title}" not found!'}), 404
        return jsonify({'msg': f'Todo "{title}" deleted successfully!'}), 200
    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
