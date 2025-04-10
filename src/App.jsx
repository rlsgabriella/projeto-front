import axios from "axios";
import "./App.css";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

function App() {
  api.get("/usuarios").then((res) => {
    console.log(res)
  })
  return (
    <div>
      <h1>Usuários</h1>
    </div>
  );
}

export default App;
