import React, { useState, useMemo } from 'react'
import styled from 'styled-components';
import makeData from '../helpers/makeData'
import RankTable from './RankTable'
import { useDispatch } from 'react-redux';
import { dragAndDrop } from '../reducers';
import { DragDropContext } from 'react-beautiful-dnd';

const Styles = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  table {
    border-spacing: 0;
    border: 1px solid black;
    margin: 0 100px;
    height: 100%;
    width: 250px;

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
      text-align: center;
      width: 40px;

      :last-child {
        border-right: 0;
        width: 210px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    table {
      margin-bottom: 50px;
    }
  }
`;

// MainContent contains two tables(breed 1 rank, breed 2 rank)
function MainContent({ state }) {
  const dispatch = useDispatch();

  const columnsOne = useMemo(() =>
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
  const columnsTwo = useMemo(() =>
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
  const [dataOne, setDataOne] = useState(makeData(state.breed1Rank))
  const [dataTwo, setDataTwo] = useState(makeData(state.breed2Rank))

  // execute when drag and drop is over
  const handleDragEnd = result => {
    const { source, destination } = result;

    // if user drop in not droppable area
    if (!destination) {
      return;
    }

    const startIndex = source.index;
    const startColumn = source.droppableId;
    const endIndex = destination.index;
    const endColumn = destination.droppableId;

    // each table needs at least one row and maximum 19 rows
    if (startColumn === 'Breed 1' && startColumn !== endColumn) {
      if (Object.keys(state.breed1Rank).length === 1) {
        alert("Woof Invalid Action Woof");
        return;
      }
    } else if (startColumn === 'Breed 2' && startColumn !== endColumn) {
      if (Object.keys(state.breed2Rank).length === 1) {
        alert("Woof Invalid Action Woof");
        return;
      }
    }
    dispatch(dragAndDrop({ startIndex, startColumn, endIndex, endColumn }))

    setDataOne(makeData(state.breed1Rank));
    setDataTwo(makeData(state.breed2Rank));
  }

  return (
    <Styles>
      <DragDropContext onDragEnd={handleDragEnd}>
        <RankTable columns={columnsOne} data={dataOne} />
        <RankTable columns={columnsTwo} data={dataTwo} />
      </DragDropContext>
    </Styles>
  )
}

export default MainContent
