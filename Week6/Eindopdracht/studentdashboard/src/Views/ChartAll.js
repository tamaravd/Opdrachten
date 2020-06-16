import React from 'react'
import {VictoryBar, VictoryChart,  VictoryAxis, VictoryLegend, VictoryGroup, VictoryLabel} from 'victory'

function ChartAll (props) {

return(
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <VictoryChart  width={800} padding={{ left: 40, top: 50, right: 10, bottom: 50 }}>
        <VictoryAxis
            label= "assignments"
            style={{ 
              tickLabels:  {angle: -90, fontSize: 6, padding: 15, width: 800},
              axisLabel: {fontSize: 12, padding: 30},
            }} 
            tickValues={props.chartDataX}
            tickFormat={props.chartDataX}
        /> 
        <VictoryAxis dependentAxis
            label= "rating"
            style={{ tickLabels: { fontSize: 6, },
            axisLabel: {fontSize: 12, padding: 20}, }}
            tickValues={[1,2,3,4,5]}
        /> 
        <VictoryLabel 
          x={100} y={25} 
          text= {props.text}
        />
        <VictoryLegend 
            x={400} y={10}
            style={{ border: { stroke: "black" }}}
            orientation="horizontal"
                data={[ {name: "difficulty", symbol: { fill: "#EA5B29"}},
                {name: "joy", symbol: {fill: "orange"}}]}  
        />  
        <VictoryGroup
          colorScale={"warm"}
          offset= {6}>
        <VictoryBar
            className={(props.filter === "") ? "" : "ChartBarOne" }
            data={props.chartData}  
            barWidth={3}
            x="nameAssignment"
            y="difficulty"
            alignment= "start"
            color= {"#EA5B29"}
            padding={2}
        />
        <VictoryBar
    className={(props.filter === "") ? "" : "ChartBarTwo" }
    data={props.chartData} 
    barWidth={3}
    x="nameAssignment"
    y="joy"
    alignment= "end"
    color= {"orange"}
    style={{width: 10}}
        />
        
        </VictoryGroup>
        </VictoryChart> 
        
    </div>
)
}


export default ChartAll