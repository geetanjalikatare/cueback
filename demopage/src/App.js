import Main from "./components/Main";
import Login from "./components/Login";
import Prompts from "./components/Prompts";
function App() {
  return (
    <div className="App">
      {localStorage.getItem("token")?<Main />:<Login/>}
      
    </div>
  );
}
export default App;
