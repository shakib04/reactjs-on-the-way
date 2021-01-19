//import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const name = "Shakibul Alam";
const date = new Date();

const headStyle = {
  color: "green",
  backgroundColor: "aliceblue",
  padding: "30px",
  fontSize: "50px"
}

ReactDOM.render(
  <div>
    <h2 className="h2-design" style={{ color: 'white', fontSize: '75px', fontWeight: 'bold' }}>Welcome to React World</h2>
    <div className="card">
      <h3 style={headStyle}>Heading 3</h3>
      <h1 className="name-style">{name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
      quaerat natus quasi pariatur
      quisquam deleniti aut
    iusto enim tempora repudiandae?</p>
      <h2>{date.getDate() + "-" + date.getUTCMonth() + "-" + date.getFullYear()}</h2>
    </div>
  </div>,
  document.getElementById('root')
);