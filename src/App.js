import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToRank } from './reducers'

function App() {

  const state = useSelector(state => ({
    breed1Total: state.breed1Total
  }))

  const dispatch = useDispatch();

  return (
    <div className="App">
      Animal breed rank
      {state.breed1Total}
      <button onClick={() => dispatch(addToRank())}></button>
    </div>
  );
}

export default App;
