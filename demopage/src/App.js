import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("token")?<Main />:<Login/>}
    
     
    </div>
  );
}
export default App;
