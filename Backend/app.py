import pypyodbc as odbc
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# SQLSERVER Database Authentication
SERVER = "DESKTOP-E6PQ5FA"
DATABASE = "flaskElectron"
DRIVER = "SQL Server"

connection_string = f"DRIVER={{{DRIVER}}};SERVER={{{SERVER}}};DATABASE={{{DATABASE}}};Trust_Connection=yes"

# Set the connection string in app.config
app.config['SQLALCHEMY_DATABASE_URI'] = f"mssql+pyodbc:///?odbc_connect={connection_string}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#db = SQLAlchemy(app)

connect_odbc = odbc.connect(connection_string)
print(connect_odbc)


@app.route("/", methods=["GET"])
def get_articles():
    return jsonify({"Hello": "World"})


if __name__ == "__main__":
    app.run(debug=True)
