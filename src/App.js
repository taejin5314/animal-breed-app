import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToRank } from './reducers'

import useApplicationData from './hooks/useApplicationData';

function App() {

  const { data } = useApplicationData()

  const state = useSelector(state => ({
    breed1Total: state.breed1Total,
    breed1Rank: state.breed1Rank,
    breed2Total: state.breed2Total,
    breed2Rank: state.breed2Rank
  }))

  const dispatch = useDispatch();

  return (
    <div className="App">
      {JSON.stringify(state)}
      {console.log(data.message)}
      <button onClick={() => dispatch(addToRank())}></button>
    </div>
  );
}

export default App;
