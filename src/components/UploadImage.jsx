import axios from "axios";
import React from "react";
import toast from "react-hot-toast";


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
    <>
      <label
        htmlFor="test"
        className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center text-white justify-center cursor-pointer hover:bg-blue-300 transition-colors font-bold m-4"
      >
       Escolher arquivo
        <input
          id="test"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default UploadImage;
