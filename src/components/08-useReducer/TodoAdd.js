import React from 'react'

export const TodoAdd = ({handleSubmit, handleInputChange, description}) => {
    return (
        <>
             <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={description}
                        />

                        <button type="submit"  className="btn btn-outline-primary mt-1 btn-block">Agregar</button>

                    </form>
        </>
    )
}
