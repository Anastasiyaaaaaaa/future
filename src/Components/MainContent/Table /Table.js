import React from "react";
import "./Table.css";
import TableContent from "./TableContent/TableContent";
import OnRowSelectInfo from "./OnRowSelectInfo/OnRowSelectInfo";
import TableFilter from "./TableFilter/TableFilter";
import AddTableRow from "./AddTableRow/AddTableRow";

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

      /* поиск */
      search: "",
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

  /* фильтрация */
  searchHandler = (search) => this.setState({ search, currentPage: 1 });
  getFilteredData() {
    const { data, search } = this.state;
    const cloneData = data.concat();
    if (!search) {
      return cloneData;
    }
    return cloneData.filter((item) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  render() {
    const { currentPage, pageSize } = this.state;

    const indexOfLastData = currentPage * pageSize;
    const indexOfFirstData = indexOfLastData - pageSize;
    const filteredData = this.getFilteredData();

    let numberOfPages = Math.ceil(filteredData.length / pageSize);

    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData); //отображаем только 50 строк

    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className="topFunctions">
          <TableFilter onSearch={this.searchHandler} />
          
          <AddTableRow data={this.state.data}/>
        </div>

        {currentData.length === 0 ? (
          <div className="noSearchResults">
            {" "}
            Ничего не найдено. <br /> Введите новый текст для поиска или удалите предыдущий :){" "}
          </div>
        ) : (
          <TableContent
            data={currentData}
            onSort={this.onSortHandler}
            sortSymbol={this.state.sort}
            sortField={this.state.sortColumn}
            onRowSelect={this.onRowSelect}
          />
        )}

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
        {this.state.row ? (
          currentData.length !== 0 ? (
            <OnRowSelectInfo row={this.state.row} />
          ) : null
        ) : null}
      </div>
    );
  }
}

export default Table;
