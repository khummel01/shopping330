from flask import Flask, url_for, redirect, render_template, request, Response, jsonify, json

app = Flask(__name__)

# decorator--way to wrap up an existing python function and modify its behavior, using it here to route a url to a return value of a function
@app.route("/index") # when the url /getnum is called, I'm going to call function getnum() below
def index(): # can be called anything
	return render_template("index.html")

if __name__ == "__main__":
	app.run()






# sudo pip install flask