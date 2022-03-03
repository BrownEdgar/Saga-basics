import { useSelector, useDispatch } from "react-redux"
import './App.css';

function App() {
	const state = useSelector(state => state)
	const dispatch = useDispatch()
	console.log( state );
  return (
    <div className="App">
		  <h1>React Saga</h1>
    </div>
  );
}

export default App;
