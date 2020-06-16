import React from 'react'


export default function Students(props) {
    
    return(
        <React.Fragment>
                <span className="btnStudents">
                <button 
                name= {props.students}
                style= {btnStyle}
                onClick={event => {
                    props.click(event, props.id);
                  }}>
                {props.students}
                </button>
                </span>
                
        </React.Fragment>
        
    )
}
const btnStyle = {     
    marginBottom: '10px',
    background: 'orange',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
}