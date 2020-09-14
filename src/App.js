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
      totalRowsCount: 0,
      pageSize: 50,
      currentPage: 1,

    };
  }

  async fetchData(url) {
    /*делаем запрос*/
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoading: false,
      data,
      totalRowsCount: data.length
    });
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
