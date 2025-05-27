import React from "react";
import UploadImage from "../components/UploadImage";
import ImagePreview from "../components/ImagePreview";

function Home() {
  const [image, setImage] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8 gap-6">
      <h1 className="text-4xl font-bold text-blue-400 text-center">
        Remova o fundo da sua imagem
      </h1>

      <UploadImage
        setImage={setImage}
        setResult={setResult}
        setLoading={setLoading}
      />

      {loading && (
        <div className="flex items-center gap-2 text-blue-300 font-medium">
          <span className="loader" />
          Removendo fundo da imagem...
        </div>
      )}

      {result && (
        <div className="mt-6 flex flex-col items-center gap-4">
         
          <ImagePreview original={image} result={result} />
          <a
            href={result}
            download="imagem-sem-fundo.png"
            className="download-btn"
          >
            Baixar imagem
          </a>
        </div>
      )}
    </main>
  );
}

export default Home;
