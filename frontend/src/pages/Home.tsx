import React from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import Form from "react-bootstrap/Form";
import api from "../api";

const Home = () => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [spin, setSpin] = useState<boolean>(false);

  const formData = new FormData();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setPreviewURL(URL.createObjectURL(file));
      formData.set("file", file);
      setSpin(true);
      setPrediction(null);
      try {
        const response = await api.post("/predict", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 200) {
          setPrediction(response.data.prediction);
        } else {
          console.log("Failed to fetch prediction");
          setPreviewURL(null);
          setPrediction("Failed to fetch prediction");
        }
      } catch (error) {
        console.log(error);
        setPreviewURL(null);
        setPrediction("Failed to fetch prediction");
      }
      setSpin(false);
    }
  };

  return (
    <div className="container my-4 py-3">
      <h2 className="text-center">Image Upload and Prediction</h2>
      <Form.Group
        controlId="formFile"
        className="my-4"
        onChange={handleImageChange}
      >
        <Form.Label>Input the image file to predict</Form.Label>
        <Form.Control type="file" accept=".jpeg,.jpg,.png" />
      </Form.Group>
      <div className="text-center my-4">
        {previewURL && (
          <img src={previewURL} alt="Preview" className="img-fluid" />
        )}
      </div>
      {spin && (
        <div className="text-center">
          <Spinner />
        </div>
      )}
      {prediction && (
        <div className="text-center my-4">
          <h4 className="font-weight-bold">Prediction: {prediction}</h4>
        </div>
      )}
    </div>
  );
};

export default Home;
