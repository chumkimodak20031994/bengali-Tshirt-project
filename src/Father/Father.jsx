import React from 'react';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';

const Father = ({ring}) => {
    return (
        <div className='father'>
          <h2>this is father</h2> 
          <section className='flex'>
          <Myself ring={ring}></Myself>
          <Sister></Sister>
          <Brother></Brother>
          </section>
        </div>
    );
};

export default Father;