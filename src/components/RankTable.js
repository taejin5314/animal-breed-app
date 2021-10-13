import React from 'react';
import { useTable } from 'react-table';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function RankTable({ columns, data }) {

  const table = useTable({
    columns,
    data
  });
  const { getTableProps, headerGroups, prepareRow, rows } = table;

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
        <Droppable droppableId={columns[1].Header} >
          {(provided, snapshot) => (
            <tbody ref={provided.innerRef} {...provided.droppableProps} >
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <Draggable
                    draggableId={row.original.breed}
                    key={row.original.breed}
                    index={row.index}
                  >
                    {(provided, snapshot) => (
                      <tr
                        {...row.getRowProps()}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
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
      </table>
    </>
  )
}

export default RankTable
