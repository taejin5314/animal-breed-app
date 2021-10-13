// package
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// custom hook
import useApplicationData from './hooks/useApplicationData';

// components
import MainContent from './components/MainContent';
import ExportButton from './components/ExportButton';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: relative;
`;

const Header = styled.div`
  margin: 50px 0;
  font-weight: 700;
  font-size: 2rem;
`;

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
    <Container>
      <HeaderContainer>
        <Header>Breed Rank</Header>
        <ExportButton state={state} />
      </HeaderContainer>
      <MainContent state={state} />
    </Container>
  );
}

export default App;
