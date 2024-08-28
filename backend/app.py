from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import utils
import os

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploads")
model = utils.load_model()


@app.route("/")
def home():
    result = {"message": "Hello, Flask from home!"}
    return jsonify(result), 200


@app.route("/class_names")
def class_names():
    class_names = utils.get_class_names()
    return jsonify({"class_names": class_names}), 200


@app.route("/predict", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if file and utils.allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        utils.save_file(
            upload_directory=UPLOAD_FOLDER, new_file=file, secured_filename=filename
        )

        # Call the prediction function
        prediction = utils.predict_output(file_path, model)

        # Return the prediction result
        return jsonify({"prediction": prediction}), 200

    return jsonify({"error": "Invalid file type"}), 400


if __name__ == "__main__":
    app.run(debug=True)
