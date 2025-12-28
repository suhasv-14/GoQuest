import json
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.cluster import KMeans
from geopy.distance import great_circle

# Load JSON data
with open('./places.json', 'r') as file:
    data = json.load(file)

# Extract data
places = data['places']
names = [place['name'] for place in places]
latitudes = [place['latitude'] for place in places]
longitudes = [place['longitude'] for place in places]

# Load pre-trained sentence transformer model from Hugging Face
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Get embeddings for place names
embeddings = model.encode(names)

# Perform K-Means clustering (e.g., 5 clusters)
num_clusters = 5
kmeans = KMeans(n_clusters=num_clusters)
kmeans.fit(embeddings)
cluster_labels = kmeans.labels_

# Add cluster labels to places
for i, place in enumerate(places):
    place['cluster'] = int(cluster_labels[i])

def get_nearby_places(lat, lon, max_distance):
    user_location = (lat, lon)
    nearby_places = []

    for place in places:
        place_location = (place['latitude'], place['longitude'])
        distance = great_circle(user_location, place_location).kilometers
        if distance <= max_distance:
            nearby_places.append({
                'name': place['name'],
                'latitude': place['latitude'],
                'longitude': place['longitude'],
                'cluster': place['cluster']
            })

    return nearby_places

def cluster_places_by_type(nearby_places):
    clusters = {}
    for place in nearby_places:
        cluster = place['cluster']
        if cluster not in clusters:
            clusters[cluster] = []
        clusters[cluster].append(place)
    return clusters
