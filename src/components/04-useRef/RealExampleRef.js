import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-Examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [state, setState] = useState(false)
    return (
        <div>
            { state && < MultipleCustomHooks />}

            <button className="btn btn-primary" onClick={()=>{
                    setState(!state)
            }}>Show / Hide</button>
        </div>
    )
}
