import React from 'react';
import './Home.css';
import tree from '../../assets/img/tree.jpg';
import videoSource from '../../assets/Tree_6.mp4';
 import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
         
      
        </div>
        
      </div>
    </div>


  );
};

export default Home;