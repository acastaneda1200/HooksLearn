import React, {useState} from 'react'
import './counter.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
        counter3: 20,
    })

    const {counter1, counter2} = counter;
    return (
        <>
           <h1>C1: {counter1}</h1>
           <h1>C2: {counter2}</h1>
            <hr/>
            <button onClick={()=>{
                setCounter({
                    ...counter,
                    counter1: counter1+1
                });
            }} className="btn btn-primary">+1</button>
        </>
    )
}
