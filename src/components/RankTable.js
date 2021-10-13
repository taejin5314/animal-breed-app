import React from 'react';
import { useTable } from 'react-table';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function RankTable({ columns, data, updateData, reorderData }) {
  const table = useTable({
    columns,
    data,
    updateData,
    reorderData
  });
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = table;

  const handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    reorderData({ startIndex: source.index, startColumn: source.droppableId, endIndex: destination.index, endColumn: destination.droppableId });
  }

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={columns[1].Header} >
            {(provided, snapshot) => (
              <tbody ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <Draggable
                      draggableId={row.original.rank.toString()}
                      key={row.original.rank}
                      index={row.index}
                    >
                      {(provided, snapshot) => (
                        <tr
                          {...row.getRowProps()}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          isDragging={snapshot.isDragging}
                        >
                          {row.cells.map(cell => (
                            <td {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          ))}
                        </tr>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      </table>
    </>
  )
}

export default RankTable
