import Home from "./Component/Home";
import './App.css';
import Chatbox from "./Component/Chatbox";
import MyFunctionProvider from "./Context/Createcontext";
function App() {
  return (
    <MyFunctionProvider>
    <div className="App">
      <Home/>
      
    </div>
    </MyFunctionProvider>
  );
}

export default App;
