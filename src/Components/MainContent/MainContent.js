import React from "react";
import "./MainContent.css";
import Table from "./Table /Table";

class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <Table
          data={this.props.data}
          totalRowsCount={this.props.totalRowsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  }
}

export default MainContent;
