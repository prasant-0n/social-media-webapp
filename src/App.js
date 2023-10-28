import './App.css';
import Form from "./Form";
import Login from './Login';

function Toolbar(OnPlayMovie, OnUploadimg){
  return(
    <>
      <button onClick={OnPlayMovie}>Upload Movie</button>
      <button onClick={OnUploadimg}>Upload image</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      
      <Login/>
    </div>
  );
}

export default App;
