import React from 'react'
import styled from 'styled-components';
import makeData from '../helpers/makeData'
import RankTable from './RankTable'

const Styles = styled.div`
  padding: 1rem;
  display: flex;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function MainContent({ state }) {
  const columnsOne = React.useMemo(() =>
    [
      {
        Header: "Rank",
        accessor: 'rank'
      },
      {
        Header: 'Breed 1',
        accessor: 'breed'
      }
    ]
  )
  const columnsTwo = React.useMemo(() =>
    [
      {
        Header: "Rank",
        accessor: 'rank'
      },
      {
        Header: 'Breed 2',
        accessor: 'breed'
      }
    ],
    []
  )

  const dataOne = React.useMemo(() => makeData(state.breed1Rank), [])
  const dataTwo = React.useMemo(() => makeData(state.breed2Rank), [])

  return (
    <Styles>
      <RankTable columns={columnsOne} data={dataOne} />
      <RankTable columns={columnsTwo} data={dataTwo} />
    </Styles>
  )
}

export default MainContent
