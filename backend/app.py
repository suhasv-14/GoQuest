from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins; adjust if necessary

@app.route('/api/update-location', methods=['POST'])
def update_location():
    data = request.get_json()
    latitude = data.get('latitude')
    longitude = data.get('longitude')

    if latitude is None or longitude is None:
        return jsonify({"error": "Latitude and Longitude are required"}), 400

    try:
        latitude = float(latitude)
        longitude = float(longitude)
    except ValueError:
        return jsonify({"error": "Invalid Latitude or Longitude value"}), 400

    # Process the location data here

    return jsonify({"status": "success"}), 200

@app.route('/api/nearby-places', methods=['GET'])
def get_nearby_places_api():
    lat_str = request.args.get('lat')
    lon_str = request.args.get('lon')
    distance_str = request.args.get('distance', '5')  # default to 5 km

    if lat_str is None or lon_str is None:
        return jsonify({"error": "Latitude and Longitude are required"}), 400

    try:
        lat = float(lat_str)
        lon = float(lon_str)
        max_distance = float(distance_str)
    except ValueError:
        return jsonify({"error": "Invalid Latitude, Longitude or Distance value"}), 400

    # Mock data for demonstration; replace with actual logic
    nearby_places = [
        {"id": 1, "name": "Place A", "lat": lat + 0.01, "lon": lon + 0.01, "distance": 10},
        {"id": 2, "name": "Place B", "lat": lat + 0.02, "lon": lon + 0.02, "distance": 15}
    ]

    return jsonify(nearby_places)

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
