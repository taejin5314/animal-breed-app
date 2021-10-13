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
    margin: 100px;

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

  const handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    dispatch(dragAndDrop({ startIndex: source.index, startColumn: source.droppableId, endIndex: destination.index, endColumn: destination.droppableId }));

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
