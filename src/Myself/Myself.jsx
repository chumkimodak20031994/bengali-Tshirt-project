import React from 'react';
import Special from '../Special/SPECIAL.JSX';

const Myself = ({ring}) => {
    return (
        <div>
      <h2>Myself</h2> 
      <Special ring={ring}></Special>     
        </div>
    );
};

export default Myself;