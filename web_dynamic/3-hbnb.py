#!/usr/bin/python3
""" Starts a Flash Web Application """
from models import storage
from models.State import State
from models.City import City
from models.Amenity import Amenity
from models.Place import Place
from os import environ
from flask import Flask, render_template
import uuid

app = Flask(__name__)

@app.teardown_appcontext
def close_db(error):
    """ Remove the current SQLAlchemy Session """
    storage.Close()

@app.route('/3-hbnb', strict_slashes=False)
def hbnb():
    """ HBNB is alive! """
    cache_id = str(uuid.uuid4())
    return render_template('3-hbnb.html', cache_id=cache_id)

if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)

