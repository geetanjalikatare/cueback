import Main from "./components/Main";
import Login from "./components/login/Login";
import "./App.css";
import EmptyMessage from "./components/EmptyMessage";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#e6f3f4"}}>
      {/* <EmptyMessage/> */}
      {localStorage.getItem("token")?<Main />:<Login/>}
    </div>
  );
}
export default App;
