import axios from "axios";
import React from "react";

function UploadImage({ setImage, setResult, setLoading }) {
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:3001/remove-bg",
        formData,
        {
          responseType: "blob",
        }
      );
      const blob = res.data;
      setResult(URL.createObjectURL(blob));
    } catch (err) {
      console.error("Erro ao remover fundo", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="block text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800"
    />
  );
}

export default UploadImage;
