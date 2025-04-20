import React, { useState } from "react";
import axios from "axios";

export default function ResizeImage() {
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [resizedImage, setResizedImage] = useState(null);

  const handleResize = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("width", width);
    formData.append("height", height);

    const res = await axios.post("http://localhost:8000/resize-image", formData, {
      responseType: "blob",
    });
    const url = URL.createObjectURL(res.data);
    setResizedImage(url);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-primary">Resize Image</h2>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
      <div className="flex gap-4 my-4">
        <input
          type="number"
          value={width}
          onChange={e => setWidth(e.target.value)}
          placeholder="Width"
          className="border px-2 py-1 rounded"
        />
        <input
          type="number"
          value={height}
          onChange={e => setHeight(e.target.value)}
          placeholder="Height"
          className="border px-2 py-1 rounded"
        />
      </div>
      <button
        onClick={handleResize}
        className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
      >
        Resize
      </button>

      {resizedImage && (
        <div className="mt-6">
          <h4 className="font-medium mb-2">Result:</h4>
          <img src={resizedImage} alt="Resized" className="max-w-full border rounded" />
          <a
            href={resizedImage}
            download="resized-image.png"
            className="block mt-2 text-blue-600 underline"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  );
}
