import Main from "./components/Main";
import Login from "./components/login/Login";
import Like from "./components/Like"

function App() {
  return (
    <div className="App">

      {localStorage.getItem("token")?<Main />:<Login/>}
      
    </div>
  );
}
export default App;
