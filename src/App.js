import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToRank, setInitialRank } from './reducers'

import useApplicationData from './hooks/useApplicationData';

function App() {

  const { data, loading, error } = useApplicationData()

  const state = useSelector(state => ({
    breed1Total: state.breed1Total,
    breed1Rank: state.breed1Rank,
    breed2Total: state.breed2Total,
    breed2Rank: state.breed2Rank
  }))

  const dispatch = useDispatch();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return null;

  return (
    <div className="App">
      {JSON.stringify(state)}
      {console.log(data.message)}
      <button onClick={() => dispatch(addToRank())}></button>
    </div>
  );
}

export default App;
