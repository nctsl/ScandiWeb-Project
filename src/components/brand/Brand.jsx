import React from 'react';
import { puma, burberry, dg, chanel, nike} from './imports';
import './brand.css';

const Brand = () => (
  <div className="nstr__brand section__padding">
    <div>
      <img src={burberry} alt='burberry'/>
    </div>
    <div>
      <img src={dg} alt='dg'/>
    </div>
    <div>
      <img src={chanel} alt='chanel'/>
    </div>
    <div>
      <img src={nike} alt='nike' />
    </div>
    <div>
      <img src={puma} alt='puma' />
    </div>
  </div>
);

export default Brand;
