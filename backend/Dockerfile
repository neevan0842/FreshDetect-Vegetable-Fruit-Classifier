# Use the TensorFlow GPU image
FROM tensorflow/tensorflow:2.17.0-gpu

# Set the working directory
WORKDIR /code

# upgrade pip
RUN python3 -m pip install --upgrade pip

# Copy requirements and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir --upgrade --no-deps -r requirements.txt

# Copy the Flask app code
COPY . .

# Expose the Flask default port
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
