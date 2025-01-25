from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask Backend!"

@app.route('/api/data', methods=['POST'])
def process_data():
    # Access JSON data from the request
    data = request.json
    name = data.get('name', 'Guest')
    return jsonify({"message": f"Hello, {name}!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
