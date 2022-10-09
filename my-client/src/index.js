import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Col from 'react-bootstrap/Col';

//const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
  params: {q: 'aapl', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
  headers: {
    'X-RapidAPI-Key': '8cba1d2bc5mshc4c929563041187p1ab497jsn34bc005fd1bf',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));

class APIComponent extends React.Component{
  render(){
    {axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });} 

    return (
      <p Col xs={3}> Api Results are shown in Console Succesfully </p>
    );
  }
}



root.render(
  <React.StrictMode>
    <App />
    <br></br>
    <APIComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
