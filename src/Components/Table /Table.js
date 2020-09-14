import React from "react";
import "./Table.css";
import TableContent from "./TableContent/TableContent";
import OnRowSelectInfo from "../OnRowSelectInfo/OnRowSelectInfo";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,

      /* пагинация */
      currentPage: this.props.currentPage,
      pageSize: this.props.pageSize,

      /* сортировка */
      sortColumn: "",
      sort: "asc",
      directionSymbol: {
        symbol: "asc",
      },

      /* выбранная строка */
      row: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }


   /* выбранная строка */
  onRowSelect = (row) => {
    this.setState({ row });
  };

  /* сортировка */
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

/* пагинация */
  handleClick = (e) => {
    let newCurrentPage = Number(e.target.innerHTML);
    this.setState({ currentPage: newCurrentPage });
  };

  render() {
    const { data, currentPage, pageSize } = this.state;

    const indexOfLastData = currentPage * pageSize;
    const indexOfFirstData = indexOfLastData - pageSize;
    const currentData = data.slice(indexOfFirstData, indexOfLastData); //отображаем только 50 строк

    let numberOfPages = Math.ceil(
      this.props.totalRowsCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        <TableContent
          data={currentData}
          onSort={this.onSortHandler}
          sortSymbol={this.state.sort}
          sortField={this.state.sortColumn}
          onRowSelect={this.onRowSelect}
        />
        
        <div className="paginator">
          {numberOfPages > 1
            ? pages.map((n) => (
                <span
                  key={n}
                  className={
                    this.state.currentPage === n
                      ? "selectedPage"
                      : "notSelectedPage"
                  }
                  onClick={this.handleClick}
                >
                  {n}{" "}
                </span>
              ))
            : null}
        </div>
        {this.state.row ? <OnRowSelectInfo row={this.state.row} /> : null}
      </div>
    );
  }
}

export default Table;
