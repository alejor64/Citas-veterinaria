import React, { Fragment, useState } from 'react'
import shortid from "shortid"
import PropTypes from 'prop-types'

export const Formulario = ({crearCita}) => {

    const initialState = {
        mascota: '',
        propietario: '',
        fecha:'',
        hora: '',
        sintomas: ''
    }

    const [cita, setCita] = useState(initialState)
    const [error, setError] = useState(false)

    const {mascota, propietario, fecha, hora, sintomas} = cita

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const submitCita = (e) => {
        e.preventDefault()
        
        if(!mascota.trim() || !propietario.trim() || !fecha.trim() || !hora.trim() || !sintomas.trim()){
            console.log('Error')
            setError(true)
            return
        }

        setError(false)

        cita.id = shortid.generate()
        
        crearCita(cita)

        setCita(initialState)

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form
                onSubmit={submitCita}
            >

                {
                    error && <p className="alerta-error">Todos los campos son obligatorios</p>
                }

                <label>Nombre de mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>

            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}