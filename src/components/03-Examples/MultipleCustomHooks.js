import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = (qoute) => {

const [state, setState] = useState(qoute = 1)

    
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { author, quote } = !!data && data[0];
    

    const handleButton = () => {
        setState(state + 1);
    }

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />
            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
               
                <button className="btn btn-primary" onClick={handleButton} type="button">Change </button>
            </div>

        </div>
    )
}
