import React from "react";

function ImagePreview({ original, result }) {
  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-lg font-semibold text-white">Imagem Processada:</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <div>
          <p className="text-sm text-gray-400 mb-1">Original</p>
          <img src={original} alt="Original" className="max-w-xs rounded-md shadow-md" />
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-1">Resultado</p>
          <img src={result} alt="Resultado" className="max-w-xs rounded-md shadow-md border-2 border-blue-400" />
          
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
