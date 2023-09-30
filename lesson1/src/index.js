import React, {Fragment}from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = 'My First React Project';

const firstNumbs = [1,2,3,4];
const secondNumbs = [1.6,2.7,3.8,4.9];

const inputOne = <input type='text' placeholder='name' />
const inputTwo = <input type='email' placeholder='email' />

function Element (){
    return(
        <div style={{width:'500px', height: '300px', margin:'0 auto'}}>
            <h1>{heading}</h1>
            {firstNumbs.map((num) => (
                <li style={{fontWeight:'500', fontSize:'18px'}} key={num}>{num}</li>
            ))}
            <hr/>
            {secondNumbs.map((secNum) => (
                <p style={{fontWeight:'500', fontSize:'18px'}} key={secNum}>{secNum}</p>
            ))}
            <hr/>
            {inputOne}
            {inputTwo}
            <button>Submit</button>
        </div>
    )
}

root.render(<Element/>);

reportWebVitals();
