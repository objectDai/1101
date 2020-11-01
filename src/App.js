import React from 'react';
// import styles from './App.css';
import Navbar from './components/navbar'

import Carousel from './components/list'
export default () => {
  const img_style = {
    display:'block',
    width: '100%',
    height: '400px'}
    const top={
      position:'relative',
    }
    const btn={
      display: 'inline-block',
      padding: 0,
      width: '50px',
      height:'25px',
      marginLeft: '10px',
      boxSizing: 'content-box',
      backgroundColor:' orange',
      border:' none',
      color:' #fff',
      borderRadius: '2px',
    }
    const title={
      width: '300px',
      height: '200px',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: '60px',
      margin: 'auto',
      color:' #fff'

    }
    const froms={
      marginTop: '30px',
      height: '40px'
    }
    const inputs={
      width:' 220px',
      height: '25px',
      padding: 0,
      float: 'left',
      border: 'none',
      borderRadius: '2px',
      outline: 'none',
      textIndent: '10px',
    }
  return (
    <div>
      <Navbar/>
      <div style={top}>
        <img style={img_style} src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
        <div style={title}>
          <h1>If not now,when?</h1>
          <h1>If not me,who?</h1>
          <h3>此时此刻,非我莫属!</h3>
          <form action="#" style={froms}>
             <input type="text" style={inputs}/> <button style={btn}>搜索</button>
         </form>
        </div>
      </div>
      < Carousel/>
     
    </div>
  );
}
