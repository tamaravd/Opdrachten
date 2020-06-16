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
        headerName: "Id", field: "id", sortable: true, filter: true
      }, {
        headerName: "Name", field: "name", sortable: true, filter: true
      }, {
        headerName: "Assignment", field: "nameAssignment", sortable: true, filter: true
      }, {
        headerName: "Difficulty", field: "difficulty", sortable: true, filter: true
      }, {
        headerName: "Joy", field: "joy", sortable: true, filter: true
      }],
      rowData: EvaluationData, paginationAutoPageSize:true
    }
}
    render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{
        height: '20000px',
        width: '1000px' ,
        marginLeft: "20px"
    }}
      >
        <h1>Klik op de veldnamen om te sorteren:</h1>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          >
        </AgGridReact>
      </div>
    )
  }
  }
export default Sheet;