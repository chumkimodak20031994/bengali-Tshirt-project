import React, { useContext } from 'react';
import Cusinbrother from '../Cusinbrother/Cusinbrother';
import Cusinsister from '../Cusinsister/Cusinsister';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney]=useContext(MoneyContext);
    return (
        <div className='uncle'>
            <p><small>grandpa money : {money}</small></p>
            <button onClick={()=>setMoney (money+1000)}>Send 1000 thausend</button>
        <h3>this is uncle </h3> 
        <section className='flex'>
            <Cusinbrother>CUsinbrother </Cusinbrother>
            <Cusinsister></Cusinsister>
            </section>   
        </div>
    );
};

export default Uncle;