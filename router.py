from flask import Flask, url_for, redirect, render_template, request, Response, jsonify, json, request 
from flask_cors import CORS # comment out when on pythonanywhere
from pathlib import Path 
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}}) # comment out when on pythonanywhere
shoppingJSON = "[]";

@app.route("/cart", methods=["POST", "GET"]) 
def cart():
	print(request.method)

	if request.method == "GET":
		my_file = Path("cart.txt")
		shoppingJSON = "[]"
		if my_file.is_file():
			file = open("cart.txt", "r")
			shoppingJSON = file.read()
		print("~~~~~RETRIEVING~~~~~")
		print(shoppingJSON)
		return shoppingJSON

	if request.method == "POST":
		shoppingJSON = str(request.get_json())
		shoppingJSON = shoppingJSON.replace("'", "\"")
		my_file = Path("cart.txt")
		if my_file.is_file():
			os.remove("cart.txt")
		file = open("cart.txt", "w")
		file.write(shoppingJSON)
		print("~~~~~POSTING~~~~~")
		return ""


if __name__ == "__main__":
	app.run()