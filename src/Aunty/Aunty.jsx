import React from 'react';
import Cusinbrother from '../Cusinbrother/Cusinbrother';
import MaternalBrother from '../MaternalBrother/MaternalBrother';
import MatarnalSister from '../MaternalSister/MatarnalSister';

const Aunty = () => {
    return (
        <div className='aunty'>
         <h4>This is aunty</h4> 
         <section className='flex'>
            <MaternalBrother></MaternalBrother>  
            <MatarnalSister></MatarnalSister>
        </section>  
        </div>
    );
};

export default Aunty;