import React from "react";
import "./App.css";
import SelectionButtons from "./Components/SelectionButtons/SelectionButtons";
import MainContent from "./Components/MainContent/MainContent";
import Loading from "./Components/Loading/Loading";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isButtonSelected: false,
      data: [],
      isLoading: false,
      error: null,
      totalRowsCount: 0,
      pageSize: 50,
      currentPage: 1,
    };
  }

  async fetchData(url) {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            data: result,
            totalRowsCount: result.length,
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
    });
    this.fetchData(url);
  };

  render() {
    if (this.state.error) {
      return <p> Произошла ошибка во время загрузки данных :(  </p>;
    } else
      return (
        <div className="App">
          <header className="App-header">
            <SelectionButtons onSelect={this.SelectionButtonsHandler} />
          </header>
          {this.state.isButtonSelected ? (
            this.state.isLoading ? (
              <Loading />
            ) : (
              <MainContent
                data={this.state.data}
                totalRowsCount={this.state.totalRowsCount}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
              />
            )
          ) : (
            <div className="startPage"></div>
          )}
        </div>
      );
  }
}

export default App;
