import React from 'react';
import './App.css';
import StudentData from './Data/StudentData'
import EvaluationData from './Data/EvaluationData'
import AssignmentsData from './Data/AssignmentsData'
import ChartAll from './Views/ChartAll'
import Students from './Components/Students'
import ChartDifficulty from './Views/ChartDifficulty'
import ChartJoy from './Views/ChartJoy'
import Footer from './Layout/Footer'
import Sheet from './Pages/Sheet'



class App extends React.Component {
constructor(){
  super()
  this.state = {
    students: StudentData,
    evaluations: EvaluationData,
    chartData: AssignmentsData,
    filter: "Both",
    text: "Assignments average score of all students",
    path: "/"
  }
}
  
    changeStudentChart = (event) => {
    const OneStudentDifficulty = EvaluationData
    .filter(student => student.name === event.target.name)
    console.log(OneStudentDifficulty)
    this.setState({
      chartData: OneStudentDifficulty,
      text: "Assignments score of " + event.target.name
    })
    this.setState({
      path: "/"+ event.target.name
    }) 
  }

  changeToAllChart = (event) => {
    this.setState({
      chartData: AssignmentsData,
      text: "Assignments average score of all students"
    })
  }
  changeHandler = e => {
    e.preventDefault();
    const nameFilter = e.target.value;
    console.log(nameFilter)
    this.setState({
      filter: nameFilter});
  }     

  render() {
    const dataAssignments = this.state.chartData.map(e => e.nameAssignment )

    let filter;
    if (this.state.filter === "Diff") {
      filter = <ChartDifficulty 
      chartData= {this.state.chartData}
      text= {this.state.text}
      chartDataX = {dataAssignments}       
      />
    } else if (this.state.filter === "Joy") {
      filter = <ChartJoy 
      chartData= {this.state.chartData}
      text= {this.state.text}
      chartDataX = {dataAssignments}       
      />
    } else if (this.state.filter === "Both") {
      filter = <ChartAll
      chartData= {this.state.chartData}
      text= {this.state.text}
      chartDataX = {dataAssignments}       
      />
    } else if (this.state.filter === "Sheet") {
      filter = <Sheet
      />
    }

    return (
    <div>
      <div className="App">
        
      </div>

        <div className="Header">
        <p><strong>Change to student:</strong></p>
        {this.state.students.map((student, index) => {
        return <Students 
          key={index}
          students= {student.name}
          click= {this.changeStudentChart}
          />})}
        </div>
        <div className="belowHeader">
        
        <span >
          <label className="Label"><strong>Change input:</strong></label>
          <select className= "btnFilter" onChange={this.changeHandler}>
          <option value="Both"></option>
          <option value="Diff">Difficulty average</option>
          <option value="Joy">Joy average</option>
          <option value="Both">Both averages</option>
          <option value="Sheet">Datasheet</option>
          </select>
          </span>
        
        <span className="">
            <button 
                className= "btnFilter"
                onClick={this.changeToAllChart}>
            All students
            </button>
        </span>
        </div>
        <div> 
        {filter}
       </div>

        <Footer />
      </div>
      )
  }
}
export default App;
