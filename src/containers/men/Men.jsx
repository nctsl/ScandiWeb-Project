import React from 'react';
import { Feature } from '../../components';
import './men.css';
import { festivemen, festivemen2, msweater1, shirt1, shirt2, bshirt } from './imports';



const Men = () => (
  <div className="nstr__men section__margin" id="mnstr">
    <div className="nstr__men-feature">
      <Feature title="Men" />
    </div>
    <div className="nstr__men-heading">
      <h1 className="gradient__text">The Best Options For Men!</h1>
    </div>
    <div className="nstr__men-container">
      <Feature title="Sweaters"  />
      <div>
        <img src={msweater1} alt='sweater1'/>
        <p> Light Brown Tribal Sweater</p>
        <button className='discarditem'>
          -
        </button>
        <p> 30 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={festivemen} alt='Festive Sweater'/>
        <p> Festive Christmas Sweater</p>
        <button className='discarditem'>
          -
        </button>
        <p> 80 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={festivemen2} alt='Festive Sweater'/>
        <p> Festive Movie Sweater</p>
        <button className='discarditem'>
          -
        </button>
        <p> 100 $ </p>
        <button className='additem'>
          +
        </button>
      </div>

      <Feature title="Shirts"  />
      <div>
        <img src={bshirt} alt='Black Shirt'/>
        <p> Black Short Sleeve Shirt</p>
        <button className='discarditem'>
          -
        </button>
        <p> 50 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={shirt1} alt='Gray Shirt'/>
        <p> Gray Shirt</p>
        <button className='discarditem'>
          -
        </button>
        <p> 30 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={shirt2} alt='Sport Shirt'/>
        <p> Sport Shirt</p>
        <button className='discarditem'>
          -
        </button>
        <p> 20 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      
    </div>
  </div>
);


export default Men;
