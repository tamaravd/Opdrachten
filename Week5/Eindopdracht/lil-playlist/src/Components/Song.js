import React from 'react';

const song = props => {
    return (
      <li
        key={props.id}
        className="song-item"
        value={props.title}
        style={{display: 'flex'}}
      >
        <span style={{flex: '5'}}> {props.title}</span>
        <span style={{flex: '5'}}> {props.artist}</span>
        <span style={{flex: '5'}}> {props.genre}</span>
        <span style={{flex: '5'}}> {props.rating}</span>
        <span style={{flex: '1'}}>
          <button onClick={event => {
            props.click(event, props.id);
          }} style={btnStyle}>x</button>
        </span>
      </li>
    );
  };

  const btnStyle = {     
      background: 'red',
      color: '#fff',
      border: 'none',
      padding: '5px 9px',
      borderRadius: '50%',
      cursor: 'pointer',
      
  }
  export default song