import React from "react";
import "./MainContent.css";
import Table from "../Table /Table";

class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContent">
       <Table  data={this.props.data}/>
      </div>
    );
  }
}

export default MainContent;
