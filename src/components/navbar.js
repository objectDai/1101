import React from 'react';
import styles from '../carouselStyle/index.css';
export default () => {
    function clicks(e){
       e.target.setAttribute('class','clicked')
    }
    const i={
      fontStyle: 'normal',
      color: '#fff',
      padding: '0 10px'
    }
    const li={
      float:' left',
      listStyle: 'none',
      width: '80px',
      height: '100%',
      textAlign: 'center'
 }
 const a={
  display: 'inline-block',
  width: '100%',
  height: '100%',
  textDecoration:' none',
  color: '#fff'
 }
  return (
    <div style={{ height: '100%',
      padding: '10px 100px',
      backgroundColor: '#2c2f33'}}>
     <a href="">
         <img  src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" style={{ width: '100px',
    height:'20px',}}/>
     </a>
     <i style={i}>|</i>
     <i style={i}>社招官网</i>
     <ul onClick={clicks} style={{ display: 'inline-block',
    height: '20px',
    padding: 0,
    margin: 0}}>
         <li style={li}><a href="#" style={a}>首页</a></li>
         <li style={li}><a href="#"  style={a}>社会招聘</a></li>
         <li style={li}><a href="#"  style={a}>校园招聘</a></li>
         <li style={li}><a href="#" style={a}>了解阿里</a></li>
         <li style={li}><a href="#"  style={a}>个人中心</a></li>
     </ul>
    
    </div>
    
  );
}
