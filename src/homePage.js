import React from "react";
import background from './img/background';
import butlogo1 from './img/butlogo1';
import butlogo2 from './img/butlogo2';
import './styleHomePage';



function homePage() {
  return (
    
    <div className='home'>
      <div className='header'>
      <button class="button">Home</button>
            <button class="button">Register</button>
            <button class="button">How it works</button>
            <button class="button">Verify</button> 
            <button class="button">View certificate </button>
      </div>

      <div className='text'>
          <h1 className='h1'> Create a certificate </h1>
          <h1>  On Blockchain </h1>
      </div>

      <div className='logo'>
        <h6> You are an Administrator of :</h6>
        <div >

           <a href="">
              <button  className='butlogo1'> 
                <img className='imgbutlogo1' src={butlogo1}></img>
             </button>
           </a>

           <button className='butlogo2' id='butlogo2'>
             <img className='imgbutlogo2' src={butlogo2}></img>
           </button>
           
        </div>
      </div>




    </div>
  
  );
}

export default homePage;