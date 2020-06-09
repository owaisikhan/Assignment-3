import React from 'react'

function Form(props){
    return(
        <div>
            <label>{props.account}</label>
            <input placeholder="ID" maxLength="10"/>
            <label>{props.name}</label>
            <input type="email" placeholder="email"/>
        </div>
    )
}

export default Form;