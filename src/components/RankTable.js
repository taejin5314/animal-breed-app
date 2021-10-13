import React from 'react';
import { useTable } from 'react-table';

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

    reorderData(source.index, destination.index);
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
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default RankTable
