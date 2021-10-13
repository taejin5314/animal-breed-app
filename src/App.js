import { useSelector, useDispatch } from 'react-redux';
import useApplicationData from './hooks/useApplicationData';
import MainContent from './components/MainContent';

function App() {

  const { data, loading, error } = useApplicationData()

  const state = useSelector(state => ({
    breed1Total: state.breed1Total,
    breed1Rank: state.breed1Rank,
    breed2Total: state.breed2Total,
    breed2Rank: state.breed2Rank
  }))

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return null;

  return (
    <div className="App">
      <MainContent state={state} />
    </div>
  );
}

export default App;
