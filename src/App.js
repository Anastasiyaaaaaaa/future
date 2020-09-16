import React from "react";
import "./App.css";
import SelectionButtons from "./Components/SelectionButtons/SelectionButtons";
import Loading from "./Components/Loading/Loading";
import Filter from "./Components/Filter/Filter";
import Pagination from "./Components/Pagination/Pagination";
import OnRowSelectInfo from "./Components/OnRowSelectInfo/OnRowSelectInfo";
import Form from "./Components/Form/Form";
import Table from "./Components/Table/Table";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],

      /* ошибка при запросе на сервер */
      error: null,

      /* кнопки выбора набора данных*/
      isButtonSelected: false,

      /* индикатор загрузки */
      isLoading: false,

      /* пагинация */
      pageSize: 50,
      currentPage: 1,

      /* поиск */
      search: "",

      /* сортировка */
      sortColumn: "",
      sort: "asc",
      directionSymbol: {
        symbol: "asc",
      },

      /* выбранная строка */
      row: null,
    };
  }

  async fetchData(url) {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            isLoading: false,
            search: false,
            row: null,
          });
        },
        (error) => {
          this.setState({
            isLoading: true,
            error,
          });
        }
      );
  }

  /* фильтрация */
  searchHandler = (search) => this.setState({ search, currentPage: 1 });

  getFilteredData() {
    const { data, search } = this.state;
    const cloneData = data.concat();
    if (!search)  {
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

  SelectionButtonsHandler = (url) => {
    /* показываем индикатор загрузки
       и передаем url */
    this.setState({
      isButtonSelected: true,
      isLoading: true,
      error: false,
    });
    this.fetchData(url);
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

  /* выбранная строка */
  onRowSelect = (row) => {
    this.setState({ row });
  };

  /* пагинация */
  handleClick = (e) => {
    let newCurrentPage = Number(e.target.innerHTML);
    this.setState({ currentPage: newCurrentPage });
  };

  /* добавление строки */
  addedRow = (newRow) => {
    const data = this.state.data.concat();
    data.unshift(newRow);
    this.setState({ data });
  };

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
      <div className="App">
        <header className="App-header">
          <SelectionButtons onSelect={this.SelectionButtonsHandler} />
        </header>
        {this.state.isButtonSelected ? (
          this.state.error ? (
            <p> Произошла ошибка во время загрузки данных :( </p>
          ) : this.state.isLoading ? (
            <Loading />
          ) : (
            <div className="mainContent">
              <div className="topFunctions">
                <Filter onSearch={this.searchHandler} />
                <Form addRow={this.addedRow} />
              </div>
              {currentData.length === 0 ? (
               
                <div className="noSearchResults">
                  {" "}
                  Ничего не найдено. <br /> Введите новый текст для поиска или
                  удалите предыдущий :){" "}
                </div>
              ) : (
                <Table
                  data={currentData}
                  onSort={this.onSortHandler}
                  sortSymbol={this.state.sort}
                  sortField={this.state.sortColumn}
                  onRowSelect={this.onRowSelect}
                />
              )}

              <Pagination
                numberOfPages={numberOfPages}
                pages={pages}
                currentPage={currentPage}
                handleClick={this.handleClick}
              />

              {this.state.row ? (
                currentData.length !== 0 ? (
                  <OnRowSelectInfo row={this.state.row} />
                ) : null
              ) : null}
            </div>
          )
        ) : (
          <div className="startPage"></div>
        )}
      </div>
    );
  }
}

export default App;
