import React from "react";
import TableContent from "./TableContent/TableContent"; 
import OnRowSelectInfo from "../OnRowSelectInfo/OnRowSelectInfo";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      sortColumn: "",
      sort: "asc",
      directionSymbol: {
        symbol: "asc",
      },
      row: null,
    };
  }

  onRowSelect = (row) => {
    this.setState({ row });
  };

  onSortHandler = (sortColumn) => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === "asc" ? "desc" : "asc";

    this.setState({
      data: cloneData.sort((a, b) => {
        const asc = sortType === "asc";

        if (a[sortColumn] < b[sortColumn]) {
          return asc ? -1 : 1;
        } else if (a[sortColumn] > b[sortColumn]) {
          return asc ? 1 : -1;
        } else {
          return 0;
        }
      }),
      directionSymbol: {
        [sortColumn]:
          this.state.directionSymbol[sortColumn] === "asc" ? "desc" : "asc",
      },

      sortColumn,
      sort: sortType,
    });
  };

  render() {
    return (
      <div>
        <TableContent
          data={this.state.data}
          onSort={this.onSortHandler}
          sortSymbol={this.state.sort}
          sortField={this.state.sortColumn}
          onRowSelect={this.onRowSelect}
        />

        {this.state.row ? <OnRowSelectInfo row={this.state.row} /> : null}
      </div>
    );
  }
}

export default Table;
