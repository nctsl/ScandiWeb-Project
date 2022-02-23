import React from 'react';
import Feature from '../../components/feature/Feature';
import './women.css';
import { festivetree, sweater1, festiveelf, purpledress, blackdress, dbluedress } from './imports';

const women = () => (
  <div className="nstr__women section__margin" id="wnstr">
    <div className="nstr__women-feature">
      <Feature title="Women" />
    </div>
    <div className="nstr__women-heading">
      <h1 className="gradient__text">The Best Options For Women!</h1>
    </div>
    <div className="nstr__women-container">
      <Feature title="Sweaters"  />
      <div>
        <img src={sweater1} alt='sweater1'/>
        <p> Brown Leaf Sweater</p>
        <button className='discarditem'>
          -
        </button>
        <p> 50 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={festiveelf} alt='Festive Elf'/>
        <p> Festive Elf Sweater</p>
        <button className='discarditem'>
          -
        </button>
        <p> 60 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={festivetree} alt='Festive Tree'/>
        <p> Festive Tree Sweater</p>
        <button className='discarditem'>
          -
        </button>
        <p> 70 $ </p>
        <button className='additem'>
          +
        </button>
      </div>

      <Feature title="Dresses"  />
      <div>
        <img src={dbluedress} alt='Dark Blue Dress'/>
        <p> Dark Blue Chic Dress</p>
        <button className='discarditem'>
          -
        </button>
        <p> 250 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={blackdress} alt='Black Dress'/>
        <p> Black Short Dress</p>
        <button className='discarditem'>
          -
        </button>
        <p> 350 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      <div>
        <img src={purpledress} alt='Purple Dress'/>
        <p> Purple Short Dress</p>
        <button className='discarditem'>
          -
        </button>
        <p> 270 $ </p>
        <button className='additem'>
          +
        </button>
      </div>
      
    </div>
  </div>
);

export default women;