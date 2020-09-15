import React from "react";
import "./App.css";
import SelectionButtons from "./Components/SelectionButtons/SelectionButtons";
import Loading from "./Components/Loading/Loading";
import Table from "./Components/MainContent/Table /Table";

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
            isLoading: false,
            data: result,
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

  render() {
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
              
            <Table
              data={this.state.data}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
            />
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
