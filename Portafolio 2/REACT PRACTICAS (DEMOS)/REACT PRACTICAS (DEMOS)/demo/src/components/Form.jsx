import React, { useState } from 'react';

export default function Form(){

    // Estados para el nombre y apellido
    const [firstName, selfFirstName]= useState('');
    const [lastName, selfLastName] = useState('');

    // Concatenación del nombre completo
    const fullname = firstName + '' + lastName

    // Función para manejar cambios en el nombre
    function handleFirstNameChange(e){
        selfFirstName(e.target.value); 
    }

    // Función para manejar cambios en el apellido
    function handleLastNameChange(e){
        selfLastName(e.target.value);
    }

    return(
        <>
        {/* Formulario de registro */}
        <h2>SignUp</h2> 
        <form action="" class="form">
            {/* Campo de entrada para el nombre */}
            <label htmlFor="firstName">First Name : </label>
            <input type="text" value={firstName} onChange={handleFirstNameChange}/>
            
            {/* Campo de entrada para el apellido */}
            <label htmlFor="lasName">Last Name : </label>
            <input type="text" value={lastName} onChange={handleLastNameChange}/>
        </form>

        {/* Mostrar el nombre completo */}
        <p> Welcome : <strong>{fullname}</strong></p>
        </>
    );
}