import React, { Component } from 'react';
import '../App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import EvaluationData from '../Data/EvaluationData'

class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        columnDefs : [{
        headerName: "Id", field: "id"
      }, {
        headerName: "Name", field: "name"
      }, {
        headerName: "Assignment", field: "assignment"
      }, {
        headerName: "Difficulty", field: "difficulty"
      }, {
        headerName: "Joy", field: "joy"
      }],
      rowData: EvaluationData
    }
}
    render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '600px' ,
        marginLeft: "20px"
    }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    )
  }
  }
export default Sheet;