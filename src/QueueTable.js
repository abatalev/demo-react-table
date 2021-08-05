import React from "react";
import { useTable } from "react-table";
import axios from "axios";

function QueueTable({ data, columns }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function getColumnsX() {
  return [
    {
      Header: "Info",
      columns: [
        {
          Header: "Queue Name",
          accessor: "queueName",
        },
        {
          Header: "Label",
          accessor: "label",
        },
      ],
    },
  ];
}

class LoadedQueueTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
    this.tick();
  }

  tick() {
    const ts = new Date().getTime();
    axios.get(`/api/queues?_=` + ts).then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return <QueueTable columns={getColumnsX()} data={this.state.data} />;
  }
}

export default LoadedQueueTable;
