import os
import numpy as np

os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"
import tensorflow as tf

IMG_SIZE = (224, 224)
class_names = [
    "apple",
    "banana",
    "beetroot",
    "bell pepper",
    "cabbage",
    "capsicum",
    "carrot",
    "cauliflower",
    "chilli pepper",
    "corn",
    "cucumber",
    "eggplant",
    "garlic",
    "ginger",
    "grapes",
    "jalepeno",
    "kiwi",
    "lemon",
    "lettuce",
    "mango",
    "onion",
    "orange",
    "paprika",
    "pear",
    "peas",
    "pineapple",
    "pomegranate",
    "potato",
    "raddish",
    "soy beans",
    "spinach",
    "sweetcorn",
    "sweetpotato",
    "tomato",
    "turnip",
    "watermelon",
]
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}


def get_class_names():
    return class_names


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def load_model():
    model_path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "model_creation", "model.keras"
    )
    print(f"Model path: {model_path}")
    print("Loading model...")
    model = tf.keras.models.load_model(model_path)
    print("Model loaded")
    return model


def predict_output(img_path, model):
    img_path = os.path.join(os.getcwd(), "uploads", img_path)
    img = tf.keras.utils.load_img(img_path, target_size=IMG_SIZE)

    img_array = tf.keras.utils.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)

    prediction = model.predict(img_array)
    prediction_id = np.argmax(prediction[0])
    vegetable = class_names[prediction_id]
    return vegetable


def main():
    print(tf.__version__)
    load_model()


if __name__ == "__main__":
    main()
