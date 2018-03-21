from flask import Flask, url_for, redirect, render_template, request, Response, jsonify, json, request 
from flask_cors import CORS
import sys

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
shoppingMap = ""
# decorator--way to wrap up an existing python function and modify its behavior, using it here to route a url to a return value of a function
@app.route("/save", methods=['POST']) # when the url /getnum is called, I'm going to call function getnum() below
def save(): # can be called anything
	shoppingMap = str(request.get_json()) # request is an object, the body
	return ""

@app.route("/retrieve", methods=['GET'])
def retrieve():
	return shoppingMap



if __name__ == "__main__":
	app.run()