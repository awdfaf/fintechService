import React, { useState } from 'react'
import AppBar from '../components/common/AppBar';
import axios from 'axios';

const AxiosTest = () => {
  const [data, setData] = useState([]);
  const handleClick = () => {
    const url = "https://newsapi.org/v2/everything?apiKey=cda7e673ed5949338cf54ecf866ddb1d&q=samsung&from=2022-07-05";
    axios.get(url).then((response) => {
        console.log(response.data);
        setData(response.data)
    });
    console.log("hello");
  }  

  return (
    <>
      <AppBar title={"통신테스트"}/>
      <button onClick={handleClick}>데이터 Request(요청)</button>
    </>
  )
}

export default AxiosTest

