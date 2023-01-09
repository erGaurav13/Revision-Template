 
import './App.css';
import { useSelector } from 'react-redux';
 
function App() {
const state=useSelector((store)=>store)
console.log(state)
  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
